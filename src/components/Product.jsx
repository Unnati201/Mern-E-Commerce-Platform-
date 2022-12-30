import styled from "styled-components"
import { demandProducts } from "./imagesitem";
import Productdata from "./Productdata";

const Container = styled.div`
padding:21px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`;

const Product = () => {
  return (
    <Container>
        {demandProducts.map(items=>(
           <Productdata items={items} key={items.id} />
        ))}
    </Container>
  )
}

export default Product