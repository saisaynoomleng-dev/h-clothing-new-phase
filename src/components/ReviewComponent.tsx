'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { ALL_REVIEWS_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const ReviewComponent = ({
  reviews,
}: {
  reviews: NonNullable<ALL_REVIEWS_QUERYResult>;
}) => {
  const [activeReview, setActiveReview] = useState(0);

  const handleNext = () => {
    setActiveReview((prevNum) =>
      prevNum === reviews.length - 1 ? 0 : prevNum + 1,
    );
  };

  const handlePrev = () => {
    setActiveReview((prevNum) =>
      prevNum === 0 ? reviews.length - 1 : prevNum - 1,
    );
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-x-3 justify-end">
        <Button onClick={handlePrev}>
          <ChevronLeft />
        </Button>
        <Button onClick={handleNext}>
          <ChevronRight />
        </Button>
      </div>

      <div className="border w-full flex gap-x-4 p-5 bg-brand-blue/20">
        <div className="relative flex-1">
          {reviews[activeReview].mainImage?.asset?.url ? (
            <Image
              src={reviews[activeReview].mainImage.asset.url}
              alt={reviews[activeReview].mainImage.alt || ''}
              width={500}
              height={500}
              priority
              className="relative max-w-[500px] max-h-[500px]"
            />
          ) : null}
          <div className="absolute top-0 right-0 bg-brand-red p-2 w-15 h-15 flex justify-center items-center">
            <FaQuoteLeft size={30} />
          </div>
        </div>

        <div className="flex flex-col flex-1 justify-center gap-y-2">
          <p className="flex gap-x-1 items-center">
            <span className="flex">
              {Array.from(
                { length: reviews[activeReview].rating as number },
                (_, i) => (
                  <FaStar className="text-brand-red" key={i} />
                ),
              )}
            </span>
            {reviews[activeReview].rating?.toFixed(2)}
          </p>
          <p>{reviews[activeReview].desc}</p>

          <div>
            <p className="font-semibold">{reviews[activeReview].name}</p>
            <p>{reviews[activeReview].role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
