import React, { useState } from 'react';
import './App.css';
import TodoInput from './Components/TodoInput';
import DisplaytodoList from './Components/DisplaytodoList';

function App() {
    let [listTodo, setListTodo] = useState([])
    function addList(inputText) {
        setListTodo([...listTodo, inputText])
    }
    console.log(listTodo)

    function deleteItem (index) {
        let newListTodo = [...listTodo];
        newListTodo.splice(index, 1);
        setListTodo([...newListTodo]);
    }
    return (
        <div className='main-container'>
            <div className='center-container'>
                <TodoInput addList={addList} />
                <h1 className='app-heading'>Todo</h1>
                <hr />
                {
                    listTodo.map((listItem,i) => {
                        return(
                            <DisplaytodoList item = {listItem} key={i} index={i} deleteItem ={deleteItem}/> 
                        )
                    })
                }
            </div>
        </div>
    )
}

export default App