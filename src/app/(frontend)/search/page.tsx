import Bounded from '@/components/Bounded';
import ProductCardOne from '@/components/ProductCardOne';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_PRODUCTS_QUERY } from '@/sanity/lib/queries';
import clsx from 'clsx';
import Link from 'next/link';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string; page: string }>;
}) => {
  const { query, page } = await searchParams;
  const params = {
    search: query + '*' || null,
  };

  const { data: products } = await sanityFetch({
    query: ALL_PRODUCTS_QUERY,
    params,
  });

  const currentPage = parseInt(page || '1', 10);
  const totalProducts = products.length;
  const productPerPage = 10;
  const totalPages = Math.ceil(totalProducts / productPerPage);
  const startIndex = (currentPage - 1) * productPerPage;
  const endIndex = startIndex + productPerPage;
  const allProducts = products.slice(startIndex, endIndex);

  return (
    <Bounded className="add-padding">
      <div>Search Results for "{query}"</div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2">
        {allProducts.map((product) => (
          <ProductCardOne key={product.slug?.current} {...product} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-x-2">
        <Link
          href={{
            pathname: '/search',
            query: {
              ...(query && { query }),
              page: currentPage === 1 ? currentPage : currentPage - 1,
            },
          }}
          className={clsx(
            currentPage === 1
              ? 'pointer-events-none text-black/20'
              : 'pointer-events-auto text-black',
          )}
        >
          <FaChevronCircleLeft />
        </Link>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <Link
              key={pageNumber}
              href={{
                pathname: '/search',
                query: {
                  ...(query && { query }),
                  page: pageNumber,
                },
              }}
            >
              {pageNumber}
            </Link>
          ),
        )}

        <Link
          href={{
            pathname: '/search',
            query: {
              ...(query && { query }),
              page: currentPage === totalPages ? totalPages : currentPage + 1,
            },
          }}
          className={clsx(
            currentPage === totalPages
              ? 'pointer-events-none text-black/20'
              : 'pointer-events-auto text-black',
          )}
        >
          <FaChevronCircleRight />
        </Link>
      </div>
    </Bounded>
  );
};

export default SearchPage;
