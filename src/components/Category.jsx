import {categorys} from "./imagesitem";
import Categoryitems from "./Categoryitems";
import styled from "styled-components";
import { Mobile } from './responsive';

const Container = styled.div`
display:flex;
padding:21px;
justify-content:space-between;
${Mobile({padding:"0px",flexDirection:"column"})}
`;

const Category = () => {
  return (
    <Container>
        {categorys.map(items=>(
            <Categoryitems items={items} key={items.id}/>
        ))}

    </Container>
  )
}

export default Category