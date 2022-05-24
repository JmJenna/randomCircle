import React , {useState} from 'react';

function SimpleCounter (){
    const [ num , setNum ] = useState(0);
    console.log("THIS COUNT IS GOING TO" , num)

    const clickUp = () =>{
    setNum(n => n + 1);
    setNum(n => n + 1);
    }
  
    return (
        <div>
        <h3>Count : {num}</h3>
        <button onClick={clickUp}>Up</button>
        </div>
    )
}

export default SimpleCounter;