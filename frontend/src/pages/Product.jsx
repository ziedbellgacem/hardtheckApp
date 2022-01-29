
import Rating from '@mui/material/Rating';
import { useDispatch,  useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import CommentList from "../components/comment/CommentList";
import { addToCart } from "../redux/actions/productAction";
import Loader from "./loading/loading";




const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
 
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h2`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size:20px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  
`;


const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
 margin-left:500px;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;





const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  const dispatch=useDispatch()
   const product=useSelector(state=>state.productReducer.product)
   const isloading=useSelector(state=>state.productReducer.loading)
 

  
  return (
    <Container>
      <Announcement />
      <Navbar />
      <div>
      {
        isloading?
        <Loader/>
        :
        <div>
        <Wrapper>
        <ImgContainer>
          <Image 
           src={
                   product&&  product.pictureUrl
                       
                    }
          />
        </ImgContainer>
        <InfoContainer>
          <Title>{product&&product.name}</Title>
          <Rating name="read-only" value={3} readOnly />
          <Desc>
            {product&&product.description}
          </Desc>
          
          <Price>DT {product&&product.prix}</Price>
          
          <AddContainer>
           
            <Button onClick={()=>dispatch(addToCart(product._id))}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <CommentList product={product} />
      </div>
      }
      </div>
      <Footer />
    </Container>
  );
};

export default Product;
