import React, { useState } from 'react'
import './Todo.css';
import TodoList from './TodoList';

const Todo = () => {

    const [inputItems, setInputItems] = useState('');
    const [items, setItems] = useState([]);

    const inputEvent = (event) => {
        setInputItems(event.target.value)
    }

    const listOfItems = () => {
        setItems((oldValue) => {
            return [...oldValue, inputItems]
        });
        setInputItems('')
    }

    const deleteItems = (id) => {
        setItems((oldValue) => {
            return oldValue.filter((arrayElem, index) => {
                return index !== id
            })
        })
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> Todo List </h1>
                    <br />
                    <input type="text" placeholder='Add a Items' onChange={inputEvent} value={inputItems} />
                    <button onClick={listOfItems}> + </button>
                    <ol>
                        {/* <li>{inputItems}</li> */}
                        {
                            items.map((itemValue, index) => {
                                return <TodoList
                                    text={itemValue}
                                    key={index}
                                    id={index}
                                    onSelect={deleteItems}
                                />
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Todo