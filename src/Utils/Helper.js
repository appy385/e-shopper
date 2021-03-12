import React from 'react';

const groupByCategory = (products, tag) => products.reduce((acc, product) => {
  const newProduct = {
    ...product,
    src: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    quantity: (tag === 'products') ? product.count : 0,
    count: (tag === 'products') ? 0 : product.count,

  };
  const { category } = newProduct;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(newProduct);
  return acc;
}, {});

export default groupByCategory;
