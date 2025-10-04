import { urlFor } from '@/sanity/lib/image';
import { ALL_PRODUCTS_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import Title from './Title';
import { formatCurrency } from '@/lib/utils';

const ProductCardOne = (
  props: NonNullable<ALL_PRODUCTS_QUERYResult>[number],
) => {
  const {
    slug,
    mainImages,
    name,
    category,
    price,
    rating,
    isDiscounted,
    discountAmount,
  } = props;

  if (!mainImages) return <p>Error Loading Image</p>;

  const urlImage = mainImages
    ? mainImages[0].asset?.url
    : 'https://placehold.co/400';

  const altImage = mainImages ? mainImages[0].alt : '';

  const finalPrice =
    price && discountAmount ? price - price * (discountAmount / 100) : price;

  return (
    <Link
      href={`/shop/${slug?.current}`}
      className="flex flex-col gap-y-2 max-w-[300px]"
    >
      <div className="relative">
        {urlImage ? (
          <Image
            src={urlFor(urlImage).width(600).height(600).format('webp').url()}
            width={400}
            height={400}
            alt={altImage as string}
            className="w-full relative"
            priority
          />
        ) : null}
        {isDiscounted && (
          <div className="absolute top-1 left-1 bg-brand-red px-2 rounded-sm text-brand-linen">
            {discountAmount}% off
          </div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <p className="text-black/80 capitalize font-semibold text-fs-300">
          {category}
        </p>
        <p className="flex gap-x-2 items-center">
          <span>
            <FaStar className="text-brand-red" />
          </span>
          {rating?.toFixed(2)}
        </p>
      </div>

      <Title as="h4" className="font-semibold capitalize">
        {name}
      </Title>

      {price ? (
        <p>
          {formatCurrency(finalPrice as number)}{' '}
          {isDiscounted && (
            <span className="line-through text-black/90">
              {formatCurrency(price)}
            </span>
          )}
        </p>
      ) : null}
    </Link>
  );
};

export default ProductCardOne;
