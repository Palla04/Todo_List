import TodoItem from './TodoItem'

const Todos = (props) => {

  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  }
  return (
    <div className='container my-3' style={myStyle}>
        <h3 className='text-warning my-3'>Todos List</h3>
        {/* {props.todos} */}
        {props.message && (
          <div className="alert alert-info text-center">
            {props.message}
          </div>
        )}
        {props.todos.length===0? "No Todos to Display":
        props.todos.map((todo)=>{
          return (
            <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
            </>
          )
        })}
        
    </div>
  )
}

export default Todos;