import React from "react";

const ShareQuote = (props) => {
  return (
    <a
      id="tweet-quote"
      title="Tweet this quote!"
      target="_top"
      href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURI(
        props.text
      )}`}
    >
      Tweet
    </a>
  );
};

export default ShareQuote;
