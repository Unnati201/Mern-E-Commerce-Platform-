import styled from "styled-components"

const Container = styled.div`
height: 33px;
background-color: orangered;
color:white;
display:flex;
align-items: center;
justify-content: center;
font-size:15px;
font-weight:500;
`;

const Announce = () => {
  return (
    <Container>
        Super Offer! Free Shipping on Orders Over $60
    </Container>
  )
}

export default Announce