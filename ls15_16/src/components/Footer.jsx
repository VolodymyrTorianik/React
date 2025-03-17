import React, { useState, useEffect } from 'react';

export const Footer = () => {
  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log('useEffect: Стан count змінено:', count);
  }, [count]); 

  return (
    <footer>
      <p>Footer компонент</p>
      <button onClick={() => setCount(count + 1)}>
        Збільшити count (Зараз: {count})
      </button>
    </footer>
  );
};


