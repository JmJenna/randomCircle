import React from 'react';
import ColorButton from './colorbutton';

const ColorBtn = ({options , addCircle}) => {
    const handClick = ()=>{

    }
    return(
      <div>
          {options.map( color => 
           <ColorButton color={color} addCircle={addCircle}/>
        )}
      </div>

    )
}

export default ColorBtn;