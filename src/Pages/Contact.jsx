import React from "react"
import { Link } from "react-router-dom"
export const Contact = () =>{
    return(
        <div className="container  flex ">
        <div className="flex justify-center items-center">
            <img src="../Images/pizza-back.png" />
        </div>
        <div className="flex justify-center items-center ">
        <div className="p-14 w-[50%]">
            <h3 className="font-bold">Contact Us</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, modi accusantium ipsum corporis quia asperiores dolorem nisi corrupti eveniet dolores ad maiores repellendus enim autem omnis fugiat perspiciatis? Ad, veritatis.
            </p>
            <form className="mt-10">
                <div>
            <input type="text" placeholder="Full Name" className="w-[100%] px-4 py-2 mb-1 border border-orange-200 outline-orange-300 bg-orange-200  rounded-lg placeholder:p-4 placeholder:text-neutral-500"/>
            </div>
            <div>
        <input type="email" placeholder="Email Address"  className="w-[100%] px-4 py-2 mb-1 border border-orange-200 outline-orange-300 bg-orange-200  rounded-lg placeholder:p-4 placeholder:text-neutral-500"/>
        </div>
        <textarea placeholder="Enter Your Message" cols="40" rows="5"  className="w-[100%] px-4 py-2 border border-orange-200 outline-orange-300 bg-orange-200  rounded-lg placeholder:p-4 placeholder:text-neutral-500"></textarea>
        <div className="mt-4">
        <Link className="bg-orange-300 rounded-md p-3 text-neutral-600 hover:bg-orange-400 hover:transi" to="/">Send Message</Link>
        </div>
            </form>
        </div>
        </div>
    </div>

    )
}