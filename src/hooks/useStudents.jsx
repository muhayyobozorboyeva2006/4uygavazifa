import axios from "axios"
import { use, useEffect, useState } from "react"

const useStudents = (url) => {
   const [students ,  setstudents ] = useState([]) 
   const [loading , setloading] = useState(true)
   const AllStudents = async() => {
try{
    let res = await axios.get(`https://69242f5d3ad095fb84730f49.mockapi.io/${url}`)
    setstudents(res.data)
    setloading(false)
}catch(err){
    console.log(err);
}
   }

useEffect(() => {
AllStudents()
} , [url])
return {students , loading}
}

export default useStudents