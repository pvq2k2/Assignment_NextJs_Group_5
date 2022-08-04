
import { toast } from "react-toastify"
import useSWR from "swr"

export const useProduct =()=>{
    const {data,error,mutate} = useSWR('/product')


   
    return {data,error}
}