import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import {Button} from "react-bootstrap"
import CartShop from '../components/CartShop';
import {useSelector} from 'react-redux'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;






const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;



const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 40vh;
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const SummaryTitle = styled.h2`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;



const Cart = () => {
  const [subTotalPrice,setSubTotalPrice]=useState(0)
  const [totalPrice,setTotalPrice]=useState(0)

  const navigate=useNavigate()
  const cart = useSelector((state) => state.productReducer.cart);

  useEffect(()=>{
    let price=0;
    cart.forEach(item=>price+=item.qty*item.prix )
    setSubTotalPrice(price)
    let total=price +(price*0.19)
    setTotalPrice(total)
    
    
  },[cart,totalPrice,setTotalPrice])
  return (
    <Container>
      <Announcement />
      <Navbar />
      
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
         <Button variant="primary" onClick={()=>navigate('/productlist')}>CONTINUE SHOPPING</Button>
          
          <Button >CHECKOUT NOW</Button>
        </Top>
        <Bottom>
          <Info>
          {
            cart.map(item=><CartShop key={item._id} itemProduct={item}/> )
          } 
          
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>DT {subTotalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>TVA%</SummaryItemText>
              <SummaryItemPrice>19%</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>DT {totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
