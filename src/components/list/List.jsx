import React from "react"
import "./style.css";

const List = ({todos, setTodos}) => {

  const handleDelete = (e) => {
    console.log(e.target.id +"타겟아이디") 
    const newArr = [...todos].filter( (todo) => todo.id !== parseInt(e.target.id));
    setTodos(newArr);
  }
  
  const handleComplete = (e) => {

    const newComplete = todos.map( (todo) => {
      if(todo.id === parseInt(e.target.id)) {
        console.log(todo.id+ "    " + e.target.id) 
        return {...todo, isDone:false}
      } else{
          return todo
      }
    });
    setTodos(newComplete)


  }
  return (
    <div className="list-wrapper">
      {todos.map(function(todo){
        // console.log(todos.title + "    Done콘솔")
        if(todo.isDone === true) {
          return (

            <div className="todo-container" key={todo.id}>
              <span>{todo.title}</span>
              <span>{todo.content}</span>
              <button id={todo.id} onClick={handleDelete}>삭제하기</button>
              <button id={todo.id}  onClick={handleComplete}>취소하기</button>
            </div>

          );
        }

      })}
    </div>
  );
};

export default List;


