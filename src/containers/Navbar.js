import Link from 'next/link'
import Bars3Icon  from '@heroicons/react/24/outline/Bars3Icon'
import Navlinks from './Navlinks'
import { themeChange } from 'theme-change'
import { useEffect, useState } from 'react'
import MoonIcon from '@heroicons/react/24/outline/MoonIcon'
import SunIcon from '@heroicons/react/24/outline/SunIcon'
import NavProfileLinks from './NavProfileLinks'

function Navbar(){

    // const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme"))
    const [currentTheme, setCurrentTheme] = useState(null)


    const logoutUser = () => {

    }

    useEffect(() => {
        // themeChange(false)
        // console.log(currentTheme)
        // if(currentTheme === null){
        //     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
        //         setCurrentTheme("dark")
        //     }else{
        //         setCurrentTheme("light")
        //     }
        // }
        // 👆 false parameter is required for react project
      }, [])


    return(
        <div className="w-full flex justify-center  shadow-lg  ">
        <div className="navbar py-2 bg-base-100 max-w-6xl">
        <div className="navbar-start ">
        <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <Bars3Icon className="h-5 inline-block w-5"/>
            </label>
        </div> 
  
  
        <div className="md:flex-1 flex-none px-2 mx-2">
            <Link href="/">
            <span className='font-bold text-xl'>
                <img className="mask inline-block mr-2 mask-circle w-12" src="/android-chrome-192x192.png" /> Web Design AI
            </span>
            </Link>
        </div>
</div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal custom-menu">
                <Navlinks />
          </ul>

        
          {/* <label className="swap ">
                <input type="checkbox"/>
                <SunIcon data-set-theme="light" data-act-class="ACTIVECLASS" className={"fill-current w-5 h-5 "+(currentTheme === "dark" ? "swap-on" : "swap-off")}/>
                <MoonIcon data-set-theme="dark" data-act-class="ACTIVECLASS" className={"fill-current w-5 h-5 "+(currentTheme === "light" ? "swap-on" : "swap-off")} />
            </label> */}
         
          {/* <div className="dropdown ml-6 dropdown-end">

                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-6 rounded-full">
                    <img src="https://placeimg.com/80/80/people" alt="profile" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow   rounded-box w-52">
                    <li className="justify-between">
                    <Link href={'/app/settings-profile'}>
                        Settings
                        </Link>
                    </li>
                    <div className="divider mt-0 mb-0"></div>
                    <li><a onClick={logoutUser}>Logout</a></li>
                </ul>
            </div> */}
        </div>
        <div className="navbar-end hidden lg:flex">
            <NavProfileLinks />
      </div>
      </div>
      </div>
    )
}

export default Navbar