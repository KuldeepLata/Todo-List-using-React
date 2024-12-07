import React, { useState } from 'react';

function Display(props) {
    return (
        <ul className="list-group">
            {
                props.data.map((d, i) => {
                    return (
                        <ListItem 
                            d={d} 
                            index={i} 
                            key={i} 
                            deleteItem={props.deleteItem} 
                        />
                    );
                })
            }
        </ul>
    );
}

function ListItem({ d, index, deleteItem }) { 
    const [toggle, setToggle] = useState(false);

    const ChangeColor = () => {
        setToggle(!toggle);
    };

    return (
        <li 
            onClick={ChangeColor} 
            className={`${toggle ? 'bg-secondary' : 'bg-primary'} list-group-item d-flex justify-content-between align-items-center`}
        >
            {d}
            <button 
                role="button" 
                onClick={(e) => {
                    deleteItem(index); 
                }} 
                className="btn btn-sm btn-danger"
            >
                Delete
            </button>
        </li>
    );
}

export default Display;
