import { useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import background from '../Images/backgroundImage.jpg'
//redux implimentation
import { useSelector, useDispatch } from "react-redux";
import { setUser, setIsLoading } from "../redux/Slice/User.Slice";
function Login() {

    //redux
    const useredux = useSelector((state) => state.userReducer)
    console.log("reducers", useredux.user)
    const isloading = useSelector((state) => state.userReducer)
    const isLoading = ("isloading", isloading.isLoding
    )

    console.log("login" , isloading)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const [register, setRegister] = useState(true)
    //all data 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setName] = useState("")
    const [address, setAddress] = useState("")
    //collecting From Data function
    async function getFromData(e) {
        dispatch(setIsLoading(true))
        e.preventDefault()


        //Impliminting backend

        const API_END_POINT = "http://localhost:3000/api/v1/user"


        if (register) {
            const user = { fullName, address, email, password }
            try {
                const res = await axios.post(`${API_END_POINT}/register`, user
                    , {
                        headers: {
                            "Content-Type": 'application/json'
                        },
                        withCredentials: true
                    }
                )
                console.log("user register response", res)
                if (res.data.succcess) {
                    toast.success(res.data.messege)
                }
                else {
                    toast.success("Something went wrong !")
                }
                //make refister false and open the login from
                setRegister(false)
            }
            catch (err) {
                console.log("Register Error", err)

                toast.success("Unauthorized !")

            }
            finally {
                dispatch(setIsLoading(false))
            }

        }
        //login
        else {
            const user = { email, password }
            try {
                const res = await axios.post(`${API_END_POINT}/login`, user
                    , {
                        headers: {
                            "Content-Type": 'application/json'
                        },
                        withCredentials: true
                    }
                )
                console.log("user login response", res)
                if (res.data.succcess) {
                    toast.success(res.data.messege)
                }
                else {
                    toast.error(res.response.
                        data.messege)
                }
                //navigate to the main browser page and add the user info into user redux
                dispatch(setUser(res.data.user))
                navigate("/browser")
            }
            catch (err) {
                console.log("login Error", err)
                toast.error("error")
            }
            finally {
                dispatch(setIsLoading(false))
            }
        }
        console.log("From Data", email, password, fullName, address)
        setEmail("")
        setAddress("")
        setName("")
        setPassword("")

    }
    return (
        <>
            <div className=' w-full h-screen  flex justify-center items-center '>
                <img src={background} alt='NetflixBcakgroundImage' className='absolute h-screen w-full opacity-[1]' />
            </div>
            <div className="bg-black  w-[450px] pb-4 absolute pt-12">


                <div >
                    {
                        register ? <h1 className="text-center mb-4 text-3xl text-white bg-red-800 p-4">Sing Up</h1> : <h1 className="text-center mb-4 text-3xl text-white bg-red-800 p-4" >Login</h1>
                    }

                </div>

                <form className="flex flex-col items-center justify-center gap-3" onSubmit={getFromData}>
                    {
                        register && <>
                            <input type="text" placeholder="User Name" value={fullName} required className="px-8 py-2 w-[300px] rounded text-center" onChange={(e) => {
                                setName(e.target.value)
                            }} />
                            <input type="text" placeholder="Address" value={address} required className="px-8 py-2 w-[300px] rounded text-center" onChange={(e) => {
                                setAddress(e.target.value)
                            }} />
                        </>
                    }
                    <input type="text" placeholder="priyankashaw680@gamil.com" value={email} required className="px-8 py-2 w-[300px] rounded text-center" onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                    <input type="password" placeholder="password" value={password} required className="px-8 py-2 w-[300px] rounded text-center" onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                    <button className="text-white font-bold px-4 py-2 bg-green-400 rounded">{`${isLoading ? "loading ...." : "Submit 😊"}`}</button>
                    {
                        register ? <><p className="text-white">Already have an Account ? </p><span className="text-blue-600 underline-offset-1 cursor-pointer" onClick={() => {
                            setRegister((prev) => !prev)
                        }}>Log in</span></> : <><p className="text-white">New to NetFlix ?  </p><span className="text-blue-600 underline-offset-1 cursor-pointer" onClick={() => {
                            setRegister((prev) => !prev)
                        }}>Sing Up 😊</span></>
                    }
                </form>


            </div>
        </>
    )
}
export default Login;