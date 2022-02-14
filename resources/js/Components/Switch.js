import React from 'react';
import '../../css/Switch.css';

// Code from https://upmostly.com/tutorials/build-a-react-switch-toggle-component

const Switch = ({ checked, onChange }) => (
	<div>
		<input
    	    type="checkbox"
    	    className="react-switch-checkbox"
    	    id={`react-switch-new`}
    	    checked={checked}
    	    onChange={e => onChange(e.target.checked)}
    	/>
		<label
			className="react-switch-label"
            htmlFor={`react-switch-new`}>
            <span className={`react-switch-button`} />
        </label>
	</div>
);

export default Switch;
