"use client"
import React, { useState } from 'react';

const Sidebar = () => {
    
const [ sidebarOpen, setSidebarOpen ] = useState(true);

const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
}

    return (
        <div className={`w-64 bg-slate-400 h-screen fixed ${sidebarOpen ? '' : 'hidden'} `}>
                <div className="absolute top-2 right-2 cursor-pointer" onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {sidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          )}
        </svg>
      </div>
        </div>
    )
}

export default Sidebar;