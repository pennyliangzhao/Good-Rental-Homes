import React, {useState} from 'react';

function CheckboxController() {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <div className="Greeting">

            <input type="checkbox" onClick={() => setIsToggled(!isToggled)}/>
            { isToggled &&
                <textarea>
                    Please enter the name of the agency
                </textarea>}

        </div>
    );
}

export default CheckboxController;

