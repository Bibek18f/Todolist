import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import {Add} from '@material-ui/icons';
import {RemoveIcon} from '@material-ui/icons';
import {Button} from '@material-ui/core'

function App() {
  const[fff,set]=useState()
  const [item,bet]=useState([])
  const InputE=(event)=>{
const value=event.target.value
console.log(value)
set(value)
  }
  const Add1=()=>{
    bet((ddd)=>{
      return(
        [...ddd,fff]
      )
    })
    set("")
  }
  const deletei=(id)=>{
    console.log('deleted')

    bet((ddd=>{
      return ddd.filter((arr,index)=>{
        return index!==id
      })
    }))
  }

  return (
    <div className="App">
      <div className="list">
        <div className='bar'>
          <h2>To Do List</h2>
        </div>
        <div className='content'>
          <input type="text" placeholder='Add items' onChange={InputE} value={fff}></input>
          <Button variant="contained" color='default'onClick={Add1} ><Add/></Button>
        </div>
        <div>
         {item.map((ddd,index)=>{
           return(
           <TodoList key={index} id={index} text={ddd} onSelect={deletei}/>)
         })}
        </div>
      </div>
    </div>
  );
}

export default App;
