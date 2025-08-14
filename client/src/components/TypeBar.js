import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <ul className="list-group">
            {device.types.map(item =>
                <li
                    style={{cursor: "pointer"}}
                    className={
                        `list-group-item` + (device.selectedType.id === item.id ? ' active' : '')
                    }
                    key={item.id}
                    onClick={() => device.setSelectedType(item)}
                >
                    {item.name}
                </li>)}
        </ul>
    );
});

export default TypeBar;