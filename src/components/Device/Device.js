import React from 'react';
import Config from '../Config/Config';

const Device = (props) => {
    const { name, price, steps } = props;
    return (
        <div className="local-stage">
            <a href="/"><h2 className="h2">Hello from Device</h2></a>
            <h3 className="h3">Phone: {name}</h3>
            <h3 className="h3"><span className="cyan">Steps (Local)</span>: {steps} <span className="yellow">Device - Child of App.js</span></h3>
            <Config price={price} steps={steps} />
        </div>
    );
};

export default Device;