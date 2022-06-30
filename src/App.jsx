import React, { useState } from "react";
import ToDoList from "./ToDoList";
import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from "@mui/material";
import ListAltIcon from '@mui/icons-material/ListAlt';
import DateTime from "./DateTime";


const App = () => {

    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    const inputEvent = (event) => {
        setInput(event.target.value);
    }

    const listOfItems = (event) => {
        event.preventDefault();
        if (input === "") {
            alert("Enter an Item");
        } else {
            setItems((oldValues) => {
                return [input, ...oldValues]
            })
        }
        setInput("");
    }

    const deleteItem = (id) => {
        let confirm = window.confirm("Did you finish this work");
        if (confirm) {
            setItems((oldItems) => {
                return oldItems.filter((arrItem, index) => {
                    return index != id;
                })
            })
        }
    }

    return (
        <>
            <div className="main_div">
                <div className="cent_div">
                    <DateTime />
                    {/* <br /> */}
                    <h1>To Do List</h1>
                    <br />
                    <div className="input_btn">
                        <form onSubmit={listOfItems}>
                            <Tooltip title="Enter Items">
                                <input type="text" placeholder="Add Items" onChange={inputEvent} value={input} />
                            </Tooltip>
                            <Tooltip title="Add">
                                <button className="add_item" type="submit"><AddIcon className="add_icon" /></button>
                            </Tooltip>
                        </form>
                    </div>
                    <div><ListAltIcon /></div>
                    {items.map((val, index) => {
                        return <ToDoList
                            text={val}
                            id={index}
                            key={index}
                            onSelect={deleteItem}
                        />
                    })}
                </div>
            </div>
        </>
    );
};

export default App;