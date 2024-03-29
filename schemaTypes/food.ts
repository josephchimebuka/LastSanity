// schemas/food.js
export default {
  name: 'food',
  title: 'Food Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Food Name',
      type: 'string',
    },
    {
      name: 'inBracket',
      title: 'In Bracket',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
  ],
};
