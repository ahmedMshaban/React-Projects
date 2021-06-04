import React from "react";
import QuoteText from "./components/QuoteText";
import QuoteAuthor from "./components/QuoteAuthor";
import NewQuote from "./components/NewQuote";
import ShareQuote from "./components/ShareQuote";

function App() {
  return (
    <div id="quote-box">
      <QuoteText />
      <QuoteAuthor />
      <NewQuote />
      <ShareQuote />
    </div>
  );
}

export default App;
