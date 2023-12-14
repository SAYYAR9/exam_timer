import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [timer , setTimer] = useState(60)
  useEffect(()=> {
    if(timer!==0){
      const interval= setInterval(()=>{
          setTimer(timer-1)
      },1000)
  
      return ()=>clearInterval(interval)
    }

  },[timer])

  return (
    <div className="App">
      <div className='timer'>{timer}</div>
    </div>
  );
}

export default App;
