import { async } from "@firebase/util";
import React from "react";
import {Navigate} from 'react-router-dom'
import {login, loginFirebase} from "../api"
import "./login.css"
export default ()=>{
    return (
        <div className="contaiNerLogin" >
            <div className="cardLoginContainer">
                <form className="divForm" onSubmit={async(e)=>{
                        let name =e.target[0].value
                       let email = e.target[1].value
                       login({name,email}).then(r=>console.log(r))}}>
                    <input type='text' placeholder="name" id="inputForm"/>
                    <input type='text' placeholder="email" id="inputForm"/>
                    <div className="ButtonContainer">
                    <button>
                        <i className="fab fa-google" 
                        onClick={async()=>{
                        await loginFirebase()
                        .then(()=> 
                                window.location.pathname="/")}}/> Google </button>
                    <button type="submit" 
                        style={{marginLeft:"10px"}}>
                        Login 
                    </button>

            </div>
                </form>
            
            </div>
        </div>

    )
}