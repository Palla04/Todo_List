
const TodoItem = ({todo, onDelete, message}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      
      <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      {/* arrow function helps to pass a function not directly call a function */}
    </div>
  )
}

export default TodoItem
