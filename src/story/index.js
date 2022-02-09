import React,{createContext,useState,useEffect} from "react"
import {getAutencicado} from "../api"


 const  Context = createContext(0)

function Provider({children}){

    const [name,setName]=useState([])
    const [selecionados,setSelecionados]=useState([])
    const [total,setTotal] =useState([])
    return(
        
        <Context.Provider value={{name,setName,selecionados,setSelecionados,total,setTotal}}>
            {children}
        </Context.Provider>
    )
}
 export {Context,Provider}



