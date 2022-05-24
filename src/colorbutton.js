import React from 'react';

const ColorButton = ({color , addCircle}) => {

    return(
          <button onClick={()=> addCircle(color)}
          style={{backgroundColor : color }}>
            {color}
          </button>

    )
}

export default ColorButton; 