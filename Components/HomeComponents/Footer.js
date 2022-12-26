import React, {useState} from 'react'
import styled from 'styled-components'
import {IconContext} from "react-icons";
import { SiFacebook, SiInstagram, SiTwitter} from "react-icons/si";
import Link from 'next/link';

export const Footer = () => {

  return (
    <Section >
        <LogoContainer>
            <Link href="/"><LogoText>VALLONIE</LogoText></Link>
        </LogoContainer>
    <Container>
        <FtCol>
            <BigText>GOT MORE QUESTIONS?</BigText>
            <Link href ="/FAQ"><Button> ANSWERS HERE</Button></Link>
        </FtCol>
        <FtCol>
            <BigText>FIND US ON</BigText>
            <IconList>
                <IconContext.Provider value={{color: 'black', size: 35}}>
                 <SocialButton> 
                    <SiTwitter />
                </SocialButton> 
                <SocialButton>
                    <SiFacebook />
                </SocialButton> 
                <SocialButton>
                    <SiInstagram />
                </SocialButton> 
                </IconContext.Provider>
            </IconList>
        </FtCol> 
        <FtCol>
            <BigText>COMMUNICATE WITH US!</BigText>
            <Button> CONTACT US </Button> 
        </FtCol>
    </Container>
    <Bottom>
            <span>
                Be Bold. Be You. Be Fabulous 
            </span>
            <span>
                &copy; {new Date().getFullYear()} Vallonie Group Co. All rights reserved.
            </span>
        </Bottom>
</Section>
  )
}

const Section = styled.section`
    width: 100%;
    background-color: black;
    color: white;
    position: relative;
    display: flex;  
    flex-direction: column; 

// @media (max-width: 1024px){
//     max-height: 30vh;
// }

`
const Container = styled.div`
width: 85vw;
margin: 1vw auto;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 0.5vw solid white;

// @media (max-width: 1024px){
//     height: 10vh;
// }

`
const FtCol = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin: 1vw auto;


`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 1vw auto;
margin-left: 1vw;
&>*{
    padding-right: 1.5vw;
    transition: all 0.2s ease;
}


`

const Bottom = styled.div`
width: 87.5%;
margin: 1.5vw auto;
display: flex;
justify-content: space-between;
align-items: center;

span{
    font-size: ${props => props.theme.fontlg};
}
a{
    text-decoration: underline;
}

@media (max-width: 1024px){
    font-size: 1.25vw;
   
}

`
const LogoText = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 1vw;
font-size: 5vw;
font-weight: 800;
transition: all 0.5s ease;

&:hover{
    transform: scale(0.85);
    cursor: pointer;
  }
  
  &::after{
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(0);
    border: 0.5vw double white;
    width: 100%;
    height: 100%;
  }
  &:hover::after{
    transform: translate(-50%,-50%) scale(1);
    padding: 0.5vw;
  }
`
const LogoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const BigText = styled.div`
font-size: 2.5vw;
font-weight: 400;

@media (max-width: 480px){
    display: none;
}
`

const Button = styled.button`
display: inline-block;
background-color: white;
color: black;
outline: none;
border: none;
font-weight: 600;
font-size: 1vw;
margin: 1vw auto;
padding: 1vw 1vw;
cursor: pointer;
position: relative;
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
    border: 0.5vw solid white;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease;
}

&:hover::after{
    transform: translate(-50%,-50%) scale(1);
    padding: 0.5vw;
}

// @media (max-width: 1024px){
//     font-size: 2vw;
//     margin: 3vh auto;
//     padding: 1vh 1vw;
// }

@media (max-width: 480px){
    display: none;
}
`

const SocialButton = styled.button`
display: inline-block;
background-color: white;
color: black;
outline: none;
border: none;
font-weight: 600;
font-size: 1vw;
margin: 0vh 1vw;
padding: 1vw 1vw;
cursor: pointer;
position: relative;
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
    border: 0.5vw solid white;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease;
}

&:hover::after{
    transform: translate(-50%,-50%) scale(1);
    padding: 0.5vw;
}

// @media (max-width: 1024px){
//     font-size: 1vw;
//     margin: 0vh 1vw;
//     padding: 0.5vw 0.5vw;
// }

@media (max-width: 480px){
    font-size: 3vw;
    padding: 3vw 3vw;
    margin: 0vw 6vw;

}
`

export default Footer