import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { Sliderdata } from "./imagesitem";

import { Mobile } from './responsive';






const Container = styled.div`
width: 100%;
height:100vh;
display:flex;

position:relative;
overflow:hidden;
${Mobile({display:"none"})}
`;

const Arrow = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props=>props.direction === "left" && "11px"};
right:${props=>props.direction === "right" && "11px"};
cursor:pointer;
opacity:0.6;
margin:auto;
z-index:2;


`;


const Wrapp = styled.div`
height:100%;
display:flex;
transition: all 1.5s ease;
transform:translateX(${props=>props.sliderData * -100}vw
    );
`;

const Slides = styled.div`

width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color: #${props=>props.bg};
`;

const ImgContain = styled.div`
height:100%;
flex:1;
`;

const Images = styled.img`
height:86%;
margin-left:21%;


`;

const InfoContain = styled.div`
flex:1;
padding:50px;
`;

const Title = styled.h1`
font-size:50px;
`;
const Description = styled.p`
margin:52px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;

`;
const Button = styled.button`
padding:8px;
font-size:17px;
background-color:transparent;
cursor:pointer;
`;


const Slider = () => {
    
    const [sliderData,setSliderData]=useState(0)
    const handleChanged = (direction)=>{

        if(direction==="left"){
            setSliderData(sliderData>0  ? sliderData-1 :2)

        }else{
            setSliderData(sliderData<2 ? sliderData+1 :0)
        }

    }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleChanged("left")}>
      <ArrowLeftOutlined />
      </Arrow>
      <Wrapp sliderData={sliderData}>
        {Sliderdata.map((items)=>(

        
        <Slides bg={items.bg} key={items.id}>
        <ImgContain>
        <Images src={items.img}/>
        
        </ImgContain>
       
        <InfoContain>
         <Title>{items.title}</Title>
            <Description>{items.description}</Description>
        <Button>SHOW NOW</Button>
        </InfoContain>
       </Slides>
        ))}

      </Wrapp>
      
      <Arrow direction="right"  onClick={()=>handleChanged("right")}>
      <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider;