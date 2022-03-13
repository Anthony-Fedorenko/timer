import './App.css';
import {useEffect, useState} from "react";
import Content from "./Content";

function App() {
const [timer, setTimer] = useState(1)

 useEffect(() => {
     const interval = setInterval(() => {
         setTimer(timer => timer + 1)
     }, 1000)

     return () => {
         clearInterval(interval)
     }
 },[timer])


  return (
    <div className="App">
        <div className='timer'>{timer < 60 ? timer : Math.floor(timer/60)}</div>
        <Content lastSeen={timer} />
    </div>
  );
}

export default App;
