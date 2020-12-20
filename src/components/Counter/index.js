import React from 'react';
import {connect} from "react-redux"
// import { Container } from './styles';

function Counter(props) {
  return <h2 >
    Você tem cerca de {props.todos.length} todos.</h2>;
} 

const mapStateToProps= state=>({
  todos:state.todos
})

export default connect(mapStateToProps)(Counter);