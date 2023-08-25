import { useEffect, useState } from 'react';
import icon from './icon.png';
import './App.css';
import Button from './Button';

function App() {

  const [advice, setAdvice] = useState(""); 
  const [showAdvice, setShowAdvice] = useState(false)

  useEffect(() => {
    if (showAdvice) { 
      getAdvice();
    }
  }, [showAdvice]);

  const getAdvice = async () => {
    const response = await fetch (`http://www.boredapi.com/api/activity/ `)
    const data = await response.json();
    setAdvice(data.activity);
  };

  const buttonClick = () => {
    setShowAdvice(!showAdvice);
  }


  return (
    <div>
    <div className="App">
    <h1>Bored? Let's see what you should do</h1>
    </div>
    <div className='App'>
    <img src={icon} alt="bored girl" width="300px"/>
    </div>

    <Button onClick={buttonClick}/>

    {showAdvice && (
    <div className='App'>
    <h3>{advice}</h3>
    </div>
    )}
  </div>
  );
}

export default App;
