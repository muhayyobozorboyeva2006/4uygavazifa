import axios from "axios";
import { toast } from "react-toastify";

const useModel = (url) => {
    
    const addData = async({url , payload ,method , id}) => {
  try{
    if(method === "post"){
        let res = await axios.post(`https://69242f5d3ad095fb84730f49.mockapi.io/${url}` , payload)
        toast.success("Malumot qo'shildi")
    return res.data
    }else if(method === "put"){
        let res = await axios.put(`https://69242f5d3ad095fb84730f49.mockapi.io/${url}/${id}`, payload)
        toast.success("Malumot qo'shildi")
    }
  }catch(err){
    console.log(err);
  }
 }
 return{addData}
}
export default useModel