import axios from 'axios';

export const getItems = async () => {
  const res = await axios.get('/items');
  return res.data;
};
export const getOrders = async () => {
  const res = await axios.get('/orders');
  return res.data;
};

export const createOrder = async (body) => {
  const res = await axios.post('/orders', body);
  return res.data;
};
