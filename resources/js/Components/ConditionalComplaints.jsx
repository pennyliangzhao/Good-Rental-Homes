import React, {useState} from 'react';

function ComplaintsController() {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <div className="Greeting">

            <input type="checkbox" onClick={() => setIsToggled(!isToggled)}/>
            { isToggled &&
                <textarea>
                    Please specify.
                </textarea>}

        </div>
    );
}

export default ComplaintsController;

