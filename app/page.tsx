import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import hero from '/public/hero2.gif';

import Logo from '/public/HS_Logo_hero.png';

import { Button } from '@/components/ui/button';
import ExplainerSection from '@/components/ExplainerSection';
import PricingSection from '@/components/PricingSection';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect('/overview');
  }

  return (
    <div className='flex flex-col items-center pt-1'>
      <div className='flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full'>
        <div className='flex flex-col space-y-4 lg:w-1/2 w-full'>
          <Image
            src={Logo}
            style={{ marginLeft: '-5px', marginBottom: '-20px' }}
            alt='Logo'
          />
          <h1 className='sm:text-2xl md:text-5xl font-bold text-violet-400/100'>
            Your One and Only Bae for AI Headshots.
          </h1>
          <p className='text-white text-lg'>
            Get{' '}
            <b style={{ color: '#eb46f5' }}>Retro, Animated, or Professional</b>{' '}
            AI headshots in minutes. Perfect for social profiles, portfolios, or
            resumes.
          </p>
          <div className='flex flex-col space-y-2'>
            <Link href='/login'>
              <Button className='w-full lg:w-1/2'>Get Your Headshots</Button>
            </Link>
            <p className='text-sm text-gray-500 italic'>
              Trusted by professionals worldwide. Quick and efficient.
            </p>
          </div>
          <div className='mt-4 text-gray-500'>
            <span>Already a member? </span>
            <Link className='text-blue-600 hover:underline' href='/login'>
              Sign In
            </Link>
          </div>
        </div>
        <div className='lg:w-1/2 w-full mt-8 lg:mt-0'>
          <img
            src={hero.src}
            alt='AI Headshot Illustration'
            className='rounded-lg object-cover w-full h-full'
          />
        </div>
      </div>
      <ExplainerSection />
      <PricingSection />
    </div>
  );
}
