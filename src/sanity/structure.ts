import { CiChat1 } from 'react-icons/ci';
import { FaShirt } from 'react-icons/fa6';
import { SiNike } from 'react-icons/si';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('H Clothing')
    .items([
      S.divider().title('Store'),
      S.documentTypeListItem('product').title('Products').icon(FaShirt),
      S.documentTypeListItem('brand').title('Brands').icon(SiNike),
      S.documentTypeListItem('review').title('Reviews').icon(CiChat1),
    ]);
