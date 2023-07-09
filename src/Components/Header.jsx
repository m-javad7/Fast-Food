import {NavLink } from "react-router-dom"

export const Header = () =>{
    return(
        <div className="container flex bg-neutral-700 text-neutral-300 py-4  shadow-lg  ">
            <div className=" flex items-center justify-evenly w-[100%]">
            <NavLink to="/" className="link">Home</NavLink>
            <NavLink to="/menu" className="link">Menu</NavLink>
            <NavLink to="/about" className="link">About</NavLink>
            <NavLink to="/contact" className="link">Contact</NavLink>
            </div>
            <div className="mr-8  inline-block rounded border-2  bg-orange-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight  shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg  text-white  border-transparent">
            <NavLink to="/login" className="link">Login</NavLink>
        </div>
        </div>
       
    )
}