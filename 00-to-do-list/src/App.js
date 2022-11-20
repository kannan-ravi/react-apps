import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ListItems from './components/ListItems';

export default function App() {
  const [datas, setDatas] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [darkMode, setDarkMode] = useState(false);  

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(datas));
  }, [datas])

  return (
    <div className='max-w-xl border border-gray-400 rounded-lg relative'>
      <Header 
        darkMode={darkMode}
        setDarkMode={setDarkMode}/>
      <NavBar
        datas={datas}
        setDatas={setDatas}
      />
      <ListItems
        datas={datas}
        setDatas={setDatas}
      />
    </div>
  )
}
