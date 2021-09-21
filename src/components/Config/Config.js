import React from 'react';

const Config = (props) => {
    const { price, steps } = props;
    return (
        <div className="mini-local-stage justify">
            <a href="/"><h3 className="h3 center">Hello from Config</h3></a>
            <li>Price: {price}</li>
            <li className="li"><span className="cyan">Steps (Local)</span>: {steps} <span className="yellow">Config - Child of Device</span></li>
        </div>
    );
};

export default Config;