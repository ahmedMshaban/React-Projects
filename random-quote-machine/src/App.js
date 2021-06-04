import React, { useState } from "react";
import QuoteText from "./components/QuoteText";
import QuoteAuthor from "./components/QuoteAuthor";
import NewQuote from "./components/NewQuote";
import ShareQuote from "./components/ShareQuote";

const Quotes = [
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Weeks of programming can save you hours of planning.",
    author: "Unknown",
  },
  {
    text: "First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.",
    author: "George Carrette",
  },
  {
    text: "The harder the conflict, the more glorious the triumph.",
    author: "Thomas Paine",
  },
  {
    text: "The question of whether computers can think is like the question of whether submarines can swim.",
    author: "E.W. Dijkstra",
  },
  {
    text: "What matters most is how well you walk through the fire.",
    author: "Charles Bukowski",
  },
  {
    text: "You will do foolish things, but do them with enthusiasm.",
    author: "Colette",
  },
  {
    text: "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.",
    author: "Eagleson's Law",
  },
  {
    text: "The scariest moment is always just before you start.",
    author: "Stephen King",
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
  },
];

function App() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const generateRandomQuote = () => {
    setCurrentQuote(Math.floor(Math.random() * Quotes.length)); // returns a random integer from 0 to Quotes length
  };

  return (
    <div id="quote-box">
      <QuoteText />
      <QuoteAuthor />
      <NewQuote onClickHandler={generateRandomQuote} />
      <ShareQuote />
    </div>
  );
}

export default App;
