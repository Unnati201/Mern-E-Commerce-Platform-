import styled from "styled-components"
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetters from "../components/NewsLetters";
import Product from "../components/Product";
import { Mobile } from "../components/responsive";


const Container = styled.div``;

const Title = styled.h1`
margin:21px;`;

const FilterContain = styled.div`
display:flex;
 justify-content:space-between;`;

const Filters = styled.div`
margin:21px;
${Mobile({width:"0px 21px", display:"flex", flexDirection:"column"})}
`;

const Filtertext = styled.span`
font-size:21px;
font-weight:600;
margin-right:21px;
${Mobile({marginRight:"0px"})}
`;

const Selector = styled.select`
padding:12px;
margin-right:21px;
${Mobile({margin:"10px 0px"})}
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announce/>
        <Title>Dresses</Title>
        <FilterContain>
            <Filters><Filtertext>Filter Products:</Filtertext>
            <Selector>
                <Option disable selected>Colors</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Green</Option>
                <Option>BLue</Option>
                <Option>Yellow</Option>
                <Option>Gray</Option>
                <Option>Orange</Option>
            </Selector>


            <Selector>
                <Option disable selected>Size</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
                
            </Selector>
            </Filters>
            <Filters><Filtertext>Sort Products:</Filtertext>

            <Selector>
                <Option disable selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>  
            </Selector>
            </Filters>
        </FilterContain>
        <Product/>
        <NewsLetters/>
        <Footer/>
    </Container>
  )
}

export default ProductList
