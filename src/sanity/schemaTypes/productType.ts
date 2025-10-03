import { formatCurrency } from '@/lib/utils';
import { FaTshirt } from 'react-icons/fa';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Products',
  icon: FaTshirt,
  type: 'document',
  groups: [
    { title: 'Main', name: 'main' },
    { title: 'Editorials', name: 'editorial' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'main',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) =>
        rule.required().info(`Required to generate a page on the website`),
      group: 'main',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'coat',
          'jeans',
          'shoe',
          'bottom',
          'top',
          't-shirt',
          'perfume',
          'bag',
          'hat',
          'watch',
          'dress',
          'blazer',
          'blouse',
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
      group: 'main',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      description: `It's useful to add product description for the user experience`,
      type: 'blockContent',
      group: 'main',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'User Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'slug',
              type: 'slug',
              options: {
                source: 'name',
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'reviewDate',
              title: 'Review Date',
              type: 'date',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'desc',
              title: 'Description',
              type: 'text',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'rating',
              title: 'Rating',
              type: 'number',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'mainImage',
              title: 'Profile Pic',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'isVerified',
              title: 'Is User Verified?',
              type: 'boolean',
              initialValue: false,
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImages',
      title: 'Product Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
      group: 'editorial',
    }),
    defineField({
      name: 'color',
      title: 'Available Colors',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required(),
      group: 'main',
    }),
    defineField({
      name: 'size',
      title: 'Available Sizes',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'XS', value: 'xs' },
          { title: 'S', value: 's' },
          { title: 'M', value: 'm' },
          { title: 'L', value: 'l' },
          { title: 'XL', value: 'xl' },
        ],
        layout: 'grid',
      },
      validation: (rule) => rule.required(),
      group: 'main',
    }),
    defineField({
      name: 'inStock',
      title: 'Items In-Stock',
      type: 'number',
      initialValue: 50,
      validation: (rule) => rule.required(),
      group: 'main',
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{ type: 'brand' }],
      validation: (rule) => rule.required(),
      group: 'main',
    }),
    defineField({
      name: 'origin',
      title: 'Product Origin',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'price',
      title: 'price',
      type: 'number',
      initialValue: 50,
      validation: (rule) => rule.required(),
      group: 'main',
    }),
    defineField({
      name: 'isDiscounted',
      title: 'Is the item in discount list',
      type: 'boolean',
      initialValue: false,
      group: 'main',
    }),
    defineField({
      name: 'discountAmount',
      title: 'Discounted Amount',
      type: 'number',
      initialValue: 0,
      hidden: ({ document }) => !document?.isDiscounted,
      group: 'main',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'string',
      options: {
        list: ['women', 'men', 'accessories'],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
      group: 'main',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      price: 'price',
      image: 'mainImages.0.asset',
      instock: 'inStock',
    },
    prepare({ name, price, image, instock }) {
      const nameFormatted = name
        ? `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`
        : 'Untitled Product';

      const priceFormatted = price ? formatCurrency(price) : 'Price Unlisted';

      return {
        title: nameFormatted,
        subtitle: `${priceFormatted} | In-Stock: ${instock}`,
        media: image || FaTshirt,
      };
    },
  },
});
