import React from 'react';
import axios from 'axios';
import getCall from './Api';

describe(getCall.name, () => {
  test('should return response with "/items" path ', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get');
    const mockResponse = {
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
    axiosGetSpy.mockResolvedValue(mockResponse);
    const response = await getCall('/items');
    expect(response).toEqual(mockResponse.data);
  });
  test('should return response with "/orders" path ', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get');
    const mockResponse = {
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
    axiosGetSpy.mockResolvedValue(mockResponse);
    const response = await getCall('/orders');
    expect(response).toEqual(mockResponse.data);
  });
});
