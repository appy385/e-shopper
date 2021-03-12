import React from 'react';
import axios from 'axios';
import { getItems, getOrders, createOrder } from './Api';
import { mockGetItems, mockGetOrders, mockCreateOrder } from '../mockdata/api';

describe(getItems.name, () => {
  test('should return response with "/items" path ', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get');
    axiosGetSpy.mockResolvedValue(mockGetItems);
    const response = await getItems();
    expect(response).toEqual(mockGetItems.data);
  });
});

describe(getOrders.name, () => {
  test('should return response with "/orders" path ', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get');
    axiosGetSpy.mockResolvedValue(mockGetOrders);
    const response = await getOrders();
    expect(response).toEqual(mockGetOrders.data);
  });
});

describe(createOrder.name, () => {
  test('should return response with "/order" path ', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'post');
    axiosGetSpy.mockResolvedValue(mockCreateOrder);
    const response = await createOrder();
    expect(response).toEqual(mockCreateOrder.data);
  });
});
