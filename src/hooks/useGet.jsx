import axios from "axios"
import { useEffect, useState } from "react"

const useGet = (url) => {
    const [data , setdata ] = useState([])
    const [loading , setloading]  = useState(true);


    const getAllData = async() => {
        try{
            let res = await axios.get(`https://69242f5d3ad095fb84730f49.mockapi.io/${url}`)
            setdata(res.data)
            setloading(false)
        }catch(err){
            console.log(err); 
        }
        
    }
                    
    useEffect(() => {
        getAllData()
    }, [url])
    return {data,  loading , getAllData}
}
export default useGet