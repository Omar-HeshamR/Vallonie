import React from 'react'
import styled, {keyframes} from 'styled-components'
import Image from 'next/image'
import VallonieToken from "../../Assets/VallonieToken.png"
import "@fontsource/secular-one"

const VallXsection2 = () => {
  return (
    <Section>
        <Title>$VALLONIE TOKEN</Title>
        <Container>
          <Box><ImageBox>
                <Image src = {VallonieToken} alt = "VALLONIE Token" layout='intrinsic'
                  style={{borderRadius: 500}} />
          </ImageBox>
          </Box>
          <Box>
            <Pargraph> $VALLONIE TOKEN IS THE OFFCIAL CRYPTOCURRENCY</Pargraph>
            <Pargraph> GIVES VOTING AND GOVERNANCE POWER TO HOLDER </Pargraph>
            <Pargraph> STAKERS RECEIVE EXCLUSIVE ITEMS AND GIVEAWAYS</Pargraph>
            <Pargraph> +50% OF SUPPLY ORIENTED PURELY FOR COMMUNITY</Pargraph>
            <Button> LEARN MORE </Button>
          </Box>
        </Container>
    </Section>  
    )
}

const Section = styled.section`
width: 100vw;
height: 50vw;
background-color: white;
color: black;
position: relative;

@media (max-width:480px){
    height: 150vw;
}
`
const Title = styled.div`
// background-color: yellow;
padding: 3.5vw;
font-family: "Recursive", sans-serif; 
align-text: center;
display: flex;
justify-content: center;
align-items: center;
font-size:5vw;
letter-spacing: 0.5vw;
font-weight: 800;

&:hover{
    letter-spacing: 0vw;
}
`
const Container = styled.div`
// background-color: green;
width:  90vw;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 480px){
    margin-top: 10vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`
const Rotate = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(359deg); }
`

const Box = styled.div`
    // background-color: purple;
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 30vw;

    @media (max-width: 480px){
        width: 100%;
        margin: 0 auto;
      }
`
const ImageBox = styled.div`
    width: 20vw;
    height: 45%;
    border-radius: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${Rotate} 8s infinite;
    box-shadow:
    inset -28vw 0 8vw #dbc200,        
    inset  28vw 0 8vw #dbc200,       
    -1vw 0 10vw #dbc200,        
    1vw 0 10vw #dbc200;    

    @media(max-width: 480px){
        margin: 5vw 5vw;
        border-radius: 20%;
        height: 100%;
        width: 60%;
      }
`
const Pargraph = styled.div`
    font-family: "Secular One", sans-serif;
    font-size:1.6vw;
    margin-top: 1vw;
    margin-bottom: 1vw;
    &:hover{
        transform: scale(1.15);
        cursor: pointer;
        // color: orange;
        padding: 1vw;
        border-left: 0.25vw solid yellow;
        border-right: 0.25vw solid yellow;
        border-bottom: 0.5vw solid darkorange;
    }

    @media (max-width: 480px){
        font-size: 3vw;
      }
`
const Button = styled.button`
display: inline-block;
background-color: black;
color: white;
outline: none;
border: none;
font-weight: 600;
font-size: 2vw;
margin: 1.5vw auto;
padding: 1.5vw 1.5vw;
cursor: pointer;
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
    transition: all 0.2s ease;
}

&:hover::after{
    transform: translate(-50%,-50%) scale(1);
    padding: 0.3vw;
}

@media (max-width:480px){
    margin-top: 5vw;
    font-size: 6vw;
    padding: 3vw 3vw;
}
`

export default VallXsection2