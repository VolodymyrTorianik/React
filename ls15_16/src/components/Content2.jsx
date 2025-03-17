import React, { useState, useEffect } from 'react';


export function Content2() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);


  useEffect(() => {
    console.log('useEffect без залежностей - виконано один раз після монтування');

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);


  useEffect(() => {
    console.log('useEffect з залежністю - виконано після зміни count:', count);

  }, [count]);


  useEffect(() => {
    console.log('useEffect з очисткою - компонент буде розмонтуваний або count зміниться');
    return () => {
      console.log('Компонент розмонтовується або змінюється count');
    };
  }, [count]);

 
  useEffect(() => {
    if (data) {
      console.log('Дані отримано з API:', data);
    }
  }, [data]);

  return (

      <div> 
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Збільшити Count</button>
        {data && <div><strong>Дані:</strong> {JSON.stringify(data)}</div>}
      </div>

  );
}


