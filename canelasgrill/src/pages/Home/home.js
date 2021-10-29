import React from "react";
import {AreaHome} from "./styled";
import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <AreaHome>
           <div className="imagemdestaque">
                <div className="container">
                    <h2 className="titulo">A hamburgueria feita pra você!</h2>
                    <p className="descricao"> Nosso principal objetivo é atender as demandas e paladar de diversos tipos de clientes.
                    Oferecemos um padrão elevado de hamburgueres e acompanhamentos, para que todos os clintes saiam satisfeitos.
                    Além de um ambiente agradavel, oferecemos por meio desse site a possibilidade de reserva.
                    Acesse nosso cardápio e peça pelo ifood, caso preferia comer no conforto da sua casa!
                    </p>
                    <div class="botoes">
                        <button className="menubt"><Link to ="/menu">Menu</Link></button>
                        <button className="reservabt"><Link to ="/reserva">Reserva</Link></button>
                     </div>
                </div>
               
            </div>

        </AreaHome>
    );

}

export default Home;