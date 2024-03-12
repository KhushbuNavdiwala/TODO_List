import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from 'react-icons/ti';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {


    const [edit, setEdit] = useState({

        id: null,
        value: ''
    });// state 


    // this function is for edit todo list 
    const submitUpdate = value => {

        updateTodo(edit.id, value);
        setEdit({

            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }


    //map = going through array of todolist(parent)
    return todos.map((todo, index) => (

        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}>
            <div
                //when task is complete and you want to put line on that then use this code 
                key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className={"icons"}>

                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}// when you click on cross button it allows you to remove that list 
                    className='delete-icon' />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}// when you click on edit button it allows you to edit that list 
                    className='edit-icon' />


            </div>


        </div>


    ))
}

export default Todo;