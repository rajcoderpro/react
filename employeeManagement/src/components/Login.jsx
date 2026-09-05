import { useState } from "react"

const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const onSubmitFunction =(e) => {
    e.preventDefault() ;
    props.handleLogin(email , password)
    setEmail("")
    setPassword("")
    
  }
  return (
    <div className="flex justify-center items-center h-screen bg-[#F4FDAF] text-black">
        <form onSubmit={  (e) => {onSubmitFunction(e)}} className="box  border-[#AAA964] h-[65%] bg-[#EFDD8D] flex flex-col justify-between w-[30%] border rounded-2xl p-5">
          <div className="inputs mt-10 flex flex-col gap-5 h-[50%]">
            <input required value={email} onChange = {(e) => {setEmail(e.target.value)}} className=" mx-3  rounded px-2 py-3 focus:outline-none border border-[#AAA964] bg-[#F2ED9E] "  type="email" placeholder='Example@gmail.com' />
            <input required value={password} onChange = {(e) => {setPassword(e.target.value)}}   className=" mx-3   focus:outline-none rounded px-2 py-3 border border-[#AAA964] bg-[#F2ED9E] "  type="password" placeholder='Enter Password ' />
          </div>
            <button className=' px-2 py-3 rounded-2xl border border-[#BCB66F] active:scale-95 cursor-pointer bg-[#CDC379]'>Log In</button> 
        </form>
    </div>
  )
}

export default Login