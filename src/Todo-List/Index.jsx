import React, { useState } from 'react'
import '../Todo-List/Style.css'


// const InitItem=[{
// id:1,
// describe:'we are  playing ',
// finished:false,
// },{
//   id:2,
//   describe:'we are  writing ',
// finished:false,
// },
// {
//   id:3,
//   describe:'we are reading ',
// finished:false,
// },{
//   id:4,
//   describe:'we are talking ',
// finished:true,
// }]


 
function Index() { 
  const[items,setItem]=useState([])

  function handleAdd(item){
    setItem([...items,item ])
    }

    function handleDelete(id){
    setItem(items=>items.filter((item)=>item.id!==id))
    }

    function handleToggle(id){
setItem((items)=>items.map((item)=>item.id===id?{...item,finished:!item.finished}:item  ))
    }
    
  return (
   <>
    <div className='w-[40%]  my-10 mx-auto p-8 bg-slate-100' >
    <Form onAdd={handleAdd} /> 
    <List items={items} onDelete={handleDelete} onToggle={handleToggle}/>  
   </div>
   </>
  )
}

function Form({onAdd}){
  const[describe,setDescribe]=useState('')
  function handleSubmit(e){
    e.preventDefault();  
    if(!describe) return
    const newItem={describe,finished:false,id:Date.now()}
    onAdd(newItem);
    console.log(newItem);
    setDescribe('')
    }
  return(
    <form className='flex gap-4 justify-center items-center' onSubmit={handleSubmit}>
    <input type='text '  placeholder='Enter the Task' className='border-2 border-blue-800 p-4 flex-1' value={describe} onChange={(e)=>setDescribe(e.target.value)}/>
     <button className='border-2  bg-blue-600 text-white p-4'>Add Task</button>
</form>
  )
}


function List({items,onDelete,onToggle}){
  return(
    <div className='  py-4'>
       <ul >
       {items.map((item)=><Item item={item} key={item.id} onDelete={onDelete} onToggle={onToggle}/>)}
       {/* {Array.from({length:10},(el,i)=>i+1).map((num)=><option>{num}</option>)} */}
       </ul>
      </div>
  )
}


function Item({item,onDelete,onToggle}){
  return(
<li className='border-2  bg-blue-600  text-white p-4 flex justify-between items-center my-2' >
<div className='flex gap-2'>
<input type='checkbox' value={item.finished} onChange={()=>onToggle(item.id)}/>
  <span style={item.finished ? {textDecoration:'line-through'}:{}}>
    {item.describe}
  </span>
</div>
  <button className='bg-blue-950 p-2 rounded-md' onClick={()=>onDelete(item.id)}>delete</button>
</li>
  )
}
export default Index
