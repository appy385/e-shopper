export const mockGetItems = {
  data: {
    data: [
      {
        id: 1,
        name: 'apple',
        price: 120,
        count: 20,
        category: 'Fruits & Vegatables',
      },
      {
        id: 2,
        name: 'table cloth',
        price: 200,
        count: 3,
        category: 'Household Items',
      }],
  },
};

export const mockGetOrders = {
  data: {
    data: [
      {
        items: [
          {
            id: 1,
            name: 'apple',
            price: 120,
            count: 1,
            category: 'Fruits & Vegatables',
          },
        ],
        id: 1,
        date: 1615122360481,
      },
    ],
  },
};

export const mockCreateOrder = {
  data: {
    data: {

      items: [
        {
          id: 4,
          name: 'duster',
          price: 80,
          count: 1,
          category: 'Household Items',
        },
        {
          id: 5,
          name: 'milk',
          price: 10,
          count: 2,
          category: 'Dairy & Eggs',
        },
      ],
    },
  },
};
