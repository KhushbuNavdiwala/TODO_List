import React, { useState, useEffect, useRef } from 'react';
function TodoForm(props) {
    //props.edit ? props.edit.value : '' 
    //<= we use this so when you go for update the current todo list will be there 
    //ex: khushi and you want to update then in update input text khushi is already written 
    //and you can change to flo or walk with flo whatever you like ypu can add 
    const [input, setInput] = useState(props.edit ? props.edit.value : '');// state 

    const inputRef = useRef(null);

    useEffect(() => {

        inputRef.current.focus();// allowing you to focus on whatever you put as ref 
    })
    // function 
    const handleChange = e => {

        setInput(e.target.value);// keep track of user input in text field and save into setInput 
    };
    //handleSubmit is function which capture value of state when we submit the form  ex: you type lundry in text area and take that value and pass 
    //that value in todo state 
    const handleSubmit = e => {

        e.preventDefault();// to prevent of page reload 

        props.onSubmit({ //when we want to tranfer value from todoform to todolist we us props

            id: Math.floor(Math.random() * 10000),
            text: input

        });

        setInput('');// clear the text area after submiting page
    };
    return (
        // onSubmit is eventhandler 
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ?
                (<>  <input
                    type="text"
                    placeholder="Update your Item"
                    value={input}
                    name='text'
                    className='todo-input edit'
                    onChange={handleChange}
                    ref={inputRef}

                />
                    <button className='todo-button edit'>Update</button>
                </>
                ) : (
                    <> <input
                        type="text"
                        placeholder="Add Todo"
                        value={input}
                        name='text'
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                        <button className='todo-button'>Add todo</button>
                    </>

                )}
        </form>
    )
}

export default TodoForm;