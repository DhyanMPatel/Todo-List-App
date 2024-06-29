import React, { useState } from "react";

function TodoInput(props) {
    let [inputText, setInputText] = useState('');
    return (
        <div className="input-container">
            
            <input
                type="text"
                placeholder="Enter your task"
                className="input-box-todo"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)} />
            <button
                className="add-btn"
                onClick={()=> {
                    props.addList(inputText)
                    setInputText("")
                }
                }>
                Add
            </button>
        </div>
    )
}
export default TodoInput;