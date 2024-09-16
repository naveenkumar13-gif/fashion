import React, { useState } from 'react';

const TodoList = () => {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    if(!input)return
    e.preventDefault();
    setItems([...items, {task:input,done:false}]);
      setInput('');
    
  };

const upDateToDo=(index)=>{
  const upDate=items.map((item,i)=>i===index ? {...items,done:!item.done}:item)
  setItems(upDate)
}

  const removeItem = (id) => {
    const newItems = items.filter((_, i) => i !== id);
    setItems(newItems);
  };

  return (
    <div className='flex justify-center items-center mt-4'>
      <div className='bg-slate-500 w-1/2 p-8'>
        <h1 className='text-center font-semibold text-white text-4xl'>Todo List</h1>
        <form className='flex gap-3 m-6 justify-center items-center' onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your task..."
            className="bg-[#fff] p-[1rem] w-[20rem] outline-none "
          />
          {/* <button className='bg-black p-4 text-white' type='submit'>Add Item</button> */}
        {  <Button>Add Item</Button> }
        </form>
        <div >
        <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className={`flex items-center justify-between mt-4 border-b-2 w-1/2 m-auto ${item.done ? 'line-through text-gray-800' : ''}`}
              >
                <span  className="cursor-pointer" onClick={() => upDateToDo(index)} >
                
                  {item.task}
                </span>
                <button
                  className='ml-2 bg-red-500 text-white p-1 rounded mb-4'
                  onClick={() => removeItem(index)}
                >
                  Delete
                </button>
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
 
function Button({children,onClick}){
    return(
        <button className='bg-black p-3 text-white ' type='submit' onClick={onClick}>{children}</button>
    )
}