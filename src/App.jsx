import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Header({ title }) {
  return <h1>{title}</h1>;
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

function Content() {
  const [text, setText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleButtonClick = () => {
    setDisplayedText(text);
  };

  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea rows="4" cols="50" value={text} onChange={handleTextAreaChange} />
      <br />
      <button onClick={handleButtonClick}>Display Text</button>
      <br />
      <p>{displayedText}</p>
    </div>
  );
}

function Footer() {
  return <p>Created by Kazi Tokir Ahmed Shawon</p>;
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};
function App() {
  return (
    <div>
      <Header title="My Simple React App" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
