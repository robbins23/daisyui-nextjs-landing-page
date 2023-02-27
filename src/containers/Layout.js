import Footer from "./Footer";
import Navbar from "./Navbar";
import Link from 'next/link'
import Bars3Icon  from '@heroicons/react/24/outline/Bars3Icon'
import Navlinks from "./Navlinks";


export default function Layout({ children }) {

  const logoutUser = () => {

  }


  return (
    <>
      <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
          <div className="drawer-content flex flex-col">
              <div className="overflow-y-auto  flex flex-col ">

                  <Navbar />
                
                  <div className="overflow-y-auto">
                      <main>{children}</main>
                      <Footer />
                  </div>
                  
               </div> 
          </div> 

          <div className="drawer-side">
              <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
              <ul className="menu p-4 w-80 bg-base-100">
                  <Navlinks />
              </ul>
          </div>
      </div>
    </>
  )
}