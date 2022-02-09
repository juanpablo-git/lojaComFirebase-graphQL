import React,{useState,useContext,useMemo, useEffect} from 'react';
import {Context} from "../story/index"
import { Link } from 'react-router-dom';


const Carrinho = () => {
const {name,selecionados,setSelecionados,total,setTotal} = useContext(Context)


useEffect(()=>{
  if(selecionados.length == 0){
  setSelecionados([name])
  }
},[])
if(selecionados.length>=1){
  const filtro = selecionados.filter(iten=>iten.id == name.id)
  if(filtro.length == 0){
    setSelecionados([...selecionados,name])
  }

}

console.log("Total: ",total)
console.log("Selecionados: ",selecionados)
console.log("carrinho: ",name)

  return (
    <>
    <div>
      <h3>total: {total.length}</h3>
    </div>
    <div>
   {selecionados.map(iten=>(
     <>
     <img src={iten.img} />
     <li>{iten.name}</li>
     </>
   ))}
   <Link to="/">voltar</Link>
  </div>
  </>
  )
}

export default Carrinho;