import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  children,
  as: Comp = 'section',
  className,
}: BoundedProps) => {
  return (
    <Comp className={clsx('space-y-3 md:space-y-5 lg:space-y-10', className)}>
      {children}
    </Comp>
  );
};

export default Bounded;
