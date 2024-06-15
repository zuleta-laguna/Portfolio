import React, { useState } from 'react'
import NavigationItems from './NavigationItems'
import ListNav from '../Svg/ListNav'

function Navigation() {
  const [Opennav, setOpennav] = useState(false);

  const HandleMenuChange = () =>{
    const changeValue = Opennav == false ? true:false;
    setOpennav(changeValue)
  }
  return (
    <section id='Main' className='w-full'>
      <nav className='navDestock w-full h-14 flex justify-center items-center gap-10 fixed top-0 backdrop-blur-2xl mt-3'>
    <NavigationItems 
    href="#Main"
    >
      Home
    </NavigationItems>
    <NavigationItems
     href="#About"
     >
      About Me
     </NavigationItems>
    <NavigationItems
    href="#Project"
    >
    Projects
    </NavigationItems>
    <NavigationItems
     href="#Contact"
    >
      Contact
    </NavigationItems>
    </nav>
    <nav className='Navmobile flex justify-end fixed right-0 z-10'>
      <button onClick={HandleMenuChange} className='text-white '><ListNav/></button>
      <div className={`${Opennav == false ? 'menu':'menu-open bg-yellow-500'}`}>
      <NavigationItems 
    href="#Main"
    >
      Home
    </NavigationItems>
    <NavigationItems
     href="#About"
     >
      About Me
     </NavigationItems>
    <NavigationItems
    href="#Project"
    >
    Projects
    </NavigationItems>
    <NavigationItems
     href="#Contact"
    >
      Contact
    </NavigationItems>
      </div>
    </nav>
    </section>
  
  )
}

export default Navigation
