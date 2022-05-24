import React from 'react';

const NumberItem = ({numbers , remove})=>{
    const handleRemove = () => {
        remove(numbers);
    }
    return (
          <li>
           <button onClick={handleRemove}>{numbers}</button>
          </li>   
    )
}

export default NumberItem;