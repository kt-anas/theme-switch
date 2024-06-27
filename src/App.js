
 
import { useState } from 'react';
import './App.css';
const  App =() => {
    const [color,setColor] =useState(true);

    const change=()=>{
        setColor(!color);
    }
return(
   <div className="App" style={{backgroundColor:color ? "white":"black"}}>
     <button onClick={change}>Theme</button>
   </div>
)
}
export default App;
