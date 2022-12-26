import react from 'react'
import styled, {keyframes} from 'styled-components'
import Image from 'next/image'
import VallonieDAO from "../../Assets/VallonieDAO.png"
import "@fontsource/secular-one"
import Link from 'next/link'

const VallXsection3 = () => {
  return (
    <Section>
        <Title>VALLONIE-X DAO</Title>
        <Container>
          <Box>
            <Pargraph> VALLONIE DECENTRALIZED ANONYMOUS ORGANIZATION</Pargraph>
            <Pargraph> ANYONE, ANYWHERE OF THE VALLONIE COMMUNITY</Pargraph>
            <Pargraph> TOGETHER DECIDING AND PAVING THE FASHION FUTURE</Pargraph>
            <Pargraph> VOTE AND GOVERN YOUR PATH AND THE PATH OF VALLONIE</Pargraph>
            <Link href="/VallonieXDAO"><Button> ENTER NOW </Button></Link>
          </Box>
          <Box>
            <ImageBox>
                <Image src = {VallonieDAO} alt = "VALLONIE DAO" layout='intrinsic'/>
          </ImageBox>
          </Box>
        </Container>
    </Section>  
    )
}

const Section = styled.section`
width: 100vw;
height: 50vw;
background-color: black;
color: white;
position: relative;

@media (max-width:480px){
  height: 135vw;
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
  margin-top: 10vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
}
`
const ImageBox = styled.div`
    width: 28vw;
    height: 45%;
    display: flex;
    // border-radius: 0vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1vw;
    box-shadow:
    -1vw 0 8vw #820000,        
    1vw 0 8vw #820000;  
    &:hover{
      transform: scale(1.05);
      cursor: pointer;
    }

    @media(max-width: 480px){
      margin: 5vw 0;
      border-radius: 5%;
      height: 100%;
      width: 60%;
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
const Pargraph = styled.div`
    font-family: "Secular One", sans-serif;
    font-size:1.5vw;
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
const Button = styled.button`
display: inline-block;
background-color: white;
color: black;
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
    border: 0.5vw solid white;
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

export default VallXsection3