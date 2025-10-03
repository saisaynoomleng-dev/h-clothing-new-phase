#Project Notes

**Sanity selectable checkbox string values**
`defineField({
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
      },`

---

** Filter and Sort the original products**
`const dealsOfTheDay = products
    ? products
        .filter((product) => product.isDiscounted)
        .sort((a, b) => (b.discountAmount ?? 0) - (a.discountAmount ?? 0))
    : products;`

---
