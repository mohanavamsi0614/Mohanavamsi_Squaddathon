import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usestate from './state'
import axios from 'axios'

function App() {
  const [tasks, setteaks] = useState(["do todo","hi"])
  const [task,settask]=useState("")
  useEffect(()=>{
    axios.get("http://localhost:3000").then(
      (res)=>{
        console.log(res.data)
        setteaks(res.data)
      }
    )
  },[])
  function add(){
    axios.post("http://localhost:3000/add",{todo:task}).then(
      (res)=>{
        console.log(res.data)
        setteaks(res.data)
      }
    )
  }
  function update(id){
    let update=prompt("enter")
    axios.put("http://localhost:3000/update/"+id,{todo:update}).then(
      (res)=>{
        let all=tasks
        all=all.map((i)=>{
          if(i._id==id){
            console.log("hi")
            i.todo=update 
          }
            return i
        })
        setteaks(all)
      }
    )
  }
  function dele(id){
    console.log("dw")
    axios.delete("http://localhost:3000/dele/"+id,{todo:update}).then(
      (res)=>{
        let all=[...tasks]
        console.log(all,id)
        all=all.filter((i)=>{return i._id!=id})
    setteaks(all)
  })}

  return (
    <>
    <input onChange={(e)=>{
      console.log(e.target.value)
      settask(e.target.value)}}/>
    <button onClick={add}>ToDo</button>
    {tasks.map((i,j)=>(
      <div key={j} className='flex'>
        <h1>{i.todo}</h1>
        <button onClick={()=>{update(i._id)}}>Update</button>
        <button onClick={()=>{dele(i._id)}}>Delete</button>
      </div>
    ))}
    </>
  )
}

export default App
