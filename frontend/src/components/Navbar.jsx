import Badge from '@mui/material/Badge';
import {Form,FormControl,Button,DropdownButton,Dropdown} from "react-bootstrap"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {Link, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authAction';
import { filterProduct } from '../redux/actions/productAction';

const Container = styled.div`
  height: 90px;
  margin-bottom:30px;
   box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
   ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border:none;
  justify-content: space-between;
   ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content:space-between;
`;




const Center = styled.div`
  flex: 1;
  text-align: center;
  
`;

const Logo = styled.h2`
  font-weight: bold;
  font-size:50px;
   text-decoration:none;
 
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration:none;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [totalItems,setTotalItems]=useState(0)
  const [search,setSearch]=useState('')
  const user=useSelector(state=>state.authReducer.user)
   const cart = useSelector((state) => state.productReducer.cart);
   
   
  useEffect(()=>{
    let items=0;
    items+=cart.length;
    
    setTotalItems(items)
    
    
    
  },[cart,totalItems,setTotalItems])
  
  
  return (
    <div>
    {
     user&&user.role===1?
     <Container>
      <Wrapper>
        <Left>
         <Link to="/home" style={{textDecoration:"none",color:"black"}}> <Logo>HARDTECK.</Logo></Link>
          <DropdownButton id="dropdown-basic-button" title="Categories">
 <Dropdown.Item  onClick={()=>{dispatch(filterProduct('All'));navigate('/productlist')}}>All Products</Dropdown.Item>
  <Dropdown.Item onClick={()=>dispatch(filterProduct('INFORMATIQUE'))}>Informatique</Dropdown.Item>
  <Dropdown.Item onClick={()=>dispatch(filterProduct('SMARTPHONE'))}>SmartPhone</Dropdown.Item>
  <Dropdown.Item onClick={()=>dispatch(filterProduct('GAMING'))} >Gaming</Dropdown.Item>
</DropdownButton>
        
        </Left>
        <Center>
            <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e)=>setSearch(e.target.value)}
        />
       
        <Button variant="primary" onClick={()=>dispatch(filterProduct(search))}><i className="fas fa-search"></i></Button>
      </Form>
        </Center>
        <Right>
       <Link to="/profile"> <Avatar alt="Remy Sharp" src= {

                  user.pictureUrl
                    ? `uploads/${user.pictureUrl}`
                    : "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800057/61010892-ic%C3%B4ne-d-utilisateur-homme-profil-homme-d-affaires-avatar-illustration-vectorielle-de-glyphe-de-perso.jpg?ver=6"
                }
               
              />
       
       </Link>
       <Link to='/adminlists'style={{textDecoration:'none',color:"black"}}><MenuItem>ADMIN</MenuItem></Link>
         <MenuItem onClick={()=>{dispatch(logout());navigate('/')}}>Logout</MenuItem> 
          <MenuItem>
           <Link to="/cart" style={{textDecoration:'none',color:"black"}}><Badge badgeContent={totalItems} color="primary">
              <ShoppingCartIcon/>
            </Badge>
            </Link> 
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>:
    <Container>
      <Wrapper>
        <Left>
         <Link to="/home" style={{textDecoration:"none",color:"black"}}> <Logo>HARDTECK.</Logo></Link>
          <DropdownButton id="dropdown-basic-button" title="Categories">
 <Dropdown.Item onClick= {()=>{dispatch(filterProduct('All'));navigate('/productlist')}}>All Products</Dropdown.Item>
  <Dropdown.Item  onClick={()=>{dispatch(filterProduct('INFORMATIQUE'));navigate('/productlist')}}>Informatique</Dropdown.Item>
  <Dropdown.Item onClick={()=>{dispatch(filterProduct('SMARTPHONE'));navigate('/productlist')}} >SmartPhone</Dropdown.Item>
  <Dropdown.Item  onClick={()=>{dispatch(filterProduct('GAMING'));navigate('/productlist')}}>Gaming</Dropdown.Item>
</DropdownButton>
        
        </Left>
        <Center>
            <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e)=>setSearch(e.target.value)}
        />
        <Button variant="primary" onClick={()=>dispatch(filterProduct(search))} >
          <i className="fas fa-search"></i></Button>
      </Form>
        </Center>
        <Right>
       <Link to="/profile"> <Avatar alt="Remy Sharp"
        src= {

                  user.pictureUrl
                    ? `uploads/${user.pictureUrl}`
                    : "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800057/61010892-ic%C3%B4ne-d-utilisateur-homme-profil-homme-d-affaires-avatar-illustration-vectorielle-de-glyphe-de-perso.jpg?ver=6"
                }
        />
       </Link>
       <MenuItem>{user&&user.firstname}</MenuItem>
         <MenuItem onClick={()=>{dispatch(logout());navigate('/')}}>Logout</MenuItem> 
          <MenuItem>
           <Link to="/cart" style={{textDecoration:'none',color:"black"}}><Badge badgeContent={totalItems} color="primary">
              <ShoppingCartIcon/>
            </Badge>
            </Link> 
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
    }
    </div>
  );
};

export default Navbar;
