"use client"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useState } from 'react';
import Sidebar from './Sidebar';
const Header = () => {
    const [sideBarOpen, setSideBarOpen] = useState(true)

    const handleToggleBar = () => {
        setSideBarOpen(!sideBarOpen)
    }

    return (<>
        <div className="h-14 z-50 shadow-sm justify-start items-center
        fixed top-0 w-full bg-white flex flex-wrap gap-10 p-4 "
        >
            <MenuOpenIcon onClick={handleToggleBar}/>
            <h2 className="font-bold text-xl">Picassa</h2>
            </div>

            <Sidebar open={sideBarOpen} onClose={() => setSideBarOpen(false)}/>
        
            </>)
    
}

export default Header;