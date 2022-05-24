import React , {useState} from 'react';
import "./Circle.css"

const Circle = ({color , idx , x , y , changePostion}) => {
   return (
       <div 
       onClick={()=> changePostion(idx)}
       className='Circle' 
       style={{
           backgroundColor : color ,
           position : 'absolute',
           top : `${y}vh`, 
           left :`${x}vw` }}>
           {idx + 1}
       </div>
   )
}

export default Circle ;