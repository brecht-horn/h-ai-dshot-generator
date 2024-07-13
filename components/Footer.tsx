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
      <div className='flex space-x-4 pb-4 sm:pb-0'>
        <Link
          href='https://www.linkedin.com/in/brecht-horn/'
          className='group'
          aria-label='LinkedIn'
          target='_blank'
        >
          <svg
            aria-hidden='true'
            className='h-6 w-6 fill-gray-500 group-hover:fill-gray-300'
            // src={LinkedInLogo}
          >
            <path
              d='M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z
		 M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087
		c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345
		c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537
		c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002
		z'
            />
          </svg>
        </Link>
        <Link
          href='https://github.com/brecht-horn/h-ai-dshot-generator'
          className='group'
          aria-label='GitHub'
          target='_blank'
        >
          <svg
            aria-hidden='true'
            className='h-6 w-6 fill-gray-500 group-hover:fill-gray-300'
          >
            <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z' />
          </svg>
        </Link>
      </div>
    </footer>
  );
}
