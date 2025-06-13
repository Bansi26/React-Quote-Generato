import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);

  const getQuote = async () => {
    setLoading(true);
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    setQuote(data[randomIndex]);
    setLoading(false);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="app">
      <div className="quote-box">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p className="text">"{quote.text}"</p>
            <p className="author">- {quote.author ? quote.author : 'Unknown'}</p>
          </>
        )}
        <button onClick={getQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
