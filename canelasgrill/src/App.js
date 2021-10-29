import React from "react";
import {BrowserRouter} from 'react-router-dom';

import Header from "./componentes/Header/header";
import Footer from "./componentes/Footer/Footer";

import Routes from './Routes'

import "./App.css";

function App() {
  return (
    <BrowserRouter>
       <Header/>

        <Routes/>

        <Footer/>
    </BrowserRouter>
  );
}

export default App;
