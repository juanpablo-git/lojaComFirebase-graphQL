import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {firebaseConfig} from "./config/firebase"
import {GraphQLClient,gql} from "graphql-request"
var produtos = []
var selecionados = []


export async function loginFirebase (){

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const provider = new firebase.auth.GoogleAuthProvider()
  let result = await firebase.auth().signInWithPopup(provider)

 const token =result.credential.idToken || false

 localStorage.setItem("token",token)
 getAutencicado()
 
 return token

  }

export function getAutencicado(){
const local = localStorage.getItem('token')
    if(local){
       
        console.log("ESTA AUTENTICADO",local)
        
        return true
    }else{


        console.log("NAO ESTA AUTENTICADO")

        return false
    }
}


export function addProduct(product){
    selecionados.push(product)
    
}
export async function  listProduct () {
   const dados = await fetch("http://localhost:4000/",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
    'Accept': 'application/json',
            "Autorization":`${localStorage.getItem('token')}`
        },
        body:JSON.stringify({query: "{ products{id name img} }"})
    }).then(response=>response.json()).then(data=>data.data.products)
    return dados
}
export function listSelecionados(){
    return selecionados
}

export async function login(variables={}){
    let query=`
    query login($name:String $email:String){
        login(name:$name,email:$email){
        name
        token
        }
      }
    `
    const dados = await fetch("http://localhost:4000/",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({query,variables})
    }).then(response=>response.json()).then(r=>localStorage.setItem('token',r.data.login[0].token))
    }

