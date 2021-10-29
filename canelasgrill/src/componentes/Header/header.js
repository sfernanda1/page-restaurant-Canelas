import React from "react";

import {Link} from 'react-router-dom';

import {AreaHeader} from './styled';

<a href="https://icons8.com/icon/bIhOjS7tuMyL/menu-de-restaurante">Menu de restaurante icon by Icons8</a>

function Header(){
    return(
        <AreaHeader>
            <div className="container-topo">
                <div className="logo"><img src = "../../img/canela-logo.jpeg"></img></div>
           
                <nav className="links-topo">
                    <ul>
                        <li><Link to ="/">Home</Link></li>
                        <li><Link to ="/sobre">Sobre nós</Link></li>
                    </ul>
                </nav>
            
            </div>
         </AreaHeader>   
      
    );
}

export default Header;
