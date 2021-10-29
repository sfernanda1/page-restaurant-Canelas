import styled from 'styled-components';


export const AreaHeader = styled.div `
    color:#fff;

.container-topo {
    max-width: 1500px;
    display: flex;
    background:linear-gradient(0deg, rgba(195,34,34,1) 0%, rgba(0,0,0,1) 100%);
    padding: 8px;
    font-family: Perpetua;
    color: rgb(41, 27, 27);
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    }   
    
    .logo{
        flex:1;

        img{
            width:250px;
            border-radius: 20px;
        }
    }

    nav {

        ul{
            display:flex;
        }
            li{
                list-style:none;
                margin-left:20px;
              
                a{
                    font-size:140%;
                    text-decoration:none;
                    color: #fff;
                    &:hover{
                        color:#A9A9A9;
                    }
                }
                
            }
        }
        
`;




