import React from 'react'
import BellLogo from '../assets/bell-logo.svg'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <main className="home-page flex flex-col items-center pt-35 h-screen w-screen">
        
        <div className="title-div flex items-center justify-center">
            {<img src={BellLogo} alt="To-do Logo" className='nav-image h-[96px] w-[96]' />}
        
            <h1 className="nav-heading text-[136px] font-semibold text-[#850a0a]
            font-(family-name:--heading-font)">TooDoo</h1>
        </div>
        
        <h2 className="subtitle text-2xl mt-4 text-gray-700">Your Personal Task Manager</h2>

        <Link to="/tasks">
            <button className="view-task-button mt-8 px-6 py-3 bg-[#850a0a] text-white rounded-lg 
            hover:bg-[#a32b2b] hover:cursor-pointer transition duration-300">
                View my tasks
            </button>
        </Link>
    </main>
  )
}
