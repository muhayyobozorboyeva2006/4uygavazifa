import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPages({setIsLogin , }){
    const [phone , setPhone] = useState("")
    const [passwort , setPasswort] = useState("")
    const navigate = useNavigate()
    
    function login(e){
  e.preventDefault();
  if(phone === "+998937550412" && passwort === "asilbek1020"){
    setIsLogin(localStorage.setItem("auth" , true))
      navigate("/dashoard")
      toast.success("Tizimaga muaffaqiyatli kirdingiz")
  } else {
      toast.error("Login yoki parol xato")

    }
    }

    return(
        <>
        <div className="bg-gray-200 flex items-center justify-center  flex-col h-screen">
                <form  onSubmit={login}
                action="" className="flex flex-col gap-[30px] p-5 max-w-[450px] w-full rounded-[20px] bg-white">
                    <input onChange={(e) => setPhone(e.target.value)}
                     className="border-[3px] border-amber-400 p-[10px] text-[18px] rounded-[10px]" type="text" placeholder="Telefon raqam" />
                    <input onChange={(e) => setPasswort(e.target.value)}
                     className="border-[3px] border-amber-400 p-[10px] text-[18px] rounded-[10px]" type="password" placeholder="Parolni kiriting" />
                    <button type="submit"
                     className="border-[3px] border-amber-400 p-[10px] bg-amber-500 text-[18px] text-[white] cursor-pointer rounded-[10px]">Login</button>
                </form>
        </div>
       
        </>
    )
}
export default LoginPages