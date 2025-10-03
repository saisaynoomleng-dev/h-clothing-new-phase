import clsx from 'clsx';
import { GoPackage } from 'react-icons/go';
import Title from './Title';
import { CiWallet } from 'react-icons/ci';

const Banner = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'grid md:grid-cols-3 md:gap-x-5 gap-y-3 md:gap-y-0 add-padding place-content-around md:place-items-center',
        className,
      )}
    >
      <div className="grid grid-cols-[auto_1fr] gap-x-3 items-center">
        <div className="relative">
          <GoPackage size={40} className="relative z-20" />
          <div className="absolute w-7 h-7 rounded-full z-0 bg-brand-rose -right-1 top-4" />
        </div>

        <div className="flex flex-col gap-y-1">
          <Title as="h3" className="font-semibold">
            Free Shipping
          </Title>
          <p className="text-black/80 text-fs-300">
            Free shipping for order above $180
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-x-3 items-center">
        <div className="relative">
          <CiWallet size={40} className="relative z-20" />
          <div className="absolute w-7 h-7 rounded-full z-0 bg-brand-rose -right-1 top-4" />
        </div>

        <div className="flex flex-col gap-y-1">
          <Title as="h3" className="font-semibold">
            Flexible Payment
          </Title>
          <p className="text-black/80 text-fs-300">
            Multiple secure payment options
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-x-3 items-center">
        <div className="relative">
          <GoPackage size={40} className="relative z-20" />
          <div className="absolute w-7 h-7 rounded-full z-0 bg-brand-rose -right-1 top-4" />
        </div>

        <div className="flex flex-col gap-y-1">
          <Title as="h3" className="font-semibold">
            24x7 Support
          </Title>
          <p className="text-black/80 text-fs-300">
            We support online 24 hrs a day, 7 days a week.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
