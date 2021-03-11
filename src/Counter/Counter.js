import React, { useState } from 'react';
import './Counter.scss';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button type="button" className="counter-button" onClick={() => { setCount(count + 1); }}>Click</button>
    </div>
  );
};
export default Counter;
