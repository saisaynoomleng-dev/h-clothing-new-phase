import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { Button } from './ui/button';

const ShopNowButton = () => {
  return (
    <Link href="/shop">
      <Button className="flex items-center gap-x-3 bg-brand-red font-semibold cursor-pointer hover:bg-brand-red/80 hover:translate-y-0.5 transition-transform duration-150 ease-in text-brand-linen">
        <span>Shop Now</span>
        <span>
          <FaArrowRight />
        </span>
      </Button>
    </Link>
  );
};

export default ShopNowButton;
