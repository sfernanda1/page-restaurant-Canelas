import React from "react";
import Maps from "./Map"
import { AreaSobre } from "./styled";



const Sobre = () => {
    return(
        <AreaSobre>
            <h1>Sobre nós </h1>
            <div className="flex-container">
                 <div className='titulo'>
                    <> Somos uma Hamburgueria criada em 2021. Nossa meta
                     é agradar o mais variado tipo de público, dessa maneira não vão existir
                    dúvidas na hora de escolher o cantinho para ir com seus amigos ou familiares.
                    Além de carne, possuímos saladas com menor valor calórico para aqueles que estão
                    no projeto verão. E para quem é vegetariano além de nossa saladas já citadas,
                    temos também opções de hamburgueres veganos. Isso mesmo! Não é uma opção só para
                    'quebrar o galho', são diversas opções sem nenhum uso de carne. Por fim, possuímos
                    algumas opções de sobremesa para os fãs de doces! Nosssa principal missão vai além 
                    de servir refeições saborosas, também é criar momentos especiais.
                    </>
                </div>

            <div ClassName="item2">
                <Maps/>
                <p className="endereco" >R. Maestro Nelson Ferreira, Nº1, Piedade/Jaboatão</p>   
            </div>
        </div>
      
      <div className="imagens">
        <img src='../../img/chefes.jpg'></img>
        <img src='../../img/recepcionista.jpg'></img>
        <img src='../../img/vista.jpg'></img>
      </div>
     
      
        </AreaSobre>
    );

}

   
export default Sobre;