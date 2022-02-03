import React from 'react';



const CheckboxComponent = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div>
            <Checkbox
                value={checked}
                onChange={handleChange}
            />

            {/*<p>Is "My Value" checked? {checked.toString()}</p>*/}
        </div>
    );
};

const Checkbox = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    );
};

export default CheckboxComponent;