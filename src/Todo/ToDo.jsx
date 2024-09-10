import React, { useState } from 'react';

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    if(!inputValue)return
    e.preventDefault();
    setItems([...items, inputValue]);
      setInputValue('');
    
  };

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
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your task..."
            className="bg-[#fff] p-[1rem] w-[20rem] outline-none "
          />
          {/* <button className='bg-black p-4 text-white' type='submit'>Add Item</button> */}
        { (inputValue && items) ? <Button>Add Item</Button> :null}
        </form>
        <div >
          <ul>
            {items.map((item, index) => 
              <li key={index} className='flex items-center justify-between mt-4 border-b-2 w-1/2 m-auto'>
                {item}
                <button
                  className='ml-2 bg-red-500 text-white p-1 rounded mb-4'
                  onClick={() => removeItem(index)}
                >
                  Delete
                </button>
                {/* <Button  onClick={() => removeItem(index)}>Delete</Button> */}
              </li>
            )}
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