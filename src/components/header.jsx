import TodoIcon from '../assets/Frame1.jpg'
import BellLogoLight from '../assets/bell-logo.svg'
import BellLogoDark from '../assets/bell-logo-dark.svg'
import App from '../App'
import React, { useEffect } from 'react'
import { ThemeContext } from '../ThemeContext'

export default function Header() {

    const {darkState, setDarkState} = React.useContext(ThemeContext)

    useEffect(() => {
        const htmlElement = document.documentElement
        if (darkState) {
            htmlElement.classList.add('dark')
        }
        else {
            htmlElement.classList.remove('dark')
        }
    }, [darkState])

    return (

        <div className="navbar py-4 flex justify-center items-center gap-2.5 my-5">
            
            {<img src={darkState ? BellLogoDark : BellLogoLight} alt="To-do Logo" className='nav-image h-[56px] w-[56px]
            max-[375px]:h-[32px] max-[375px]:w-[32px]' />}

            <h1 className="nav-heading text-6xl font-semibold text-[#850a0a] dark:text-white
            font-(family-name:--heading-font) max-[375px]:text-5xl">TooDoo</h1>

            <div className="theme-switcher absolute top-6 left-5 text-3xl flex gap-4
            max-sm:top-1 max-sm:left-1">
                {darkState ? <span className='w-10 h-10 p-4 rounded-full bg-white flex items-center justify-center
                max-sm:text-xl max-sm:w-6 max-sm:h-6'>
                    <i className="fa-solid fa-moon hover:cursor-pointer text-[#495057] transition duration-300"
                    onClick={() => setDarkState(!darkState)}
                    aria-label="Switch to light theme"></i>
                </span> : 
                <span className='w-10 h-10 p-4 rounded-full bg-white flex items-center justify-center
                max-sm:text-xl max-sm:w-6 max-sm:h-6'>    
                    <i className="fa-solid fa-sun hover:cursor-pointer text-[#ffc300] transition duration-300"
                    onClick={() => setDarkState(!darkState)}
                    aria-label="Switch to dark theme"></i>
                </span>}
            </div>

        </div>
        
    )
}