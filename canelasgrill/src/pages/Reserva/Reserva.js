import React from "react";
import { AreaReserva } from "./styled";
import Formulario from "./formulario";


const Reserva = () => {
    return(
        
    <AreaReserva>
    <div className= "titulo">
        <h1>Reserve aqui seu horário.</h1>
    </div>
    
    <Formulario/>
  
    </AreaReserva>
    

    );
}

export default Reserva;