import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  removeItem,
} from "../redux/actions/productAction";
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  margin-right: 20px;
  ${mobile({ flexDirection: "column" })};
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

function CartShop({ itemProduct }) {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      <Product>
        <ProductDetail>
          <Image src={itemProduct.pictureUrl} />
          <Details>
            <ProductName>
              <b>Product:</b> {itemProduct.name}
            </ProductName>
            <ProductId>
              <b>ID:</b> {itemProduct._id}
            </ProductId>
            <DeleteIcon onClick={() => dispatch(removeItem(itemProduct._id))} />
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <AddCircleOutlineIcon
              onClick={() => dispatch(increment(itemProduct._id))}
            />
            <ProductAmount>{itemProduct.qty}</ProductAmount>
            <RemoveCircleOutlineIcon
              onClick={() => dispatch(decrement(itemProduct._id))}
            />
          </ProductAmountContainer>
          <ProductPrice>DT {itemProduct.prix}</ProductPrice>
        </PriceDetail>
      </Product>
    </div>
  );
}

export default CartShop;
