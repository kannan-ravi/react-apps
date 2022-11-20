import { MdCancel } from 'react-icons/md';

const Models = ({ setOpenModel, editItem, id, setEditItem, datas, setDatas }) => {

  const handleEdit = event => {
    event.preventDefault();
    const editedPost = datas.map((data) => data.id === id ? { ...data, item: editItem } : data);
    setDatas(editedPost);
    setOpenModel(false);
  }

  return (
    <main className='bg-slate-400 w-full h-full absolute left-0
      top-0 flex justify-center items-center animation'>
      <div className='relative p-4 w-5/6 border'>
        <MdCancel className='absolute right-0 top-0'
          role='button'
          onClick={() => setOpenModel(false)} />
        <form onSubmit={handleEdit}>
          <label
            className='text-2xl font-bold ml-2'
            htmlFor='Edit-task'
          >UPDATE YOUR TASK</label>
          <input type='text'
            className='p-2 mt-8 mb-4 border-2 border-gray-400 w-full rounded'
            autoFocus
            required
            id='Edit-Task'
            name='Edit-task'
            value={editItem}
            onChange={(e) => setEditItem(e.target.value)}
          />
          <div className='flex justify-between'>

            <button
              className='bg-red-600 py-1 px-2 rounded text-white'
              onClick={(e) => setOpenModel(false)
              }>Cancel</button>
            <button className='bg-blue-600 py-1 px-2 rounded text-white text-center'
              
              type="submit">Update</button>
          </div>
        </form>
      </div>
    </main>
  )
}
export default Models