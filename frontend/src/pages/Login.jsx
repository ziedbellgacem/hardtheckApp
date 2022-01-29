import styled from "styled-components";
import {mobile} from "../responsive";
import {Link} from 'react-router-dom'
import { login } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import{useState} from 'react'
import {useDispatch} from 'react-redux'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1548484352-ea579e5233a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 300;
  text-align:center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  
`;

const A = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  
  
`;

const Login = () => {
 const [formData,setFormData]=useState({email:"",password:""})

const dispatch = useDispatch()
const navigate=useNavigate()

  //handelChange
  const handelChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
 // handelSubmit 
 const handelSubmit=(e)=>{
   e.preventDefault()
   dispatch(login(formData,navigate))
 }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handelSubmit}>
          <Input  name="email" placeholder="Email" onChange={handelChange}/>
          <Input type="password" name="password" placeholder="password" onChange={handelChange}/>
          <Button type="submit">LOGIN</Button>
          
          <Link to='/register' style={{textAlign:"center",color:"black"}}><A>CREATE A ACCOUNT</A></Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
