import React from 'react';

const NewQuote = (props) => {
    const clickHandler = () => {
        props.onClickHandler();
    }
    return (
        <button id="new-quote" onClick={clickHandler}>New Quote</button>
    );
}

export default NewQuote;