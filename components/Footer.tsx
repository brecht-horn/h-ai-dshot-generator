import Link from 'next/link';
import LinkedInLogo from '../public/linkedin.svg';

export default function Footer() {
  return (
    <footer className='text-center px-4 lg:px-40 py-4 h-12 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center space-y-3 sm:mb-0 mb-3 border-gray-200'>
      <div className='text-gray-500'>
        {/* <Link
          className="text-blue-600 hover:underline font-bold"
          href="https://github.com/leap-ai/headshots-starter"
          target="_blank"
        >
          Open-source
        </Link>{" "} */}
        Powered by{' '}
        <Link
          className='text-blue-600 hover:underline font-bold'
          href='https://www.astria.ai/'
          target='_blank'
        >
          Astria,{' '}
        </Link>
        <Link
          className='text-blue-600 hover:underline font-bold'
          href='https://supabase.com/'
          target='_blank'
        >
          Supabase,{' '}
        </Link>
        and{' '}
        {process.env.DEPLOYMENT_PROVIDER === 'replit' ? (
          <Link
            className='text-blue-600 hover:underline font-bold'
            href='https://replit.com/@leap-ai/Headshot-AI-Professional-Headshots-with-Leap-AI'
            target='_blank'
          >
            Replit{' '}
          </Link>
        ) : (
          <Link
            className='text-blue-600 hover:underline font-bold'
            href='https://vercel.com/'
            target='_blank'
          >
            Vercel.
          </Link>
        )}
      </div>
      <div className='text-gray-500'>
      headShawty © 2024
      </div>
    </footer>
  );
}
