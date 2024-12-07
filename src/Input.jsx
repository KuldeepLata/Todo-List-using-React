import React from 'react';

function Input(props) {

    function getItem(event) {
        if (event.target.value != "") {
            if (event.key == "Enter") {
                props.setItemHandler(event.target.value);
                event.target.value = ""
            }
        }
    }

    return (
        <div className="mb-4">
            <input onKeyUp={getItem}
                className="form-control input-field"
                type="text"
                placeholder="Write something here..."
            />
        </div>
    );
}


export default Input;
