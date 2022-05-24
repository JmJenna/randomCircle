import React , {useState} from 'react';
import Circle from './Circle';
import ColorBtn from './ColorBtn';

function getRandom(min=0 , max=100) {
    return Math.random() * (max - min) + min;
}

const ColorCircle = () => {
    const [circles , setCircles] = useState([]);
    const addCircle = (color)=>{
        setCircles(colors => {
            return [...colors , {color, x:getRandom() , y:getRandom()}]
        })
    }
    // const changePostion = (idx)=>{
    //     setCircles(circles => {
    //         const copy = [...circles];
    //         copy[idx].x = getRandom();
    //         copy[idx].y = getRandom();
    //         return copy;
    //     })
    // }
    const changePostion = idx => {
        setCircles(circles =>(
            circles.map((circle , i) => (
                i === idx ?
                {...circle , x:getRandom() , y:getRandom()}
                :circle
            ))
        ))
    }
 return (
     <div> 
        <ColorBtn addCircle={addCircle} options={['peachpuff' ,'olive', 'teal']}/>
       {circles.map(({color , x , y} , idx) => (
           <Circle changePostion={changePostion} color={color} idx={idx} key={idx} x={x} y={y}/>
       ))}
     </div>
 )
}

export default ColorCircle; 