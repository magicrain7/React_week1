import { useState } from "react";
import './App.css';
import Todo from "./components/todo/Todo";
import Header from "./components/header/Header";
import List from "./components/list/List";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([
      {id: 0, title: "제목 들어갑니다", content: "  내용들어감다" , isDone: false},
      {id: 1, title: "타이틀 두번 들어갑니다", content: "  내용들어감다" , isDone: false},
      ]);

  const handleAdd = () => {
    if (!title && !content) return;
    // console.log(title,content);
    //  console.log(todos.length)
    const newTodo = {
      
      id: todos.length,
      title,
      content,
      isDone: false
    }
    const newArr = [...todos]
      newArr.push(newTodo);
      console.log(newArr);
      setTodos(newArr);
      setTitle("");
      setContent("");
  };

  return (
    <div className="layout"> 
      {/* {console.log(todos + "app.jsx")} */}
    <Header/>
      <div className="main-container">
        <div className="titleBox">
          <input type="text" placeholder="제목" value={title} onChange={ (e) => setTitle(e.target.value)}/>
          <input type="text" placeholder="내용" value={content} onChange={ (e) => setContent(e.target.value)} />
          <button className="add-button" onClick={handleAdd}>추가하기</button>
        </div>
      </div>
        <h2><span>Working</span></h2>
        <Todo todos={todos} setTodos={setTodos}/>
        <h2><span>Done</span></h2>
        <List todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
