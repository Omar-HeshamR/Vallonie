import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Bunny from "../../Assets/Bunny.png";
import Emission from "../../Assets/Emission.png";
import Leaves from "../../Assets/leaves-icon.png";
import Textile from "../../Assets/Textile.png";
import Voice from "../../Assets/man-with-megaphone-icon.png";
import Community from "../../Assets/diversity-icon.png";
import { keyframes } from 'styled-components';

const NewSection1 = () => {
  return (
    <Section>
        <MainTitle>WHY VALLONIE</MainTitle>

    <Container>
        <FirstThird> <ThirdTitle>THE FINEST MATERIALS</ThirdTitle>
            <ThirdGrid>
                <GridItem><ItemText>100% NATURAL EOs</ItemText></GridItem>
                <GridItem><ItemImage><Image src={Leaves} alt= "" layout ='intrinsic' /></ItemImage></GridItem>
                <GridItem><ItemImage><Image src={Textile} alt= "" layout ='intrinsic' /></ItemImage></GridItem>
                <GridItem><ItemText>100% AUTHENTIC</ItemText></GridItem>
            </ThirdGrid>
        </FirstThird>

        <SecondThird> <ThirdTitle>ENVIRONMENT FRIENDLY</ThirdTitle>
            <ThirdGrid>
                <GridItem><ItemImage><Image src={Emission} alt= "" layout ='intrinsic' /></ItemImage></GridItem>
                <GridItem><ItemText>EMISSION FREE</ItemText></GridItem>
                <GridItem><ItemText>CRUELTY-FREE TESTING</ItemText></GridItem>
                <GridItem><ItemImage><Image src={Bunny} alt= "" layout ='intrinsic' /></ItemImage></GridItem>
            </ThirdGrid>
        </SecondThird>

        <ThirdThird> <ThirdTitle>COMMUNITY-DRIVEN</ThirdTitle>
            <ThirdGrid>
                <GridItem><ItemText>WE HEAR YOUR VOICE</ItemText></GridItem>
                <GridItem><ItemImage><Image src={Voice} alt= "" layout ='intrinsic' /></ItemImage></GridItem>
                <GridItem><ItemImage><Image src={Community} alt= "" layout ='intrinsic' /></ItemImage></GridItem>
                <GridItem><ItemText>THE NEW REVOLUTION</ItemText></GridItem>
            </ThirdGrid>
        </ThirdThird>
        
    </Container>

    </Section>
  )
}


const Section = styled.section`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
// background-color: cyan;
background-color: black;
flex-direction: column;

&:hover{
    box-shadow:
    inset 0.5vw 0.5vw 2vw #fff,      
    0.5vw 0 5vw #fff;   
  }

  @media (max-width: 480px){
      height: 100%;
  }

`

const MainTitle = styled.section`
color: white;
font-size: 4vw;
// font-weight: 900;
margin-top: 2vw;
margin-bottom: 4vw;
// background-color: green;

@media (max-width:480px){
    font-size: 8vw;
}

`

const Container = styled.section`

width: 90%;
height: 35vw;
// background-color: white;
position: relative;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 4vw;

@media (max-width: 480px){
    height: 100%;
    display: block;
    // flex-direction: column;
}
`

const FirstThird = styled.section`
background-color: black;
margin-right: auto;
width: 33%;
height: 100%;
// background-color: purple;
display: flex;
justify-content: center;
flex-direction: column;

&:hover{
    transform: scale(1.1);
    box-shadow:
    // inset 1vw 1vw 10vw #fff,      /* inner white */
    // inset 1vw 0 4vw #fff,   /* inner left magenta short */
    // inset -1vw 0 4vw #fff,  /* inner right cyan short */
    // inset 1vw 0 4vw #fff,  /* inner left magenta broad */
    // inset -1vw 0 4vw #fff, /* inner right cyan broad */
    0 0 1vw #fff,            /* outer white */
    -0.5vw 0 3vw #fff,        /* outer left magenta */
    0.5vw 0 3vw #fff;    
  }

  @media (max-width:480px){
      margin: 5vw auto;
      width: 75vw;
      height: 75vw;
  }

`

const SecondThird = styled.section`
border-left: 0.2vw solid white;
border-right: 0.2vw solid white;
background-color: black;
margin: 0 auto;
width: 33%;
height: 100%;
// background-color: orange;
display: flex;
justify-content: center;
flex-direction: column;

&:hover{
    transform: scale(1.1);
    box-shadow:
    0 0 1vw #fff,           
    -0.5vw 0 3vw #fff,        
    0.5vw 0 3vw #fff;  
  }

  @media (max-width:480px){
    border: none;
    margin: 5vw auto;
    width: 75vw;
    height: 75vw;
}
  
`

const ThirdThird = styled.section`
background-color: black;
margin-left: auto;
width: 33%;
height: 100%;
// background-color: red;
display: flex;
justify-content: center;
flex-direction: column;

&:hover{
    transform: scale(1.1);
    box-shadow:
    0 0 1vw #fff,           
    -0.5vw 0 3vw #fff,        
    0.5vw 0 3vw #fff; 
  }

  @media (max-width:480px){
    width: 75vw;
    height: 75vw;
    margin: 5vw auto;
}

`
const ThirdTitle = styled.section`
color: white;
font-size: 2.35vw;
font-weight: 900;
// background-color: blanchedalmond;
// text-align: center;
margin-bottom: auto;
margin-left: auto;
margin-right: auto;

@media(max-width:480px){
    font-size: 5vw;
}
`

const ThirdGrid = styled.section`
width: 100%;
height: 100%;
// background-color: darkcyan;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 2vw;
grid-row-gap: 2vw;
`

const GridItem = styled.section`
font-weight: 900;
// background-color: crimson;
display: flex;
justify-content: center;
align-content: center;
`

const X = keyframes`
0%, 7% {
    transform: rotateZ(10);
  }
  15% {
    transform: rotateX(-25deg);
  }
  20% {
    transform: rotateX(20deg);
  }
  25% {
    transform: rotateX(-20deg);
  }
  30% {
    transform: rotateX(16deg);
  }
  35% {
    transform: rotateX(-14deg);
  }
  40%, 100% {
    transform: rotateX(10);
  }
`

const ItemText = styled.section`
display: inline-block;
width: 60%;
text-align: center;
font-size: 1.6vw;
font-weight: 900;
// background-color: darkblue;
color: white;
margin: auto auto;

&:hover{
    transform: scale(1.1);
  }

@media (max-width: 480px){
    font-size: 4vw;
}
`
const ItemImage = styled.section`
margin: auto auto;
display: flex;
justify-content: center;
align-content: center;
height: 70%;
width: 70%;

&:hover{
    // transform: scale(1.1);
    animation-name: ${X};
    animation-duration: 8s;
    animation-iteration-count: infinite;
    
  }
`

export default NewSection1