import react from "react";
import './Todolist.css';

const TodoList=(props)=>{

 
return(
    <>
    <div className="sss">
    <i className='fa fa-times-rectangle' onClick={()=>{
    props.onSelect(props.id)}}></i>
    {props.text}</div>
    </>
    )
}

export default TodoList