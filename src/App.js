import React,{useState,useEffect, useMemo} from 'react';
import {Provider} from './story';
import Count from "./components/count"
import Login from './components/login';
import Carrinho from './components/carrinho';
import Header from "./components/header"
import {getAutencicado } from "./api"

import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';

function App() {
 

  return (
    <>


     <BrowserRouter>
     <Provider>
     <Header />
        <Routes>
        <Route path="/login" element={getAutencicado()?<Navigate to="/"/>:<Login />} />
          <Route path="/" element={getAutencicado()?<Count />:<Navigate to="/login"/>} /> 
          <Route path="carrinho" element={getAutencicado()?<Carrinho  />:<Navigate to='/login' />}/>
        
        </Routes>
        </Provider> 
     </BrowserRouter>
     </>      

  );
}


export default App;
