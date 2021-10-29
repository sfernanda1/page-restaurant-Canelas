
import React from "react";
import{ AreaFooter } from './styled'
<a href="https://icons8.com/icon/ZRiAFreol5mE/instagram">Instagram icon by Icons8</a>;
<a href="https://icons8.com/icon/MYkDsY0ExdsM/ifood">iFood icon by Icons8</a>;
<a href="https://icons8.com/icon/80361/telefone">Telefone icon by Icons8</a>;


function Footer(){

    return(
        <AreaFooter>
            <div className="Contatos">
                <a href="//www.instagram.com" target="_blank"><img src="https://img.icons8.com/color/48/000000/instagram-new--v2.png" Class="media-object  img-responsive img-thumbnail"/></a>
                <a href="//www.whatsapp.com" target="_blank"><img src="https://img.icons8.com/doodle/48/000000/phone--v1.png"Class="media-object  img-responsive img-thumbnail"/></a>
                <a href="//www.ifood.com" target="_blank"><img src="https://img.icons8.com/doodle/48/000000/ifood.png"Class="media-object  img-responsive img-thumbnail"/></a>
            </div>
        </AreaFooter>
    );
}

export default Footer;
