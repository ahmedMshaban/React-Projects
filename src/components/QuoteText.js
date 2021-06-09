import React from 'react';

const QuoteText = (props) => {
    return (
        <p id="text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.092 6.863c-1.504 2.31-1.779 4.45-1.681 5.688 6.132-.101 5.696 6.449 1.39 6.449-1.83 0-3.801-1.338-3.801-4.275 0-2.724 1.412-5.845 4.092-7.862zm-13 0c-1.504 2.31-1.779 4.45-1.681 5.688 6.132-.101 5.696 6.449 1.39 6.449-1.83 0-3.801-1.338-3.801-4.275 0-2.724 1.412-5.845 4.092-7.862zm16.908-3.863c-6.108 1.206-10 6.584-10 11.725 0 3.97 2.786 6.275 5.801 6.275 2.615 0 5.199-1.797 5.199-4.979 0-2.601-1.905-4.757-4.396-5.149.217-2.004 2.165-4.911 4.38-5.746l-.984-2.126zm-13 0c-6.108 1.206-10 6.584-10 11.725 0 3.97 2.786 6.275 5.801 6.275 2.615 0 5.199-1.797 5.199-4.979 0-2.601-1.905-4.757-4.396-5.149.217-2.004 2.165-4.911 4.38-5.746l-.984-2.126z"/></svg>{props.text}</p>
    );
}

export default QuoteText;