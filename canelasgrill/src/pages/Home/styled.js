import styled from 'styled-components';


export const AreaHome= styled.div `


a {
   
    text-decoration: none;
    color:White;
 
}

.imagemdestaque{
    margin-top: 0;
    background:linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%),url('../../img/hamburguer.jpg');
    height: 90vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: white;
    font-size: 150%;
    font-family:Perpetua;
    text-align: justify;

}

.container{
    margin-left:1%;
    margin-right:1%;
}

.botoes{
    margin-top:1%;

}

.menubt{
    background:rgba(0, 0, 0, 0.589);
    font-size:170%;
    border:none;
    margin-left:1%;
  
}

.reservabt{
    margin-left:1%;
    background:rgba(0, 0, 0, 0.589);
    font-size:170%;
    border:none;
   
}


.menubt:hover{
    background:#696969;
    color: white;
    cursor: pointer;
    transition: .3s eas all;
}

.reservabt:hover{
    background:#696969;
    color: white;
    cursor: pointer;
    transition: .3s eas all;
}


`;