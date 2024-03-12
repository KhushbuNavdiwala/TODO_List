import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
function TodoList() {

    const [todos, setTodos] = useState([]);// state 



    //functions 
    const addTodo = todo => { //todo is parameter

        if (!todo.text || /^\s*$/.test(todo.text)) { //there is 2 condition and 1st one is for if you dont 
            //type anything then it will not add any todolist 

            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);

    };


    // function for edit todo
    const updateTodo = (todoId, newValue) => {

        //there is 2 condition and 1st one is for if you dont
        //type anything then it will not add any todolist 

        if (!newValue.text || /^\s*$/.test(newValue.text)) {

            return;
        }
        // if item id is equal to todoid (similar) then update the todoList for ex walk with dog and you want to update that so walk with cat has to have same id and then condition is true 
        //walk with dog.id === walk with cat.id is true then put walk with cat as updated list 
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );

    };

    // function for removing any todolist from list (removeTodo)

    const removeTodo = id => {

        //removeArr is array
        // we use filter Method to get new todo list after removing desire todo and store in to removeArr 

        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };


    // function (child)
    const completeTodo = id => {

        let updatedTodos = todos.map(todo => {

            if (todo.id === id) {

                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }


    return (
        <div>

            <h1>What is plan for today</h1>

            <TodoForm onSubmit={addTodo} // here we are calling method in parent component Tododlist is parent and todoform is child compo.// 
            />
            <Todo

                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}

            />

        </div>)
}

export default TodoList;