import { useEffect, useState } from 'react';
import icon from './icon.png';
import './App.css';


function App() {

  const [tips, setTips] = useState("");
  const fetchTips = async () => {
  const response = await fetch("https://www.boredapi.com/api/activity/");
  const data = await response.json();

  setTips(data.activity);
};


  useEffect(() => {
    fetchTips();
  }, []);

  return (
    <div>
    <div className="App">
    <h1>Bored? Let's see what you should do</h1>
    </div>
    <div className='App'>
    <img src={icon} alt='bored girl' width='300px'/>
    </div>
    <div className='App'>
    <h3> {tips} </h3>
    </div>
    <div className='App'>
      <button onClick={fetchTips}>New Tip</button>
    </div>
    </div>
  );
}



export default App;
