import { urlFor } from '@/sanity/lib/image';
import { ALL_PRODUCTS_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Title from './Title';
import { formatCurrency } from '@/lib/utils';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import ShopNowButton from './ShopNowButton';

const ProductCardTwo = (
  props: NonNullable<ALL_PRODUCTS_QUERYResult>[number],
) => {
  const {
    slug,
    mainImages,
    category,
    name,
    price,
    rating,
    isDiscounted,
    discountAmount,
  } = props;

  if (!mainImages) return <p>Loading Product Image...</p>;

  const imageURL = mainImages
    ? mainImages[0].asset?.url
    : 'https://placehold.co/400';

  const imageAlt = mainImages ? mainImages[0].alt : '';

  const finalPrice =
    price && discountAmount ? price - price * (discountAmount / 100) : price;

  return (
    <div className="min-w-[300px] md:min-w-[500px] grid grid-cols-2 border border-brand-rose p-2 rounded-sm items-center">
      <div className="relative">
        {imageURL ? (
          <Image
            src={urlFor(imageURL).width(600).height(600).format('webp').url()}
            width={600}
            height={600}
            alt={imageAlt as string}
            className="w-full rounded-sm relative"
            priority
          />
        ) : null}
        {isDiscounted ? (
          <div className="absolute top-1 left-1 bg-brand-red px-2 rounded-sm text-brand-linen text-fs-300">
            {discountAmount}% off
          </div>
        ) : null}
      </div>

      <div className="p-2 flex flex-col justify-center gap-y-3">
        <p className="text-fs-300 capitalize text-black/80">{category}</p>

        <Title as="h4" className="capitalize font-semibold">
          {name}
        </Title>

        {isDiscounted && (
          <p className="flex gap-x-2 items-center">
            {formatCurrency(finalPrice as number)}
            {discountAmount && (
              <span className="line-through text-black/70">
                {formatCurrency(price as number)}
              </span>
            )}
          </p>
        )}

        <p className="flex gap-x-2 items-center">
          <FaStar className="text-brand-red" />
          <span>{rating?.toFixed(2)}</span>
        </p>

        <p className="text-fs-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          numquam!
        </p>

        <Link
          href={`/shop/${slug?.current}`}
          className="flex gap-x-2 items-center self-end group"
        >
          <p className="group-hover:underline underline-offset-2">Shop Now </p>
          <span className="group-hover:translate-x-1 transition-transform duration-150 ease-in">
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCardTwo;
