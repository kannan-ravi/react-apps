import Item from './Item'

const ListItems = ({ datas, setDatas}) => {

  return (
    <main>
      <ul className="p-2">
        <Item
          datas={datas}
          setDatas={setDatas}
        />
      </ul>
    </main>
  )
}

export default ListItems