import React from 'react'

export default function VHH_EventForm2() {
    const eventHandleClick1 = (content)=>{
        console.log('================================');
        console.log(content);
        console.log('================================');
    }
  return (
    <div className='alert alert-success'><h2>Event Demo -Funciton Component</h2>
    <button onClick={eventHandleClick1("Vu Hong Hung")}>goi khi render</button>
    <button onClick={()=>eventHandleClick1("k22cntt3-Reactjs")}>goi khi click</button></div>
  )
}