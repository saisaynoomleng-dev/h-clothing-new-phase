import { type SchemaTypeDefinition } from 'sanity';
import { productType } from './productType';
import { blockContentType } from './blockContentType';
import { productReviewType } from './productReviewType';
import { brandType } from './brandType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, blockContentType, productReviewType, brandType],
};
