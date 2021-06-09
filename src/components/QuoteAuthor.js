import React from "react";

const QuoteAuthor = (props) => {
  return (
    <footer id="author">
      <cite>{props.author}</cite>
    </footer>
  );
};

export default QuoteAuthor;
