import { useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import background from '../Images/backgroundImage.jpg'
//redux implementation
import { useSelector, useDispatch } from "react-redux";
import { setUser, setIsLoading } from "../redux/Slice/User.Slice";

function Login() {
    //redux
    const useredux = useSelector((state) => state.userReducer)
    console.log("reducers", useredux.user)
    const isloading = useSelector((state) => state.userReducer)
    const isLoading = ("isloading", isloading.isLoding)

    console.log("login", isloading)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const [register, setRegister] = useState(true)
    //all data 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setName] = useState("")
    const [address, setAddress] = useState("")
    //collecting Form Data function
    async function getFormData(e) {
        dispatch(setIsLoading(true))
        e.preventDefault()

        //Implementing backend
        const API_END_POINT = "https://netflixclonenode.onrender.com/api/v1/user"

        if (register) {
            const user = { fullName, address, email, password }
            try {
                const res = await axios.post(`${API_END_POINT}/register`, user, {
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    withCredentials: true
                })
                console.log("user register response", res)
                if (res.data.succcess) {
                    toast.success(res.data.messege)
                } else {
                    toast.success("Something went wrong !")
                }
                //make register false and open the login form
                setRegister(false)
            } catch (err) {
                console.log("Register Error", err)
                toast.success("Unauthorized !")
            } finally {
                dispatch(setIsLoading(false))
            }
        } else {
            //login
            const user = { email, password }
            try {
                const res = await axios.post(`${API_END_POINT}/login`, user, {
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    withCredentials: true
                })
                console.log("user login response", res)
                if (res.data.succcess) {
                    toast.success(res.data.messege)
                } else {
                    toast.error(res.response.data.messege)
                }
                //navigate to the main browser page and add the user info into user redux
                dispatch(setUser(res.data.user))
                navigate("/browser")
            } catch (err) {
                console.log("login Error", err)
                toast.error("error")
            } finally {
                dispatch(setIsLoading(false))
            }
        }
        console.log("Form Data", email, password, fullName, address)
        setEmail("")
        setAddress("")
        setName("")
        setPassword("")
    }

    return (
        <>
            <div className='w-full h-screen flex justify-center items-center relative'>
                <img src={background} alt='NetflixBackgroundImage' className='absolute h-screen w-full object-cover opacity-1' />
                <div className="bg-black w-full md:w-[450px] pb-4 pt-12 px-4 md:px-8 relative z-10 rounded-md">
                    <div>
                        {
                            register ? <h1 className="text-center mb-4 text-3xl text-white bg-red-800 p-4 rounded-md">Sign Up</h1> : <h1 className="text-center mb-4 text-3xl text-white bg-red-800 p-4 rounded-md">Login</h1>
                        }
                    </div>
                    <form className="flex flex-col items-center justify-center gap-3" onSubmit={getFormData}>
                        {
                            register && <>
                                <input type="text" placeholder="User Name" value={fullName} required className="px-8 py-2 w-full md:w-[300px] rounded text-center" onChange={(e) => setName(e.target.value)} />
                                <input type="text" placeholder="Address" value={address} required className="px-8 py-2 w-full md:w-[300px] rounded text-center" onChange={(e) => setAddress(e.target.value)} />
                            </>
                        }
                        <input type="email" placeholder="priyankashaw680@gmail.com" value={email} required className="px-8 py-2 w-full md:w-[300px] rounded text-center" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} required className="px-8 py-2 w-full md:w-[300px] rounded text-center" onChange={(e) => setPassword(e.target.value)} />
                        <button className="text-white font-bold px-4 py-2 bg-green-400 rounded w-full md:w-[300px]">{`${isLoading ? "Loading ...." : "Submit 😊"}`}</button>
                        {
                            register ? <><p className="text-white">Already have an Account? </p><span className="text-blue-600 underline cursor-pointer" onClick={() => setRegister((prev) => !prev)}>Log in</span></> : <><p className="text-white">New to Netflix? </p><span className="text-blue-600 underline cursor-pointer" onClick={() => setRegister((prev) => !prev)}>Sign Up 😊</span></>
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;
