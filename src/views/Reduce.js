import React, { useReducer, useEffect, useState} from "react";

// react-bootstrap components
import { ProgressBar } from "react-bootstrap";
import {ModalTask} from '../components/Elements/ModalTask'
import { todoReducer } from "../components/Reducer/todoReducer"
import {useForm} from "../Hooks/useForm"
import {PageContainer} from '../components/Elements/PageContainer'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}
function Reduce() {

  const [ todos, dispatch] = useReducer(todoReducer, [], init)
  const [porcentaje, setPorcentaje] = useState(0)
  
  const [{description}, handleInputChange, reset] = useForm({
    description: ''
  })

  useEffect(() => {
    let completed = todos.filter(todo => todo.done === true)
    let porcen = ((completed.length * 100) / todos.length)
    setPorcentaje(porcen)
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleDelete = (todoId) => {

    console.log(todoId)

    const action = {
      type: "delete",
      payload: todoId
    }

    dispatch(action)
  }

  const handleToggle = (todoId) => {
    
    dispatch({
      type: "toggle",
      payload: todoId
    })
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    
    if(description.trim().length <= 1){
      return
    }

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    }

    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action)
    reset()
  }
  return (
    <>
      {/* todos, componen:ModalTask, handleDelete, handleToggle */}
      <PageContainer
        todos={todos}
        deleteItem={handleDelete}
        toggleItem={handleToggle}
        modal={
          <ModalTask
          manejador={handleSubmit} 
          handleInput={handleInputChange} 
          valueInput={description}
          />}
      />
      <ProgressBar animated now={porcentaje} />
    </>
  );
}

export default Reduce;
