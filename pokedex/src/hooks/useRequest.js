import axios from "axios"
import { useState } from "react"
import { baseUrl } from "../constants/urls"

function message(msg){
  if(typeof msg==='string' && msg.length>0)alert(msg)
}

//-------------------------------------GET
export const useGetApi=()=>{
  const [value, setValue] = useState()

  const getApi = async(endpoint, config, callbackOk, callbackError)=>{
    try{
      const res = await axios.get(`${baseUrl}${endpoint}`, config)
      setValue(res)
      if(typeof callbackOk==='function')callbackOk(res, setValue)
    }
    catch(err){
      if(typeof callbackError==='function')callbackError(err)
    }
  }

  return [value, getApi]
}