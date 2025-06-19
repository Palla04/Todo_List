import Todos from './components/Todos';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route, Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { AddTodo } from './components/AddTodo';
import { About } from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap



function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
     initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete =(todo)=>{
    console.log("I am on Delete",todo);
    setMessage("I am on Delete");
    setTimeout(() => setMessage(""), 2000);
    setTodos(todos.filter((e)=>{
       return e!==todo;
    }))
    localStorage.getItem("todos");
  }


  const addTodo = (title, desc)=>{
       console.log("I am adding this todo",title, desc);

       let sno;
       if(todos.length==0){
          sno = 0;
       }
       else{
          sno = todos[todos.length - 1].sno + 1;
       }
       
       const myTodo = {
        sno: sno,
        title: title,
        desc: desc,
       }
       setTodos([...todos,myTodo]);
       console.log(myTodo); 
       
  }

  const [message, setMessage] = useState("");

  const [todos, setTodos] = useState(initTodo
  // [
    // {
    //   sno: 1,
    //   title: "Go to the market",
    //   desc: "You need to go to the market to get this job done0",
    // },
    // {
    //   sno: 2,
    //   title: "Go to the mall",
    //   desc: "You need to go to the market to get this job done1",
    // },
    // {
    //   sno: 3,
    //   title: "Go to the college",
    //   desc: "You need to go to the market to get this job done2",
    // },
    // {
    //   sno: 4,
    //   title: "Go to the school",
    //   desc: "You need to go to the market to get this job done3",
    // }
  // ]
);
useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
},[todos])
       
  return (
   <>
   
      <Header title="My TodoList" searchBar={false}/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} message={message} />
            </>
          }
        />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
   </>
  )
}

export default App