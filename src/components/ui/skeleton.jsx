import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }) {
  return (
    <div
      data-testid="skeleton"
      className={cn('animate-pulse rounded-md bg-gray-600/10', className)}
      {...props}
    />
  );
}

export { Skeleton };
