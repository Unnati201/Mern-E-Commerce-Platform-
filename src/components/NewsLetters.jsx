import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { Mobile } from './responsive';

const Container=styled.div`
height:62vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;`;

const Title=styled.h1`
font-size:60px;
margin-bottom:21px;`;

const Desc=styled.div`
font-size:25px;
font-weight:300;
margin-bottom:24px;
${Mobile({textAlign:"center"})}

`;

const InputContain=styled.div`
width:52%;
height:41px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid gray lightgray;
${Mobile({width:"82%"})}
`;

const Input=styled.input`
border:none;
flex:8;
padding-left:21px;
`;

const Button=styled.button`
flex:1;
border:none;
background-color:teal;
color:white`;


const NewsLetters = () => {
  return (
   <Container>
    <Title>NewsLetters</Title>
    <Desc>Get timely updates from your favorite products.</Desc>
    <InputContain>
    <Input placeholder="Your email"/>
    <Button>
        <Send/>
    </Button>
    </InputContain>
   </Container>
  )
}

export default NewsLetters;