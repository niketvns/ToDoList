import React, { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from "@mui/material";


const ToDoList = (props) => {
    const [tStyle, setTStyle] = useState("none");
    const [bgcolor, setbgColor] = useState("white");
    const [color, setColor] = useState("cornflowerblue");
    const clsItem = () => {
        if (tStyle === "none") {
            setTStyle("line-through");
            setbgColor("green");
            setColor("white");
        } else {
            setTStyle("none");
            setbgColor("white");
            setColor("cornflowerblue");
        }
    }

    return (
        <>
            <div className="todolist">
                <Tooltip title="Done">
                    <CheckIcon className="cls_btn" onClick={clsItem}
                        style={{ backgroundColor: bgcolor, color: color }}
                    />
                </Tooltip>
                <li style={{ textDecoration: tStyle }}>{props.text}</li>
                <Tooltip title="Delete">
                    <DeleteIcon className="del_btn"
                        onClick={() => {
                            props.onSelect(props.id);
                        }}
                    />
                </Tooltip>
            </div>
        </>
    );
};

export default ToDoList;