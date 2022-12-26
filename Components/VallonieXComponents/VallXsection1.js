import React from 'react'
import styled, {keyframes} from 'styled-components'
import Image from 'next/image'
import VallXsection1IMAGE from "../../Assets/VallonieXsection1IMAGE.png"
import "@fontsource/secular-one"

const VallXsection1 = () => {
  return (
    <Section>
        <Title>VALLONIE-X PLATFORM</Title>
        <Container>
          <Box>
            <Pargraph> SPARKING A REVOLUTION IN THE FASHION INDUSTRY</Pargraph>
            <Pargraph> INTEGRATING BLOCKCHAIN TECHNOLOGY AND FASHION</Pargraph>
            <Pargraph> DECENTRALIZED, SECURED, AND GLOBAL COMMUNITY</Pargraph>
            <Pargraph> ALLOWING THE COMMUNITY TO LEAD AND DECIDE</Pargraph>
            <Pargraph> NFTs, CRYPTOCURRENCY, BLOCKCHAIN INTEGRATION</Pargraph>
          </Box>
          <Box>
          <ImageBox>
                <Image src = {VallXsection1IMAGE} alt = "VALLONIE Blockchain" layout='intrinsic'
                   />
          </ImageBox>
         </Box>
        </Container>
    </Section>  )
}

const Section = styled.section`
width: 100vw;
height: 50vw;
border-top: 0.5vw double white;
background-color: black;
color: white;
position: relative;

@media (max-width:480px){
  height: 135vw;
}
`

const heartBeat = keyframes`
  50%
  {
    transform: scale( 1.1 );
  100%
  {
    transform: scale( .75 );
  }
`


const Title = styled.div`
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

width:  90vw;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 480px){
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
}
`

const Box = styled.div`
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
    width: 25vw;
    height: 45%;
    display: flex;
    border-radius: 20vw;
    animation: ${heartBeat} 3s infinite;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow:
    -1vw 0 8vw #820000,        
    1vw 0 8vw #820000;   
    
    @media(max-width: 480px){
      border-radius: 100%;
      height: 100%;
      width: 60%;
    }
`
const Pargraph = styled.div`
    font-family: "Secular One", sans-serif;
    font-size: 1.6vw;
    margin-top: 1vw;
    margin-bottom: 1vw;
    &:hover{
        transform: scale(1.15);
        cursor: pointer;
        //color: red;
        padding: 1vw;
        border-left: 0.25vw solid red;
        border-right: 0.25vw solid red;
        border-bottom: 0.5vw solid darkred;
    }

    @media (max-width: 480px){
      font-size: 3vw;
    }
`


export default VallXsection1