import React from 'react'
import styled from 'styled-components'
import VallRevImg from "../../Assets/VallonieRev.png";
import Image from 'next/image'
import Link from 'next/link';

const Section4 = () => {
  return (
    <Section>
        <Title>JOIN THE VALLONIE REVOLUTION</Title>
        <Container>
            <ImageBox><Image src={VallRevImg} alt ="Vallonie Revolution" layout="intrinsic"
            style={{borderRadius: 400/ 2}} /></ImageBox>
            <Box>
                <SubTitle>VALLONIE-X PLATFORM</SubTitle>
                <SubText>VALLONIE is the first unique next-generation fashion company. Along with exporting 
                    high-quality fashion products, VALLONIE fused futuristic blockchain technology with the 
                    fashion industry. VALLONIE-X is our blockchain-oriented platform that utilizes Cryptocurrency,
                     NFTs, and Blockchain Tech. The VALLONIE-X platform truly allows the community to lead and 
                     decide the path of the VALLONIE Club.
                    </SubText>
                    <Link href = "/VallonieX"><Button>EXPLORE MORE</Button></Link>
            </Box>
        </Container>
    </Section>
  )
}

const Section = styled.section`
width: 100%;
height: 45vw;
display :flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
// background-color: cyan;
color: black;
position: relative;
&:hover{
    box-shadow:
    inset 0.5vw 0.5vw 2vw #000000,
    0.5vw 0 5vw #000000;
  }

@media (max-width: 480px){
    height: 200vw;
}

`

const Container = styled.div`
width:  95%;
margin: auto auto;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
justify-content: center;
align-items: center;
// background-color: cornsilk;

@media(max-width: 480px){
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);

}


`

const Title = styled.div`
margin: auto 0;
letter-spacing: 0.5vw;

font-size: 4vw;
display: flex;
align-text: center;
justify-content: center;
align-items: center;
// background-color: yellow;

@media (max-width: 480px){
    font-size: 5vw;
}
`
const ImageBox = styled.div`
    // background-color: green;
    width: 60%;
    height: 100%;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover{
        transform: rotate(360deg);
        transition: all 1s ease-out;
    }

    @media (max-width: 480px){
        margin-top: auto;
        margin-bottom: 0;
        width: 80vw;
   
    }


`

const Box = styled.div`
    // background-color: lightblue;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 480px){
        height: 90vw;
    }


`

const SubTitle = styled.h2`
    // background-color: red;
    color: black;
    font-size: 3vw;
    text-transform: capitalize;
    width: 80%;
    align-self: flex-start;
    margin: 0 auto;

    @media(max-width:480px){
        margin-top: auto;
        margin-bottom: auto;
        width: 100%;
        font-size: 8vw;
    }
    

`
const SubText = styled.p`
    // background-color: orange;
    color: black;
    font-size: 1.5vw;
    width: 40vw;
    align-self: flex-start;
    margin: 2vw auto;
    font-weight:400;

    @media (max-width: 480px){
        margin: 0 auto;
        width: 80%;
        font-size: 3.5vw;
    }


`
const Button = styled.button`
display: inline-block;
background-color: black;
color: white;
outline: none;
border: none;
font-weight: 600;
font-size: 1.5vw;
margin: auto auto;
padding: 2vw 2vw;
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
    padding: 0.5vw;
}

@media (max-width: 480px){
    font-size: 4vw;
    padding: 3vw 3vw;
}

`

export default Section4
