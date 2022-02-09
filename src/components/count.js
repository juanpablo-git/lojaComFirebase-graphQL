import React,{useContext, useEffect, useState} from 'react';
import "./count.css"
import { Link } from 'react-router-dom';
import {listProduct} from "../api" 
import {Context} from "../story/index"

function Count() {
    const {name,setName,selecionados,setSelecionados,total,setTotal} = useContext(Context)

    const [product,setProduct] = useState([])
        useEffect(async ()=>{
            let product = await listProduct()
            setProduct(product)
           
        },[])

return(

    <div className='container'>

       {
           product.map(iten=>(
               <div className='cartContainer'>
               	 <img src={iten.img} width={300} height={300} />
                <li>{iten.name}</li>
               <button onClick={()=>{
                   setName(iten) 
                   setTotal([...total,iten])}} >Adicionar</button>
               </div>
           ))
       }

       
    </div>
)
}

export default Count;