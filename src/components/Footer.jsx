import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { Mobile } from './responsive';

const Container = styled.div`
display:flex;
${Mobile({flexDirection:"column"})}

`;

const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:21px;`;

const Logo=styled.h1``;

const Descp=styled.p`
margin:21px 0px;

`;

const SocialContain=styled.div`
display:flex;`;

const SocialIcons=styled.div`
width:41px;
height:41px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;`;

const Center = styled.div`
flex:1;
padding:20px;
${Mobile({display:"none"})}
`;

const Title=styled.h3`
margin-bottom:30px;
`;

const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`;

const Listitem= styled.li`
width:50%;
margin-bottom:10px`;

const Right = styled.div`
flex:1;
padding:21px;
${Mobile({backgroundColor:"#fff8f8"})}

`;
const Contactitems=styled.div`
margin-bottom:21px;
display:flex;
align-items:center;`;

const Payments = styled.img`
width:80%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ECom.</Logo>
            <Descp>There are many variations of passages of Lorem Ipsum 
                available, but the majority have suffered alteration 
                in some form, by injected humour, or randomised
                 words which don't look even slightly believable

            </Descp>
            <SocialContain>
                <SocialIcons color="385999">
                    <Facebook/>
                </SocialIcons>

                <SocialIcons color="E4405F">
                    <Instagram/>
                </SocialIcons>

                <SocialIcons color="55ACEE">
                    <Twitter/>
                </SocialIcons>

                <SocialIcons color="E60023">
                    <Pinterest/>
                </SocialIcons>
            </SocialContain>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <Listitem>Home</Listitem>
                <Listitem>Cart</Listitem>
                <Listitem>Man Fashion</Listitem>
                <Listitem>Woman Fashion</Listitem>
                <Listitem>Accessories</Listitem>
                <Listitem>My Account</Listitem>
                <Listitem>Order Tracking</Listitem>
                <Listitem>Wishlist </Listitem>
                <Listitem>Wishlist </Listitem>
                <Listitem>Terms & Conditions</Listitem>
                
            </List>
        </Center>
       <Right>
        <Title>Contact</Title>
        <Contactitems><Room style={{marginRight:"11px"}}/>
            A-10 Bhoomi Elite Sec-28 Nerul Navi Mumbai
        </Contactitems>

        <Contactitems><Phone style={{marginRight:"11px"}} />
            +91 9644023845
        </Contactitems>

        <Contactitems><MailOutline style={{marginRight:"11px"}}/>usingh216@gmail.com</Contactitems>
        <Payments src="images/phon.png"></Payments>
       
       
       </Right>
    </Container>
  );
};

export default Footer;