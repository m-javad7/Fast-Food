import {Link, useNavigate} from "react-router-dom"
export const Login =() =>{
    const navigate = useNavigate();

    const HandleSubmit = (e) =>{
        e.preventDefault();
        navigate("/")
    }
    return(
        <>
        <div className="flex flex-col justify-center items-center my-14">
        <div className="w-full p-16 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md  dark:bg-gray-800 dark:border-gray-700">
        <h3 className="pb-8">Sign in to your account</h3>
        <form onSubmit={HandleSubmit} className="space-y-4 md:space-y-6">
            <input placeholder="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            <input placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <button type="submit" className="bg-blue-600 px-4 py-1 rounded-md hover:bg-blue-700">Login</button>
        </form>
        <div className="py-4"><a href="#">Forgot password?</a></div>
        <p>Don’t have an account yet?<Link to="/login"> Sign up</Link> </p>
        </div>
        </div>
        </>
    )
}