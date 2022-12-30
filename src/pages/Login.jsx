import styled from "styled-components";
import { Mobile } from "../components/responsive";

const Container =styled.div`
width:100%;
height:100vh;
background: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),
 url("images/hd1.jpg") center;

 background-repeat:no-repeat;
 background-size:cover;
 display:flex;
 align-items:center;
 justify-content:center;
 `;

const Wrapp =styled.div`
width:27%;
padding:21px;
background-color:white;
${Mobile({width:"68%"})}
`;

const Title =styled.h1`
font-size:25px;
font-weight:300;`;

const Form =styled.form`
display:flex;
flex-direction:column`;


const Input =styled.input
`flex:1;
min-width:42%;
margin: 11px 0px;
padding:11px;`;



const Button =styled.button`
width:42%;
border:none;
padding:16px 21px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:11px;`;

const Link = styled.div`
margin: 6px 0px;
font-size:14px;
text-decoration: underline;
cursor:pointer`;

const Login = () => {
  return (
    <Container>
    <Wrapp>
        <Title>SIGN IN</Title>
        <Form>
            <Input type="text " placeholder="Username" />
            <Input type="password " placeholder="Password" />
           
            
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
    </Wrapp>
   </Container>
  )
}

export default Login;