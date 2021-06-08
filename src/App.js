import React, { useState, useEffect } from "react";
import QuoteText from "./components/QuoteText";
import QuoteAuthor from "./components/QuoteAuthor";
import NewQuote from "./components/NewQuote";
import ShareQuote from "./components/ShareQuote";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [newQuote, setNewQuote] = useState(false);

  const generateRandomQuote = () => {
    setNewQuote(!newQuote);
  }

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [newQuote]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div id="quote-box">
        <QuoteText text={items.content} />
        <QuoteAuthor author={items.author} />
        <NewQuote onClickHandler={generateRandomQuote} />
        <ShareQuote text={items.content} />
      </div>
    );
  }
}

export default App;
