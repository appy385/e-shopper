import React from 'react';
import axios from 'axios';

const getCall = async (path) => {
  const res = await axios.get(path);
  return res.data;
};

export default getCall;
