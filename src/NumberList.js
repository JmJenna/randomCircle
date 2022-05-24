import React , {useState} from 'react';
import NumberItem from './NumberItem';

const NumberList = () =>{
  const [ numbers , setNumbers] = useState([2,5,7,12,18, 20,2]);
  
  const remove = (num) => {
      setNumbers(numbers.filter(n => n !== num));
  }

  return (
      <ul>
        {numbers.map((n ,index) => (
         <NumberItem numbers={n} remove={remove} key={index}/>
        ))}
      </ul>
  )
}

export default NumberList;