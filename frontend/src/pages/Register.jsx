import styled from "styled-components";
import { mobile } from "../responsive";
import{useState} from 'react'
import {useDispatch} from 'react-redux'
import { register } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1265&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align:center;
`;

const Form = styled.form`
  display: flex;

  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 30%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;



const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top:10px;
`;

const Register = () => {
  const [formData,setFormData]=useState({firstname:"",lastname:"",email:"",password:""})

const dispatch = useDispatch()
const navigate=useNavigate()

  //handelChange
  const handelChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
 // handelSubmit 
 const handelSubmit=(e)=>{
   e.preventDefault()
   dispatch(register(formData,navigate))
 }


  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handelSubmit}>
         
          <Input name="firstname" placeholder="fast name" onChange={handelChange} />
          <Input name="lastname" placeholder="lirst name" onChange={handelChange}  />
          <Input  name="email" placeholder="email"  onChange={handelChange} />
          <Input  name="password" type="password" placeholder="password" onChange={handelChange}  />
          <Button type="submit">SIGN UP</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
