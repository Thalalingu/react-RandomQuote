import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((res) => {
      const randomIndex = Math.floor(Math.random() * res.length)
      const randomQuote = res[randomIndex];

      setData([randomQuote]) });
  };
  return (
    <div>
      <p>hiiiujjji</p>
      { data.map((item) => <li>{item.text}</li>)}

      <button onClick={getData}>click</button>
    </div>
  );
}
