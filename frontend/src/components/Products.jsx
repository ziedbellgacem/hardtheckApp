import { useSelector } from "react-redux";
import styled from "styled-components";

import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  const products=useSelector(state=>state.productReducer.products)
  return (
    <div>
      <h2 style={{textAlign:"center"}}>Products</h2>
    <Container>
      
      {products.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
    </div>
  );
};

export default Products;
