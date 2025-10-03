import { CiChat1 } from 'react-icons/ci';
import { FaUser } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const ReviewType = defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  icon: CiChat1,
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
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'reviewDate',
      title: 'Review Date',
      type: 'date',
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
      rating: 'rating',
      date: 'reviewDate',
      image: 'mainImage',
    },
    prepare({ name, rating, date, image }) {
      const nameFormatted = name
        ? `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`
        : 'Unnamed Profile';
      const dateFormatted = date
        ? new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
            day: '2-digit',
          })
        : 'Unspecified Date';

      return {
        title: `${nameFormatted}`,
        subtitle: `${rating}Star(s) | ${dateFormatted}`,
        media: image || FaUser,
      };
    },
  },
});
