import React, { useState } from "react";
import Buttons from "./components/Buttons";
import Counter from "./components/Counter";
import './App.css';

function App() {

    const [counter, setCounter] = useState(0);
    const [color, changeTextColor] = useState('black');

    const counterSetter = (val) => {

        if (val === 0) {
            setCounter(0);
            changeTextColor('black');
            return;
        }       
        else if(val === -1)
            changeTextColor('red');
        else    
            changeTextColor('green');

        setCounter(counter + val);
}


return (

    <>
        <div id="container">
            <h1 className="text-center font-weight-bold mt-5" style={{ color: '#156064' }}>Counter</h1>

            <Counter value={counter} color={color} />

            <div className="button text-center mx-2 my-2">
                <Buttons getValue={counterSetter} text="Decrease"></Buttons>
                <Buttons getValue={counterSetter} text="Reset"></Buttons>
                <Buttons getValue={counterSetter} text="Increase"></Buttons>
            </div>

        </div>
    </>
);
}

export default App; 