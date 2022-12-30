import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Mobile } from "../components/responsive";

const Container = styled.div``;

const Wrapp = styled.div`
padding:20px;
${Mobile({padding:"11px"})}

`;

const Title = styled.h1`
font-weight:300;
text-align:center;
`;

const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:21px;
`;

const TopButtons = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${(props)=>props.type==="filled" && "none"};
background-color: ${(props)=>props.type==="filled" ? "black":"tranparent"};
color:${(props) =>props.type==="filled" && "white"};`;

const TopTexing=styled.div`
${Mobile({display:"none"})}
`;

const TopTexts=styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 11px;`;

const Bottom = styled.div`
display:flex;
justify-content:space-between;
${Mobile({flexDirection:"column"})}

`;

const Info = styled.div`
 flex:3;`;

 const Product = styled.div`
 display:flex;
 justify-content:space-between;
 ${Mobile({flexDirection:"column"})}
 
 `;

 const ProductDetails=styled.div`
 flex:2;
 display:flex;`;

 const Image = styled.img`
 width:200px;`;

 const Detail = styled.div`
 padding:21px;
 display:flex;
 flex-direction:column;
 justify-content:space-around;`
 ;

 const ProductNames = styled.span``;

 const Productid = styled.span``;

 const ProductColor = styled.div`
 width:19px;
 height:19px;
 border-radius: 52%;
 background-color:${props=>props.color}`;

 const ProductSize= styled.span``;

 const PriceDetails = styled.div`
 flex:1;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:space-around;`;
 
 const ProductAmountContain = styled.div`
 display:flex;
 align-items:center;
 margin-bottom:21px;`;

 const ProductAmounts = styled.div`
 font-size:24px;
 margin: 6px;
 ${Mobile({margin:"5px 16px"})}
 `;


 const ProductPrice = styled.div`
 font-size:28px;
 font-weight:200;
 ${Mobile({marginBottom:"21px"})}
 `;

 const Hr = styled.hr`
background-color:#eee;
border:none;
height:1px;`;


const Summary = styled.div`
flex:1;
border: 0.6px solid lightgray;
border-radius: 11px;
padding: 21px;
height:50vh;`;

const SummaryTitles =styled.h1`
font-weight:200;`;

const SummaryItem =styled.div`
margin:31px 0px;
display:flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "23px"};
`;

const SummaryItemText =styled.span``;

const SummaryItemPrice =styled.span``;

const Button =styled.button`
width:100%;
padding:11px;
background-color: black;
color:white;
`;

const Cart = () => {
  return (
   <Container>
    <Navbar/>
    <Announce/>
    <Wrapp>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButtons >CONTINUE SHOPPING</TopButtons>
            <TopTexing>
                <TopTexts>Shopping Bag(2)</TopTexts>
                <TopTexts>Your Wishlist (0)</TopTexts>
            </TopTexing>
            <TopButtons type="filled">CHECKOUT NOW</TopButtons>
        </Top>
         <Bottom>
            
            <Info>
                <Product>
                    <ProductDetails>

                        <Image src="images/lit.jpg"/>
                        <Detail>
                            <ProductNames><b>Product:</b>JESSIE THUNDER GIRL SHOES</ProductNames>

                            <Productid><b>ID:</b>128894537</Productid>

                            <ProductColor color="pink"/>
                            <ProductSize><b>Size:</b>39.
                            6</ProductSize>
                        </Detail>
                    </ProductDetails>
                    <PriceDetails>

                        <ProductAmountContain>
                            <Add/>
                            <ProductAmounts>2</ProductAmounts>
                            <Remove/>

                        </ProductAmountContain>
                        <ProductPrice>$ 50</ProductPrice>
                    </PriceDetails>
                </Product>

                <Hr/>
                <Product>
                    <ProductDetails>

                        <Image src="images/gray.jpg"/>
                        <Detail>
                            <ProductNames><b>Product:</b>ZUDIO MEN T-SHIRT </ProductNames>

                            <Productid><b>ID:</b>128894537</Productid>

                            <ProductColor color="gray"/>
                            <ProductSize><b>Size:</b> XL</ProductSize>
                        </Detail>
                    </ProductDetails>
                    <PriceDetails>

                        <ProductAmountContain>
                            <Add/>
                            <ProductAmounts>1</ProductAmounts>
                            <Remove/>

                        </ProductAmountContain>
                        <ProductPrice>$ 25</ProductPrice>
                    </PriceDetails>
                </Product>
            </Info>
            <Summary>
                <SummaryTitles>ORDER SUMMARY</SummaryTitles>
                <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 75</SummaryItemPrice>
                </SummaryItem>

                <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 4.80</SummaryItemPrice>
                </SummaryItem>

                <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -6.80</SummaryItemPrice>
                </SummaryItem>

                <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ 73</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
            </Bottom>   
    </Wrapp>
 
   <Footer/>
   </Container>
  )
}

export default Cart