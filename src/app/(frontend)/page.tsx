import Banner from '@/components/Banner';
import Bounded from '@/components/Bounded';
import ProductCardOne from '@/components/ProductCardOne';
import ProductCardTwo from '@/components/ProductCardTwo';
import ReviewComponent from '@/components/ReviewComponent';
import ShopNowButton from '@/components/ShopNowButton';
import Title from '@/components/Title';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_PRODUCTS_QUERY, ALL_REVIEWS_QUERY } from '@/sanity/lib/queries';
import { TicketCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const WOMEN_WEARS = [
  'blazers',
  't-shirts & blouses',
  'dresses',
  'jackets & coats',
  'jeans',
  'knit',
];

const MEN_WEARS = [
  'blazers',
  't-shirts and shirts',
  'jackets & coats',
  'jeans',
];

const ACCESSORIES = ['handbags', 'watches', 'sunglasses', 'hats'];

const INSTA_IMG = [
  '/insta-1.jpg',
  '/insta-2.jpg',
  '/insta-3.jpg',
  '/insta-4.jpg',
  '/insta-5.jpg',
  '/insta-6.jpg',
  '/insta-7.jpg',
  '/insta-8.jpg',
  '/insta-9.jpg',
  '/insta-10.jpg',
];

export default async function Home() {
  const { data: products } = await sanityFetch({ query: ALL_PRODUCTS_QUERY });
  const { data: reviews } = await sanityFetch({ query: ALL_REVIEWS_QUERY });

  if (!products) return null;

  const topSellerProducts = products
    ? products
        .filter((product) => product.rating && product.rating >= 4.5)
        .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    : products;

  const dealsOfTheDay = products
    ? products
        .filter((product) => product.isDiscounted)
        .sort((a, b) => (b.discountAmount ?? 0) - (a.discountAmount ?? 0))
    : products;

  return (
    <Bounded>
      <div className="flex flex-col justify-center gap-y-5 add-padding items-start h-[500px] bg-[url(/home-hero.png)] bg-no-repeat bg-position-[center] md:bg-position-[right_bottom] bg-brand-blue/10">
        <p className="px-2 py-1 bg-white flex gap-x-2 capitalize rounded-2xl max-w-[80%] md:max-w-[60%]">
          <span>
            <TicketCheck />
          </span>{' '}
          <span className="font-semibold">50% OFF</span> summer super sale
        </p>

        <Title
          as="h2"
          className="text-fs-500 md:text-fs-600 lg:text-fs-700 max-w-[80%] md:max-w-[60%] font-bold"
        >
          Step into Style: Your ultimate Fashion destination
        </Title>

        <p className="max-w-[80%] md:max-w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia officiis
          quod minima ex reprehenderit eius similique, nobis voluptatibus
          tempora id?
        </p>

        <ShopNowButton />
      </div>

      <Banner />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-3 add-padding">
        <Link
          href="/shop?tag=women"
          className="flex flex-col bg-[url(/for-woman.png)] bg-no-repeat bg-position-[130%_100%] p-3 bg-brand-blue/10 bg-size-[400px] gap-y-3 "
        >
          <p className="font-semibold text-right">{}++ Items</p>

          <Title as="h3" className="font-semibold text-fs-500">
            For Women&apos;s
          </Title>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            laboriosam?
          </p>

          <ul className="flex flex-col gap-y-2">
            {WOMEN_WEARS.map((w, i) => (
              <li key={i} className="capitalize">
                {w}
              </li>
            ))}
          </ul>
        </Link>

        <div className="grid grid-rows-2 gap-y-3">
          <Link
            href="/shop?tag=men"
            className="flex flex-col bg-[url(/for-men.png)] bg-no-repeat bg-position-[130%_100%] p-3 bg-brand-blue/10 bg-size-[300px] gap-y-3 "
          >
            <p className="font-semibold text-right">{}++ Items</p>

            <Title as="h3" className="font-semibold text-fs-500">
              For Men&apos;s
            </Title>

            <ul className="flex flex-col gap-y-2">
              {MEN_WEARS.map((m, i) => (
                <li key={i} className="capitalize">
                  {m}
                </li>
              ))}
            </ul>
          </Link>

          <Link
            href="/shop?tag=accessories"
            className="flex flex-col bg-[url(/for-accessories.png)] bg-no-repeat bg-position-[100%_100%] p-3 bg-brand-blue/10 bg-size-[300px] gap-y-3 "
          >
            <p className="font-semibold text-right">{}++ Items</p>

            <Title as="h3" className="font-semibold text-fs-500">
              Accessories
            </Title>

            <ul className="flex flex-col gap-y-2">
              {ACCESSORIES.map((m, i) => (
                <li key={i} className="capitalize">
                  {m}
                </li>
              ))}
            </ul>
          </Link>
        </div>
      </div>

      <div className="space-y-3 add-padding">
        <p className="text-fs-300 font-medium">Our Products</p>
        <Title as="h3" className="capitalize font-semibold text-fs-500">
          Our top seller products
        </Title>

        <div className="flex gap-x-3 md:gap-x-5 overflow-x-auto">
          {topSellerProducts.map((product) => (
            <ProductCardOne key={product.slug?.current} {...product} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-5 bg-brand-blue/10">
        <div className="flex-1">
          <Image
            src="/home-hero-2.webp"
            width={600}
            height={400}
            alt=""
            priority
          />
        </div>

        <div className="flex flex-col gap-y-3 justify-center flex-1 p-3">
          <p>Limited Time Offers</p>
          <Title as="h3" className="text-fs-500">
            25% off all fashion favorites - Limited time!
          </Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            dolorem laudantium optio nulla voluptatem animi, ducimus aliquam
            quam in aliquid!
          </p>
          <ShopNowButton />
        </div>
      </div>

      <div className="space-y-3 add-padding">
        <p className="text-fs-300 font-medium">Our Products</p>

        <div className="flex justify-between">
          <Title
            as="h3"
            className="capitalize font-semibold flex-1 text-fs-500"
          >
            Deals of the day
          </Title>
          <p className="flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          </p>
        </div>

        <div className="flex gap-x-3 md:gap-x-5 overflow-x-auto">
          {dealsOfTheDay.map((product) => (
            <ProductCardTwo key={product.slug?.current} {...product} />
          ))}
        </div>
      </div>

      <div className="add-padding grid grid-cols-1 md:grid-cols-2 md:gap-x-5 gap-y-3">
        <div className="flex flex-col justify-center bg-brand-blue/20 p-3 gap-y-3 bg-[url(/men-collection.png)] bg-no-repeat bg-position-[right_bottom] bg-size-[250px]">
          <p>Flat 20% Discount</p>

          <Title as="h3" className="text-fs-500 font-semibold max-w-[70%]">
            Men&apos;s Latest Collection
          </Title>

          <p className="text-fs-300 max-w-[70%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            doloremque blanditiis expedita quaerat, perspiciatis dolorum unde
            magni alias cupiditate minima.
          </p>

          <ShopNowButton />
        </div>

        <div className="flex flex-col justify-center bg-brand-red/20 p-3 gap-y-3 bg-[url(/women-fashion.png)] bg-no-repeat bg-size-[250px] bg-position-[right_bottom]">
          <p>Flat 25% Discount</p>

          <Title as="h3" className="text-fs-500 font-semibold max-w-[70%]">
            Women&apos;s Latest Fashion
          </Title>

          <p className="text-fs-300 max-w-[70%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            doloremque blanditiis expedita quaerat, perspiciatis dolorum unde
            magni alias cupiditate minima.
          </p>

          <ShopNowButton />
        </div>
      </div>

      {/* <div className="space-y-3 text-center bg-brand-blue/10 py-5">
        <p>Follow Us</p>

        <h3 className="font-semibold text-fs-500">Follow Us on Instagram</h3>

        <div className="flex gap-x-3">
          <div className="flex gap-x-3 overflow-hidden min-w-screen animate-marquee hover:animate-">
            {INSTA_IMG.map((imgURL, i) => (
              <Link key={i} href="https://www.instagram.com">
                <Image
                  src={imgURL}
                  width={300}
                  height={500}
                  alt=""
                  className="min-w-full min-h-full"
                />
              </Link>
            ))}
          </div>

          <div className="flex gap-x-3 overflow-hidden min-w-screen animate-marquee">
            {INSTA_IMG.map((imgURL, i) => (
              <Link key={i} href="https://www.instagram.com">
                <Image
                  src={imgURL}
                  width={300}
                  height={500}
                  alt=""
                  className="min-w-full min-h-full"
                />
              </Link>
            ))}
          </div>
        </div>
      </div> */}

      <div className="space-y-3 add-padding">
        <p>Testimonial</p>

        <h3 className="font-semibold text-fs-500">What our clients say</h3>

        <ReviewComponent reviews={reviews} />
      </div>
    </Bounded>
  );
}
