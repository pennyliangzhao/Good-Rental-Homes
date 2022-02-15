import React, {useState} from 'react';

function CheckboxController() {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <div className="Greeting">

            <input type="checkbox" onClick={() => setIsToggled(!isToggled)}/>
            { isToggled &&
                <textarea>
                    e.g. unauthorized pets/ co-dwellers/ subletters
                </textarea>}

        </div>
    );
}

export default CheckboxController;

