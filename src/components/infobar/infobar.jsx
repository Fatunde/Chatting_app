import React from 'react';

import './infobar.css'

const Infobar = ({room}) => (
<div className="row bg-primary">
    <div className="LeftInnerContainer">
        <div className="onlineIcon">
    <h3>{room}</h3>
    </div></div>
    <div className="RightInnerContainer">
        <a href="/" className="text-white h2">X</a>
    </div>
</div>
)

export default Infobar