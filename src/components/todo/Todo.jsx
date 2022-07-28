import React from "react"
import "./style.css";

const Todo = ({todos, setTodos}) => {

  const handleDelete = (e) => {
    console.log(e.target.id +"타겟아이디") 
    const newArr = [...todos].filter( (todo) => todo.id !== parseInt(e.target.id));
    setTodos(newArr);
  }
  
  const handleComplete = (e) => {

    const newComplete = todos.map( (todo) => {
      if(todo.id === parseInt(e.target.id)) {
        console.log(todo.id+ "    " + e.target.id) 
        return {...todo, isDone:true}
      } else{
          return todo
      }
    });
    setTodos(newComplete)

  }

  return (
    <div className="list-wrapper">
      {todos.map(function(todo){
        if(todo.isDone === false){
          return (
              <div className="todo-container" key={todo.id}>
                <span>{todo.title}</span>
                <span>{todo.content}</span>
                <button id={todo.id} onClick={handleDelete}>삭제하기</button>
                <button id={todo.id}  onClick={handleComplete}>완료하기</button>
              </div>
          );
        }

      })}
    </div>
  );
};

export default Todo;