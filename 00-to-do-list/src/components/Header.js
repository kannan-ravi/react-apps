import React from 'react';
import { HiCheckCircle, HiSun, HiMoon } from 'react-icons/hi';

const Header = ({ darkMode, setDarkMode }) => {

  return (
    <header className='flex gap-x-1.5 font-bold text-3xl bg-lime-400 p-2 rounded-t-lg	'>
      <div className='flex flex-grow'>
        <HiCheckCircle className='self-center' />
        <h1>
          TO DO LIST
        </h1>
      </div>

      <div className='justify-self-end'>
        <button
          onClick={() => setDarkMode(!darkMode)}>
          <HiSun
            className={darkMode === true ? "hidden" : "block"}
          />
          <HiMoon
            className={darkMode === false ? 'hidden' : "block"}
          />
        </button>
      </div>
    </header>
  )
}

export default Header
