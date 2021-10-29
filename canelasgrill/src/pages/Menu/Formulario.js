import React from "react"

const Formulario = () => {
    return(
        <div className='menu'>

            <div className='hamburguer'>
                <h1>Hamburgueres</h1>
                <p>Todos os hamburgueres são acompanhados de bedida e babata da casa.</p>
                <div className='hamb' id='hamb01'>
                    <img src='../../img/menu/hambamora.jpg'></img>
                    <h2>Canela´s Mora</h2>
                    <h3 className='txt'>Pão de sésamo, molho de amora, hambúrguer de vaca 100g e
                    queijo minas.</h3>
                    <div className='qtd'>
                        <p>R$25,00</p>
                    </div>
                 </div>

                 <div className='hamb'id='hamb02'>
                    <img src='../../img/menu/hambbacon.jpg'></img>
                    <h2>Canela's Bacon</h2>
                    <h3 className='txt'>Pão de sésamo, molho da casa, bacon, hambúrguer de vaca 100g e
                    queijo mussarela.</h3>
                        <div className='qtd'>
                            <p>R$26,00</p>
                    </div>
                 </div>

                 <div className='hamb'id='hamb03'>
                    <img src='../../img/menu/hambcheddar.jpg'></img>
                    <h2>Canela's Cheddar</h2>
                    <h3 className='txt'>Pão de sésamo, maionese, hambúrguer de vaca 100g e
                    queijo cheddar.</h3>
                        <div className='qtd'>
                            <p>R$24,00</p>
                    </div>
                 </div>
            </div>


            <div className='hamburguerveg'>
                <h1>Hamburgueres Veganos</h1>
                <p>Todos os hamburgueres são acompanhados de bedida e babata da casa.</p>
                <div className='hambveg' id='veg01'>
                    <img src='../../img/menu/hambveg01.jpg'></img>
                    <h2>Canela´s Salsa</h2>
                    <h3 className='txt'>Pão de sésamo, molho de salsa, hambúrguer de soja 100g e salada .</h3>
                    <div className='qtd'>
                        <p>R$22,00</p>
                    </div>
                 </div>

                 <div className='hambveg'id='veg02'>
                    <img src='../../img/menu/hambveg02.jpg'></img>
                    <h2>Canela's Marinha</h2>
                    <h3 className='txt'>Pão de sésamo, molho de tomate, hambúrguer de soja 100g e
                    algas.</h3>
                        <div className='qtd'>
                            <p>R$25,00</p>
                    </div>
                 </div>

                 <div className='hambveg'id='veg03'>
                    <img src='../../img/menu/hambveg03.jpg'></img>
                    <h2>Canela's Jaca</h2>
                    <h3 className='txt'>Pão de sésamo, molho vegano da casa, "carne de jaca" temperada e
                    salada.</h3>
                     <div className='qtd'>
                            <p>R$28,00</p>
                          
                    </div>
                 </div>
            </div>


            <div className='salada'>
                <h1>Saladas</h1>
                <p>Todos as saladassão acompanhados de bedida.</p>
                <div className='salad' id='salad01'>
                    <img src='../../img/menu/saladamorango.jpg'></img>
                    <h2>Canela´s moranguinho</h2>
                    <h3 className='txt'>Morango, alface, cogumelos, cebolinha e amêndoas torradas em lasca.</h3>
                    <div className='qtd'>
                        <p>R$25,00</p>
                    </div>
                 </div>

                 <div className='salad'id='salad02'>
                    <img src='../../img/menu/saladamacarrao.jpg'></img>
                    <h2>Canela's Macarrão</h2>
                    <h3 className='txt'>Salada verde, tomate, abrobrinha,cenoura e salsinha e macarrão.</h3>
                    <div className='qtd'>
                        <p>R$22,00</p>
                    </div>
                 </div>


                 <div className='salad'id='salad03'>
                    <img src='../../img/menu/saladagraobico.jpg'></img>
                    <h2>Canela's Bico</h2>
                    <h3 className='txt'>Grão de bico, abrobrinha, cenoura e salsinha.</h3>
                    <div className='qtd'>
                        <p>R$18,00</p>        
                    </div>
                 </div>
            </div>


            <div className='sobremesa'>
                <h1>Sobremesas</h1>
                <div className='sobre' id='sobre01'>
                    <img src='../../img/menu/sobretorta.jpg'></img>
                    <h2>Canela´s torta</h2>
                    <h3 className='txt'>Torta de chocolate branco e chocolate meio amargo.</h3>
                    <div className='qtd'>
                        <p>R$15,00</p> 
                    </div>
                 </div>

                 <div className='sobre'id='sobre02'>
                    <img src='../../img/menu/sobremousse.jpg'></img>
                    <h2>Canela's choco</h2>
                    <h3 className='txt'>Mousse de chocolate.</h3>
                    <div className='qtd'>
                            <p>R$10,00</p>
                    </div>
                 </div>

                 <div className='sobre'id='sobre03'>
                    <img src='../../img/menu/sobresorvete.jpg'></img>
                    <h2>Canela's Ice Cream</h2>
                    <h3 className='txt'>Um misto de sorvete com sabor de frutas tropicais.</h3>
                    <div className='qtd'>
                            <p>R$18,00</p>
                    </div>
                 </div>

            </div>

            <div className='ifood'>
                <a href="//www.ifood.com" target="_blank"><img src="../../img/pedidoifood.jpg" Class="media-object  img-responsive img-thumbnail"/></a>
            </div>

        </div>
    );
}

export default Formulario;