import React,{useState} from 'react';
import {bindActionCreators} from "redux"
import * as todoAction from "../../store/actions/Todos"
import {connect} from "react-redux"



function TodoList(props) {
  console.log(props)
  var [newTodoText,setNewTodoText] = useState("")

  function addNewTodo(){
    if(newTodoText=="")return
    props.addTodo(newTodoText)

    setNewTodoText("")
  }

  function removeTodoItem(id){
    console.log(id)
    props.removeTodo(id)
  }

  return (
   <div>
     

    <input type="text"
      value={newTodoText}
      onChange={(e)=>setNewTodoText(e.target.value)}
    />
    <button onClick={addNewTodo}>Novo Todo</button>

    <ul>
      { props.todos.map(todo=>
      (  <li key={todo.id}  onClick={()=>removeTodoItem(todo.id)}>
          {todo.text}</li>)
      )}
    </ul>
   </div>

  );
}

const mapStateToProps = state =>({
  todos:state.todos
})

const mapDispatchToProps = dispatch=> bindActionCreators(todoAction,dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);