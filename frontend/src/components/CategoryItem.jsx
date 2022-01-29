import styled from "styled-components";
import { mobile } from "../responsive";
import {Button} from "react-bootstrap"
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {filterProduct} from '../redux/actions/productAction'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;





const CategoryItem = ({ item }) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Button variant="primary"onClick={()=>{dispatch(filterProduct(item.title));navigate('/productlist')}} >{item.title}</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
