import React, { useState } from "react";
import './Buttons.css';
function Buttons(props) {

    const [bg, setBg] = useState('white');
    const [text, setText] = useState('');

    function setCounter(color){
        if(color === 'Increase')
        props.getValue(1);
        if(color === 'Decrease')
        props.getValue(-1);
        if(color === 'Reset')
        props.getValue(0);

        
    }
  
    const getBG = (color) => {

        if (color === 'Decrease'){ setText('white');      setBg('red');  }

        if (color === 'Increase'){ setText('white');      setBg('green');}

        if(color === 'Reset'){ setText('white');      setBg('black');
        }
    }

    function removeBG(){
        setText(getBG(props.text))
        setBg('white');
    }

    return (
        <span>
            <button onClick={() => setCounter(props.text) } 
                    style={{ backgroundColor: bg, color: text }} className='btn mt-4 m-2' 
            onMouseEnter={() => getBG(props.text)}
            onMouseLeave={ ()=> removeBG(props.text) }>
            {props.text}
            </button>
        </span>
    );
}

export default Buttons;