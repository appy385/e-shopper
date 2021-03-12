import React from 'react';
import groupByCategory from './Helper';

describe(groupByCategory.name, () => {
  test('should return items grouped in categories for tag-products', () => {
    const mockTag = 'products';
    const mockProduct = [
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
      },
    ];
    const mockResult = {
      'Household Items': [
        {
          id: 2,
          name: 'table cloth',
          price: 200,
          count: 0,
          category: 'Household Items',
          quantity: 3,
          src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        },
      ],
      'Fruits & Vegatables': [
        {
          id: 1,
          name: 'apple',
          price: 120,
          count: 0,
          category: 'Fruits & Vegatables',
          quantity: 20,
          src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        },
      ],
    };

    const responseProducts = groupByCategory(mockProduct, mockTag);
    expect(responseProducts).toEqual(mockResult);
  });

  test('should return items grouped in categories for tag-orders', () => {
    const mockTag = 'orders';
    const mockOrders = [
      {
        id: 2,
        name: 'table cloth',
        price: 200,
        count: 1,
        category: 'Household Items',
      },
      {
        id: 9,
        name: 'broom',
        price: 250,
        count: 1,
        category: 'Household Items',
      },
    ];

    const mockResult = {
      'Household Items': [
        {
          id: 2,
          name: 'table cloth',
          price: 200,
          count: 1,
          quantity: 0,
          category: 'Household Items',
          src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        },
        {
          id: 9,
          name: 'broom',
          price: 250,
          count: 1,
          quantity: 0,
          category: 'Household Items',
          src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        },
      ],
    };

    const responseProducts = groupByCategory(mockOrders, mockTag);
    expect(responseProducts).toEqual(mockResult);
  });
});
