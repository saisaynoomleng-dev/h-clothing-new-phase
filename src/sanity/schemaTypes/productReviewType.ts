import { CiChat1 } from 'react-icons/ci';
import { FaUser } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const productReviewType = defineType({
  name: 'productReview',
  title: 'Product Review',
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
  preview: {
    select: {
      name: 'name',
      rating: 'rating',
      date: 'reviewDate',
      image: 'mainImage',
      isVerified: 'isVerified',
    },
    prepare({ name, rating, date, image, isVerified }) {
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
      const verification = isVerified ? 'Verified' : 'Not Verified';

      return {
        title: `${nameFormatted} (${verification})`,
        subtitle: `${rating}Star(s) | ${dateFormatted}`,
        media: image || FaUser,
      };
    },
  },
});
