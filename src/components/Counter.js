import React, {useState} from "react";

const Counter = (props) =>{
    return(

        <div id="value" className="display-1 text-center">
        {props.value} 
        </div>
    );

}

export default Counter;