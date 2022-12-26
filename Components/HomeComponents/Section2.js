import React from 'react'
import styled, {keyframes } from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import VallBottleImg from '../../Assets/VallonieBottle1.png'

const Section2 = () => {
  return (
    <Section> 
    <Title>NEW &#38; EXCLUSIVE</Title>
    <Container>
        <ImageBox><Image src = {VallBottleImg} alt = "Vallonie Bottle" layout='intrinsic'
         style={{borderRadius: 400/ 2}}/></ImageBox>
        <Box>
            <SubTitle>ACQUA DI MADRID</SubTitle>
            <SubText>The bold and confident cologne for the modern man. Our cologne is made with a robust blend of citrus, wood, and spice notes and is designed to entice and allure. The top notes are a bright burst of bergamot, lemon, and orange, sweetened with a hint of honey. The heart of the fragrance is a deep masculine mix of cedarwood and clove, balanced out by floral notes of jasmine and geranium. The base finishes with a warm, smoky blend of patchouli and amber, giving the cologne a unique and unforgettable scent. Whether youre at the office, out on the town, or just relaxing at home, this cologne will make sure you always look and feel your best.
                </SubText>
                <Link href = "/product/acqua-di-madrid"><Button>VIEW ITEM</Button></Link>
        </Box>
    </Container>
</Section>
  )
}

const Section = styled.section`
width: 100%;
height: 55vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
// background-color: green;
color: Black;
&:hover{
    box-shadow:
    inset 0.5vw 0.5vw 2vw #000000,
    0.5vw 0 5vw #000000;
  }

@media (max-width: 480px){
    height: 220vw;
}

`
const lightUp = keyframes`
from{}
to{
    transform: scale(1.05);
    transition: all 1s ease-out;
    border: 1vw double black;
      box-shadow:
inset 0 0 3vw #fff,      /* inner white */
inset 1vw 0 5vw #f0f,   /* inner left magenta short */
inset -1vw 0 5vw #0ff,  /* inner right cyan short */
inset 1vw 0 15vw #00279c,  /* inner left magenta broad */
inset -1vw 0 15vw #0ff, /* inner right cyan broad */
0 0 3vw #fff,            /* outer white */
-0.5vw 0 5vw #0093ad,        /* outer left magenta */
0.5vw 0 5vw #0ff;    
}
`

const Container = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
// background-color: cyan;
width:  95%;
height: 35vw;
margin: auto auto;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 480px){
    margin-top: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    height: 190vw;
}
`

const Title = styled.div`
// background-color: yellow;
margin-top: auto;
letter-spacing: 1vw;
font-size: 6vw;

@media (max-width: 480px){
    font-size: 10vw;
}

`
const ImageBox = styled.div`
    // background-color: red;
    width: 25vw;
    height: 30vw;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1vw double black;
    animation: ${lightUp} 7s infinite;
    &:hover{
        transform: scale(1.0001);
        transition: all 1s ease-out;
        border: 1vw double black;
          box-shadow:
    inset 0 0 3vw #fff,      /* inner white */
    inset 1vw 0 5vw #f0f,   /* inner left magenta short */
    inset -1vw 0 5vw #0ff,  /* inner right cyan short */
    inset 1vw 0 15vw #00279c,  /* inner left magenta broad */
    inset -1vw 0 15vw #0ff, /* inner right cyan broad */
    0 0 3vw #fff,            /* outer white */
    -0.5vw 0 5vw #0093ad,        /* outer left magenta */
    0.5vw 0 5vw #0ff;    
    }

@media (max-width: 480px){
    margin-top: 0;
    margin-bottom: 0;
    width: 60vw;
    height: 72vw;
}
`

const Box = styled.div`
    // background-color: pink;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

@media(max-width:480px){
    width: 100%;
}
`
const SubTitle = styled.h2`
    // background-color: lightgreen;
    font-size: 4vw;
    text-transform: capitalize;
    width: 100%;
    align-self: flex-start;
    margin: 0 auto;

    @media (max-width:480px){
        font-size: 10vw;
    }

`
const SubText = styled.p`
    // background-color: deeppink;
    font-size: 1.3vw;
    width: 90%;
    align-self: flex-start;
    margin: 3vw auto;
    font-weight:400;

    @media (max-width:480px){
        font-size: 6vw;
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
margin: 1vw auto;
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
    font-size: 6vw;
    padding: 3vw 3vw;
}


`

export default Section2;