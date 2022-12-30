import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components"


const Info=styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
align-items:center;
justify-content:center;
transition:all 0.5 ease;
cursor:pointer;`;


const Container=styled.div`
flex:1;
margin:5px;
min-width:280px;
height:351px;
display:flex;
align-items:center;
justify-content:center;
background-color:#f5fbfd;
position:relative;

&:hover  ${Info}{
 opacity:1;
}

`;

const Circle=styled.div`
width:201px;
height:201px;
border-radius:48%;
background-color:white;
position:absolute;`;

const Images=styled.img`
height:70%;
z-index: 2`;



const Icon=styled.div`
width:41px;
height:41px;
border-radius:51%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition:all 0.6s ease;

&:hover{
    backkground-color:#e9f5f5;
    transform:scale(1.1);
}`;

const Productdata = ({items}) => {
  return (
    <Container>
     <Circle/>
     <Images src={items.img}/>
     <Info>
        <Icon>
            <ShoppingCartOutlined/>
        </Icon>

        <Icon>
            <SearchOutlined/>
        </Icon>
        <Icon>
            <FavoriteBorderOutlined/>
        </Icon>
     </Info>
    </Container>
  )
}

export default Productdata;