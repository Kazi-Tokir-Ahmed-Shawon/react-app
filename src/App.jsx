import React, { useState } from 'react';


function Header({ title }) {
  return <h1>{title}</h1>;
}

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
  return <p>Created by [Your Name]</p>;
}

function App() {
  return (
    <div>
      <Header title="My React App" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
