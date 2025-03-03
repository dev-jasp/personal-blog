"use client"; 

import React, { useState, useRef, useEffect} from "react"; 
import Link from "next/link"; 


interface MenuLink {
    path: string, 
    label: string
}

const menuLinks: MenuLink[] = [{path: "/", label: "Home"}]


const Menu = () => {
    const container = useRef<HTMLDivElement | null>(null); 
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev ); 
    }; 

  return (
    <div ref = {container} className="relative"> 
    <button onClick={toggleMenu} className="p-2 bg-gray-300 "> Menu</button>

    {isMenuOpen && (
        <div className=""></div>
    )}; 
    
    </div>
  )
};

export default Menu