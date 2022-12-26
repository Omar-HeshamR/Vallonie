import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import LogIn from '../Components/LogIn';
import { toast } from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import { useRouter } from 'next/router'

const SignUp = () => {

  const { signup, currentUser} = useStateContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter()

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [showLogInModal, setShowLogInModal] = useState(false);
  const openLogInModal = () => {
    setShowLogInModal(prev => !prev);
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if(passwordRef.current.value.length < 6){
      return setError("Password should be at least 6 characters")
    }
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      toast.success(`Account Successfully Created`);
      router.push("./")
    } catch {
      setError("Failed to create an account")
    }
    setLoading(false)
  }

// lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll1111aaaaaaaaaaaaaa
return (
      <Section>
            <ModalWrapper >
              <ModalContent>
                <MainTitle> CREATE AN ACCOUNT </MainTitle>
                {error && <ErrorContainer>{error}</ErrorContainer>}
                <InputTitle> Enter Full Name:</InputTitle>
                <FieldInput type={"text"} ref={nameRef}/>
                <InputTitle> Enter Email Address:</InputTitle>
                <FieldInput type={"email"} ref={emailRef}/>
                <InputTitle> Create Password:</InputTitle>
                <FieldInput type={"password"} ref={passwordRef}/>
                <InputTitle> Confirm Password:</InputTitle>
                <FieldInput type={"password"} ref={passwordConfirmRef}/>
                <LogInButton disabled={loading} onClick={handleSubmit}>SIGN UP</LogInButton>
                <BlackLine ></BlackLine>
                <EndItemsContainer>
                  <EndItem onClick={openLogInModal}>Have Account? Log In</EndItem>
                  {/* {currentUser && JSON.stringify(currentUser)} */}
                </EndItemsContainer>
              </ModalContent>
            </ModalWrapper>
            <LogIn showModal={showLogInModal} setShowModal={setShowLogInModal}/>
        </Section>
  );
}

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: Black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 10px double white;
  border-bottom: 10px double white;
  `

const ModalWrapper = styled.div`
  margin-top: 3vw;
  margin-bottom: 3vw;
  width: 30vw;
  height: 90%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 10px;
  @media (max-width: 480px){
    width: 60vw;
    height: 40vw;}
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  line-height: 1.25;
  color: #141414;
  p {
    margin-bottom: 0rem;
    font-size: ${props => props.theme.fontlg};
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 1vw;
  right: 1.5vw;
  width: 2vw;
  height: 2vw;
  padding: 0;
  z-index: 10;
`;

const MainTitle = styled.h1`
font-size: 2.75vw;
margin-top: 1vw;
@media (max-width: 480px){
  font-size: 4.75vw;
}
`
const InputTitle = styled.div`
font-size: 1.75vw;
width: 92%;
color: dark_grey;
display: flex;
margin-top: 1vw;
@media (max-width: 480px){
  font-size: 3.75vw;
}
`
const FieldInput = styled.input`
width: 90%;
height: 2vw;
font-size: 1vw;
font-weight: 600;
border: 2px solid #404040;
type: text;
`
const LogInButton = styled.button`
width: 90%;
display: inline-block;
cursor: pointer;
margin-top: 1.5vw;
background-color: black;
color: white;
font-weight: 600;
font-size: 1vw;
padding: 1vw 2vw;
transition: all 0.5s ease;
&:hover{
  transform: scale(0.7);
}

&::after{
  content: " ";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%) scale(0);
  border: 0.5vw solid black;
  width: 100%;
  height: 100%;
}

&:hover::after{
  transform: translate(-50%,-50%) scale(1);
  padding: 0.5vw;
}

`
const BlackLine = styled.div`
width: 90%;
margin: 1vw;
background-color: black;
height: 1%;
`
const EndItemsContainer = styled.div`
display: flex;
justify-content: center;
width: 90%;
`
const EndItem = styled.div`
color: blue;
cursor: pointer;
margin-bottom: 1vw;
&:hover{
  border-bottom: 1px solid blue;
}
@media (max-width: 1024px){
    font-size: 1.5vw;
}
@media (max-width: 480px){
  font-size: 2.75vw;
}
`
const ErrorContainer = styled.div`
background-color: coral;
color: black;
border-radius: 10px;
padding: 0.5vw 0.5vw;
font-size: 1.5vw;
`
export default SignUp