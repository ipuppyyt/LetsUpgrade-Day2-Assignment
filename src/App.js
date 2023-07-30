import { Button } from '@mui/material';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const[bgColor, setbgColor] = useState("green")

  const toggleColor = () => {
    if(bgColor === "green"){
      setbgColor("grey")
    }else{
      setbgColor("green")
    }
  }

  useEffect(() => {
    document.body.style.backgroundColor = bgColor
  }, [bgColor])
    

  return (
    <div className="toggleapp">
      <h2 style={{textAlign:"center",color:"white"}}>Background Color Toggle App</h2>
      <div class="container">
        <div class="vertical-center">
      <Button onClick={() => toggleColor()} variant="contained">TOGGLE COLOR</Button>
    </div>
    </div>
    </div>
  );
}

export default App;
