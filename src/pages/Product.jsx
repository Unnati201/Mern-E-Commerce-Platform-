import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetters from "../components/NewsLetters";
import { Mobile } from "../components/responsive";

const Container=styled.div``;

const Wrapp=styled.div`
padding:52px;
display:flex;
${Mobile({padding:"11px", flexDirection:"column"})}

`;

const ImgContain=styled.div`
flex:1;`;

const Images=styled.img`
width:100%;
height:91vh;
object-fit:cover;
${Mobile({height:"42vh"})}

`;

const InfoContain=styled.div`
flex:1;
padding:0px 51px;
${Mobile({padding:"11px"})}
`;

const Title=styled.h1`
font-weight:200`;

const Descp=styled.p`
margin:21px 0px`;

const Price=styled.span`
font-weight:100;
font-size:42px;`;

const FilterContain=styled.div`
display:flex;
justify-content:space-between;
width:52%;
margin:31px 0px;
${Mobile({width:"100%"})}

`;

const Filters=styled.div`
display:flex;
align-items:center`;

const FilterTitle=styled.span`
font-size:19px;
font-weight:200`;

const FilterColor=styled.div`
width:21px;
height:22px;
border-radius:50%;
background-color:${props=>props.color};
margin:0px 6px;
cursor:pointer;`;

const FilterSize=styled.select`
margin-left:11px;
padding:6px;`;

const FilterSizeOptions=styled.option``;


const AddContain=styled.div`
width:52%;
display:flex;
align-items:center;
justify-content:space-between;
${Mobile({width:"100%"})}

`;

const AmountContain=styled.div`
display:flex;
align-items:center;
font-weight:700;`;

const Amount=styled.span`
width:32px;
height:32px;
border-radius:11px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 6px;`;


const Button=styled.button`
padding:14px;
border:2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;

&:hover{
  background-color:#f8f4f4;
}
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announce/>
        <Wrapp>
            <ImgContain>
            <Images src="images/denim.jpg"></Images>
            </ImgContain>
            <InfoContain>
                <Title>Denim Jumpsuit</Title>
                <Descp>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis error neque eligendi nobis mollitia, voluptatibus rerum quia quos beatae officia, aliquid placeat dicta, quis repudiandae tempora! Voluptatum praesentium ad molestiae nobis rerum.</Descp>
                <Price>$ 30</Price>
                <FilterContain>
                    <Filters>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filters>

                    <Filters>
                        
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOptions>XS</FilterSizeOptions>
                            <FilterSizeOptions>S</FilterSizeOptions>
                            <FilterSizeOptions>M</FilterSizeOptions>
                            <FilterSizeOptions>L</FilterSizeOptions>
                            <FilterSizeOptions>XL</FilterSizeOptions>
                            <FilterSizeOptions>XXL</FilterSizeOptions>
                        </FilterSize>
                    </Filters>
                </FilterContain>
                <AddContain>

                    <AmountContain>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContain>
                    <Button>ADD TO CART</Button>
                </AddContain>
            </InfoContain>
        </Wrapp>
        <NewsLetters/>
        <Footer/>

    </Container>
  )
}

export default Product