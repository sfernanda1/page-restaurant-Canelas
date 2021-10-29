import React from "react";
import { AreaContato } from "./styled";


const Contato = () => {
    return(
       <AreaContato>
       <section className='fundo'>
            <div className="ListaContatos">
                <div className="container">
                    <h2 className="titulo">Entre em contato conosco!</h2>
                </div>
                <h2 className="wpp">81 9 9999-9999 <img src="../../img/wpp.png" alt="WhatsApp" width="100" /></h2>
                <div class="flex-container">
            
                    <button className="email">Email</button>
                   
                    <button className="facebook">Facebook</button>
               
                    <button className="instagram">Instagram</button>
                    
                </div>
             </div>
      </section>
       </AreaContato>

    );

}

export default Contato;