import { AvatarIcon } from '@radix-ui/react-icons';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import Link from 'next/link';
import { Button } from './ui/button';
import React from 'react';
import { Database } from '@/types/supabase';
import ClientSideCredits from './realtime/ClientSideCredits';
import headshotGeneratorAI_Logo from '../public/HS_Logo1.png';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

const stripeIsConfigured = process.env.NEXT_PUBLIC_STRIPE_IS_ENABLED === 'true';

export const revalidate = 0;

export default async function Navbar() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: credits } = await supabase
    .from('credits')
    .select('*')
    .eq('user_id', user?.id ?? '')
    .single();

  return (
    <div className='flex w-full px-4 bg-[#131324] lg:px-40 py-4 items-center border-b-slate-500 text-center gap-8 justify-between'>
      <div className='flex gap-2 h-full'>
        <Link href='/'>
          <Image
            src={headshotGeneratorAI_Logo}
            height={45}
            alt='Headshot Generator AI Logo'
          />
          {/* <h2 className='font-bold text-sky-400/100'>
            h<b className='text-violet-400/100'>AI</b>
            dshot Generator
          </h2> */}
        </Link>
      </div>
      {user && (
        <div className='lg:flex flex-row gap-2 text-white'>
          {/* <Link href='/overview'>
            <Button variant={'ghost'}>Home</Button>
          </Link> */}
          {stripeIsConfigured && (
            <Link href='/get-credits'>
              <Button variant={'ghost'}>Get Credits</Button>
            </Link>
          )}
        </div>
      )}
      <div className='flex gap-4 lg:ml-auto text-sky-400/100'>
        {!user && (
          <Link href='/login'>
            <Button variant={'ghost'}>Login / Signup</Button>
          </Link>
        )}
        {user && (
          <div className='flex flex-row gap-4 text-center align-middle justify-center'>
            {stripeIsConfigured && (
              <ClientSideCredits creditsRow={credits ? credits : null} />
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className='cursor-pointer'>
                <AvatarIcon height={24} width={24} className='text-primary' />
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel className='text-primary text-center overflow-hidden text-ellipsis'>
                  {user.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <form action='/auth/sign-out' method='post'>
                  <Button
                    type='submit'
                    className='w-full text-left'
                    variant={'ghost'}
                  >
                    Log out
                  </Button>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
}
