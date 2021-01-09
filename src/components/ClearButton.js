import React from 'react';
import './ClearButton.css';

export const ClearButton = (props) =>{
    return(
    <div className="button-wrapper" onClick={props.handleClear}>
        {props.children}
    </div>
    );
} 