import { AiFillPlusCircle } from 'react-icons/ai'
import { useState } from 'react';

const NavBar = ({ datas, setDatas }) => {
  const [addItem, setAddItem] = useState('');
  
  // Handle Submit which handle the submit actions
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = datas.length ? datas[datas.length - 1].id + 1 : 1;
    const addedItem = { id, item: addItem, checked: false };
    const myAddItem = [...datas, addedItem];
    setDatas(myAddItem);
    setAddItem('');
  }

  return (
    <main>
      <form className="text-center flex justify-between" onSubmit={handleSubmit}>

        <input type="text"
          className="p-2 my-4 ml-2 border-2 border-gray-400 w-5/6 rounded"
          required
          autoFocus
          placeholder="Enter Your Item"
          value={addItem}
          onChange={(e) => setAddItem(e.target.value)}
        />

        <button type="submit"
          className="bg-lime-400 rounded p-2 mr-2 text-3xl text-white hover:bg-lime-500 self-center"><AiFillPlusCircle /></button>

      </form>
    </main>

  )
}

export default NavBar