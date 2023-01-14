import React from "react";

const Counter = (props) =>{
    return(

        <div id="value" style={{color: props.color}} className="display-1 text-center">
        {props.value} 
        </div>
    );

}

export default Counter;