"use client";
import React, { useState } from "react";

const Sidebar = ({open, onClose}) => {

  return (
    <div
      className={`w-64 bg-slate-400 h-screen ${open ? 'block' : 'hidden'}`}>
          <div
        className="top-2 right-2 cursor-pointer"
        onClick={onClose}
      ></div>
      <div
        className="top-2 right-2 cursor-pointer">
      </div>
    </div>
  );
};

export default Sidebar;
