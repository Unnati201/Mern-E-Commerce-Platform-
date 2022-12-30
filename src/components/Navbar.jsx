import { Badge } from '@material-ui/core';
import {   Search, ShoppingCartOutlined,  } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Mobile } from './responsive';

const Container = styled.div`
height:62px;
${Mobile({height:"65px"})}
`;

const Wrapp = styled.div`
padding: 10px 20px;
display:flex;
align-items:center;
justify-content:space-between;
${Mobile({padding:"11px 0px"})}


`;



const Left = styled.div`
flex:1;
display:flex;
align-items: center;

`;

const Languages = styled.span`
font-size:15px;
cursor:pointer;
${Mobile({display:"none"})}
`;

const SearchContain = styled.div`
border: 0.6px solid lightgray;
display:flex;
align-items: center;
margin-left:26px;
padding:5px;
`;
const Input = styled.input`
border:none;
${Mobile({width:"50px"})}
`;

const Center = styled.div`
flex:1;
text-align:center;
`;

const Logo = styled.h2`
font-weight:bold;
${Mobile({fontSize:"20px"})}

`;

const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${Mobile({flex:3,justifyContent:"center"})}
`;

const Menu = styled.div`
font-size:15px;
cursor:pointer;
margin-left:26px;
${Mobile({fontSize:"13px 0px", marginLeft:"11px"})}
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapp>
          
        <Left>
            <Languages>ENG</Languages>
            <SearchContain>
                <Input placeholder="Search"/>
                <Search style={{color:"gray",fontSize:17}}/>
            </SearchContain>
        </Left>
        <Center><Logo>ECom.</Logo></Center>
        <Right>
            <Menu>REGISTER</Menu>
            <Menu>SIGN IN</Menu>
            <Menu>
            <Badge badgeContent={4} color="primary">
  <ShoppingCartOutlined />
</Badge>
            </Menu>
        </Right>

        </Wrapp>
        
        </Container>
  )
}

export default Navbar;