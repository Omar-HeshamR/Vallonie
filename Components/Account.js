import React from 'react'
import styled, {keyframes} from 'styled-components'
import { AiOutlineLeft } from 'react-icons/ai';   
import { useStateContext } from '../context/StateContext';
import {VscAccount}  from "react-icons/vsc";
// hi
const Account = ({openAccountMenu, setOpenAccountMenu}) => {
    const {currentUser, logout} = useStateContext();

    const LogOutMethod = () => {
        setOpenAccountMenu(false);
        logout();
    }

  return (
        <AccountWrapper>
            <AccountContainer>
                <HeadBack><AiOutlineLeft onClick={() => setOpenAccountMenu(false)}/></HeadBack>
                <DetailsContainer>
                    <VscAccountStyled />
                    <DetailItem>{currentUser && <>Email: {currentUser.email}</>}</DetailItem>
                    <LogOut onClick={LogOutMethod}>LOG OUT</LogOut>
                </DetailsContainer>
            </AccountContainer>
        </AccountWrapper>
    )
}


const OpenUp = keyframes`
0%{
  transform: translatex(35vw)
}
100%{
  transform: translatex(0vw)
}
`
const AccountWrapper = styled.div`
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;
    transition: all 1s ease-in-out;
`
const AccountContainer = styled.div`
    height: 100vh;
    width: 33.5vw;
    background-color: white;
    float: right;
    padding: 40px 10px;
    overflow: auto;
    position: relative;
    animation: ${OpenUp} 1.25s ease;
    @media (max-width: 1024px){
      width: 40vw;
    } 
    @media (max-width: 480px){
      width: 50vw;
    } 
`
const HeadBack = styled.button`
display: flex;
align-items: center;
font-size: 2vw;
font-weight: 500;
cursor: pointer;
gap: 0px;
margin-left: 0vw;
border: none;
background-color: transparent;
`
const DetailsContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
align-text: center;
font-size: 1.75vw;
`
const DetailItem = styled.div`
`
const LogOut = styled.button`
width: 75%;
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
const VscAccountStyled = styled(VscAccount)`
color: black;
margin-bottom: 2vw;
font-size: 10vw;
`

export default Account