import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { useState } from 'react';
import Models from './Models';

const Item = ({ datas, setDatas }) => {

  const [openModel, setOpenModel] = useState(false);
  const [editItem, setEditItem] = useState(" ");
  const [id,setId] = useState(' ');

  // Handle check which handles the operation to check if the item is checked or not
  const handleCheck = (id) => {
    const checkData = datas.map((data) => data.id === id ? { ...data, checked: !data.checked } : data);
    setDatas(checkData);
  }

  // Handle Delete which handle  the delete action
  const handleDelete = (id) => {
    const deleteData = datas.filter(data => data.id !== id);
    console.log(id)
    setDatas(deleteData);
  }

  // Ready the data to be sent in the edit model componenet
  const editData = (data) => {
    setOpenModel(true);
    setEditItem(data.item);
    setId(data.id)
  }

  return (
    <>
      {(datas.map((data) =>
        <li key={data.id}
          className="m-2 p-2 flex justify-between bg-gray-300 ">
          <div>
            <input type="checkbox"
              className="mr-2"
              id='task-list'
              onChange={() => handleCheck(data.id)}
              checked={data.checked}
            />

            <label className={data.checked ? 'text-gray-500' : 'text-black-500'}
              >
              {data.item}
            </label>
          </div>

          <div className="flex gap-2 items-center">
            <AiFillEdit className='text-green-800'
              role='button'
              onClick={() => editData(data)}
              aria-label={`Edit ${data.item}`}
            />
            {openModel &&
              <Models
                setOpenModel={setOpenModel}
                editItem={editItem}
                id={id}
                setEditItem={setEditItem}
                datas={datas}
                setDatas={setDatas}

              />}

            <AiFillDelete className='text-red-800'
              role='button'
              onClick={() => handleDelete(data.id)}
              aria-label={`Delete ${data.item}`}
            />
          </div>

        </li>

      )).reverse()}

    </>
  )
}

export default Item
