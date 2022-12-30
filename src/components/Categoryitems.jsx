import styled from "styled-components"

import { Mobile } from './responsive';



const Container = styled.div`
flex:1;
margin:3px;
height:69vh;
position:relative;`;

const Images = styled.img`
width:100%;
height:92%;
object-fit:cover;
flex-wrap:wrap;
${Mobile({height:"31vh"})}

`;
const InfoContainer = styled.div`
position: absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;


`;


const Title = styled.h1`
color:white;
font-size:28px;
margin-bottom:21px;`;

const Button = styled.button`
border:none;
padding:11px;
background-color: white;
color:gray;`;



const Categoryitems = ({items}) => {
  return (
    <Container>
        <Images src={items.img}/>
        <InfoContainer>
            <Title>{items.title}</Title>
            <Button>SHOP NOW</Button>
        </InfoContainer>

    </Container>
  )
}

export default Categoryitems