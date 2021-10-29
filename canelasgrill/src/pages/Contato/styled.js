import styled from 'styled-components';


export const AreaContato= styled.div `

position: relative;
margin:1%;
background:linear-gradient(rgba(0,0,0,.80),rgba(0,0,0,.80)100%),url('../../img/Madeira.jpg');
align:center;

.titulo{
    color:#f53232f5;
    font-family:Perpetua ;
    font-style:italic;
    font-size: 200%;

}

.wpp{
    color:#f53232f5;
    font-family:Perpetua ;
    font-style:italic;
    font-size: 500%;
    margin-top:12%;
    margin-left:25%;

}

.flex-container{
    border-bottom: none;  
    align-content:center;
}

.email{
    font-size:25px;
    font-family: Perpetua ;
    background:rgba(0, 0, 0, 0.589);
    padding:15px;
    color: #f53232f5;
    border:none;
    margin-left: 32%;
}

.facebook{
    font-size:25px;
    font-family: Perpetua;
    background:rgba(0, 0, 0, 0.589);
    padding:15px;
    color:#f53232f5;
    border:none;
    margin-left: 1%;
}

.instagram{
    font-size:25px;
    font-family: Perpetua;
    background:rgba(0, 0, 0, 0.589);
    padding:15px;
    color: #f53232f5;
    margin-left: 1%;
    border:none;
    
}

.email:hover{
    background-color: white;
    color: black;
    cursor: pointer;
    transition: .3s eas all;
}

.facebook:hover{
    background-color: white;
    color: black;
    cursor: pointer;
    transition: .3s eas all;
}

.instagram:hover{
    background-color: white;
    color: black;
    cursor: pointer;
    transition: .3s eas all;
}







`;