import styled from "styled-components";
import {Dropdown,Button,ButtonGroup} from 'react-bootstrap'
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import ListCardProducts from "../components/cardProducts/ListCardProducts";
import { filterProduct } from "../redux/actions/productAction";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Title = styled.h1`
  margin: 30px 43% ;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;



const ProductList = () => {
  const dispatch=useDispatch()
  return (
    <Container>
      <Announcement />
      <Navbar />
      
      <Title> Products</Title>
      <FilterContainer>
        
        <Filter>
          <FilterText>Sort Products:</FilterText>
     
             <Dropdown as={ButtonGroup}>
  <Button variant="success">Price</Button>

  <Dropdown.Toggle split variant="success"  />

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=>dispatch(filterProduct('ASC'))}>Price Asc</Dropdown.Item>
    <Dropdown.Item onClick={()=>dispatch(filterProduct('DESC'))}>Price Desc</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
         
        </Filter>
      </FilterContainer>
      <ListCardProducts/>
     
      <Footer />
    </Container>
  );
};

export default ProductList;
