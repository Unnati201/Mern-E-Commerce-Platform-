import styled from "styled-components";
import { Mobile } from "../components/responsive";

const Container =styled.div`
width:100vw;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),
 url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;

 background-size:cover;
 display:flex;
 align-items:center;
 justify-content:center;
 `;

const Wrapp =styled.div`
width:40%;
padding:21px;
background-color:white;
${Mobile({width:"68%"})}
`;

const Title =styled.h1`
font-size:25px;
font-weight:300;`;

const Form =styled.form`
display:flex;
flex-wrap:wrap;`;


const Input =styled.input
`flex:1;
min-width:42%;
margin:21px 11px 0px 0px;
padding:11px;`;

const Agreement =styled.span`
font-size:12px;
margin:21px 0px;
`;

const Button =styled.button`
width:42%;
border:none;
padding:16px 21px;
background-color:teal;
color:white;
cursor:pointer;`;

const SignUp = () => {
  return (
   <Container>
    <Wrapp>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input type="text " placeholder="Name" />
            <Input type="text " placeholder="Last Name" />
            <Input type="text " placeholder="Username" />
            <Input type="email " placeholder="Email" />
            <Input type="password " placeholder="Password" />
            <Input type="password " placeholder="Confirm Password" />
            <Agreement>By creating an account , i consent to the processing of my personal data in accordance with the <b>PRIVATE POLICY</b></Agreement>
            <Button>CREATE</Button>
        </Form>
    </Wrapp>
   </Container>
  )
}

export default SignUp