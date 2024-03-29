// schemas/drinks.ts
export default {
    name: 'drink',
    title: 'Drink Item',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Drink Name',
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
  