import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const WaitingForMagicLink = ({
  toggleState,
}: {
  toggleState: () => void;
}) => {
  return (
    <>
      <div className='flex items-center justify-center p-8'>
        <div className='flex flex-col gap-4 bg-[#131324] dark:bg-[#131324] border border-neutral-200 p-4 rounded-xl max-w-sm w-full'>
          <h1 className='text-xl text-violet-400'>
            Check your email to continue
          </h1>
          <div className='flex flex-col gap-2'>
            <p className='text-sm text-white'>
              We've emailed you a magic link to access your account.
            </p>
            <p className='text-xs text-gray-400'>
              Hint: it might be in your spam folder.
            </p>
          </div>
          <div>
            <Button
              onClick={toggleState}
              variant='secondary'
              size='sm'
              className='text-gray-400'
            >
              <ArrowLeft size={14} />
              Go back
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
