import { SiNike } from 'react-icons/si';
import { defineField, defineType } from 'sanity';

export const brandType = defineType({
  name: 'brand',
  title: 'Brand',
  type: 'document',
  icon: SiNike,
  fields: [
    defineField({
      name: 'name',
      title: 'Brand Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image',
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
  preview: {
    select: {
      name: 'name',
      image: 'mainImage',
    },
    prepare({ name, image }) {
      return {
        title: name
          ? `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`
          : 'Untitled Brand',
        media: image || SiNike,
      };
    },
  },
});
