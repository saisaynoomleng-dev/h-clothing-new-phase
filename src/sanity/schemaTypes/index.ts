import { type SchemaTypeDefinition } from 'sanity';
import { productType } from './productType';
import { blockContentType } from './blockContentType';
import { ReviewType } from './reviewType';
import { brandType } from './brandType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, blockContentType, ReviewType, brandType],
};
