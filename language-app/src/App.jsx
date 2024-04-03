import { useState } from 'react';
import './App.css';
import { ScaleGreeting } from './components/ScaleGreeting';
import { Greeting } from './components/Greeting';
import { Languages } from './components/Languages'; 

function App() {
  const [greeting, setGreeting] = useState('I am approaching.');
  const [fontSize, setFontSize] = useState(5);

  const handleTranslation = (translation) => {
    setGreeting(translation);
  }

  const decreaseFontSize = () => {
    setFontSize(prevSize => prevSize - .5);
  }

  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + .5);
  }
 
  return (
    <>
      <ScaleGreeting onDecrease={decreaseFontSize} onIncrease={increaseFontSize} />
      <Greeting greeting={greeting} fontSize={fontSize} />
      <Languages onLanguageChange={handleTranslation} />
      <p>how do i vertically center this in a responsive manner i am begging for answers</p>
    </>
  );
};

export default App;
