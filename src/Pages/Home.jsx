import { Link } from "react-router-dom"

export const Home = () =>{
    return(
      <div class="flex justify-end  items-center back">
        <div className="relative bg-gray-700 mr-56 px-6  pt-8 shadow-2xl sm:rounded-3xl sm:px-12 md:pt-12 ">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Fast Food</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">View the restaurant menu to choose your food.</p>
        <div className="mt-6 flex items-center justify-center mb-8 lg:justify-start">
          <div className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          <Link to="/menu">Menu</Link>
          </div>
        </div>
        </div>
      </div>
    )
}