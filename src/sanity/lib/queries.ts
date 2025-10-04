import { defineQuery } from 'next-sanity';

export const ALL_PRODUCTS_QUERY = defineQuery(`*[_type == 'product'
 && defined(slug.current)]
  | order(_createdAt desc){
  name,
  slug,
  price,
  category,
  mainImages[]{
    asset->{url},
    alt
  },
  rating,
  isDiscounted,
  discountAmount
}`);

export const ALL_REVIEWS_QUERY = defineQuery(`
  *[_type == 'review'
 && defined(slug.current)]
|order(reviewDate desc){
  name,
  slug,
  rating,
  reviewDate,
  role,
  desc,
  mainImage{
    asset->{url},
    alt
  }
}`);

export const SEARCH_QUERY = defineQuery(`*[_type == 'product'
&& defined(slug.current)
&& (
  (!defined($query)) ||
  name match $query ||
  category match $query ||
  tag match $query
)]|order(name desc){
  name,
  slug,
  price,
  category,
  mainImages[]{
    asset->{url},
    alt
  },
  rating,
  isDiscounted,
  discountAmount
}`);
