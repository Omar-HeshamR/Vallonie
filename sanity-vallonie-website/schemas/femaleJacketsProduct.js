export default {
    name: 'femaleJacketsProduct',
    title: 'FemaleJacketsProduct',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'details',
        title: 'Details',
        type: 'string',
      },
      {
        name: 'discountOn',
        title: 'DiscountOn',
        type: 'boolean',
      },
      {
        name: 'discount',
        title: 'Discount',
        type: 'number',
      },
      {
        name: 'smallStock',
        title: 'SmallStock',
        type: 'number',
      },
      {
        name: 'mediumStock',
        title: 'MediumStock',
        type: 'number',
      },
      {
        name: 'largeStock',
        title: 'LargeStock',
        type: 'number',
      },
      {
        name: 'isFragrance',
        title: 'IsFragrance',
        type: 'boolean',
      },
    ]
  }