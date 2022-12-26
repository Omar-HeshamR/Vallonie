import React from 'react';
import styled, {keyframes} from 'styled-components';
import Product from "../../Components/Product";
import { client } from "../../lib/client";
import Image from 'next/image';
import InvertedLogo from "../../Assets/InvertedLogo.png";
import Link from 'next/link';

const HoodiesAndJackets = ({femaleJacketsProducts}) => {
  return (
    <>
    <Section>
    <Main>
          <ImageContainer>
          <Image src={InvertedLogo} alt="Vallonie Logo" />
          </ImageContainer>

          <Title>HOODIES AND JACKETS FOR WOMEN</Title>
          <ImageContainer>
          <Image src={InvertedLogo} alt="Vallonie Logo" />
          </ImageContainer>
      </Main>
      
        <Subtext>BROWSE A VARIETY OF HOODIES AND JACKETS FOR WOMEN, CREATED FROM AUTHENTIC AND DELICATE FABRICS AND EMBELLISHED WITH ICONIC PRINTS. DON FINE LUXURY JACKET OR HOODIE A SPRITZ OF COLOGNE.</Subtext>
        <SeparatorBorder></SeparatorBorder>
        <Container>
            {femaleJacketsProducts?.map((femaleJacketsProduct) => <Product key = {femaleJacketsProduct.id} product = {femaleJacketsProduct}/>)}
        </Container>
        <SeparatorBorder></SeparatorBorder>
        <InvitationTitle><Link href= "/VallonieX" >
          WANT TO PAVE THE PATH OF VALLONIE? JOIN VALLONIE-X!</Link></InvitationTitle>
    </Section>

    </>   
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "femaleJacketsProduct"]';
    const femaleJacketsProducts = await client.fetch(query);
  
    return {
      props: { femaleJacketsProducts }
    }
  }

const Section = styled.section`
width: 100vw;
height: 100%;
background-color: white;
// border-top: 0.5vw double black;
color: black;
position: relative;
`
const Title = styled.div`
// padding: 3vw;
align-text: center;
display: flex;
justify-content: center;
align-items: center;

font-size:4vw;
font-weight: 800;
letter-spacing: 0.5vw;
color: white;
background-color: black;



@media (max-width: 480px){
  font-size: 4vw;
  letter-spacing: 0vw;
}
`

const Main = styled.div`
display: block;
background-color: black;
border-top: 5px double white;
width: 100vw;
height: 12vw;
display: flex;
flex-wrap: wrap;
grid-template-columns: 1fr;
align-items: center;
justify-content: center;
gap: 5vw;
`

const Container = styled.div`
display: flex;
flex-wrap: wrap;
grid-template-columns: 1fr;
justify-content: center;
gap: 1vw;
margin-top: 1vw;
margin-left: auto;
margin-right: auto;
width: 100%;
`

const Subtext = styled.div`
display:flex;
justify-content: center;    
align-items: center;
align-text: center;
padding: 3vw;
color: black;
font-size: 0.9vw;
font-weight: 800;
letter-spacing: 0vw;
width: 80vw;
margin-left: auto;
margin-right: auto;

@media (max-width:480px){
  padding: 8vw;
  font-size: 3vw;
}
`
const SeparatorBorder = styled.div`
margin-left: auto;
margin-right: auto;
width: 10vw;
border-bottom: 0.5vw solid black;
padding: 0vw;

@media (max-width: 480px){
  border-bottom: 1vw solid black;
}
`

const InvitationTitle = styled.div`
padding: 3vw;
align-text: center;
display: flex;
justify-content: center;
align-items: center;
font-size: 2.5vw;
font-weight: 600;
letter-spacing: 0vw;
color: black;
&:hover{
  cursor: pointer;
  text-decoration: underline;
}
`

const ImageContainer = styled.div`
background-color: black;
height: 6vw;
width: 6vw;
&:hover{
  transform: rotate(360deg);
  transition: all 10s ease-out;
}

@media (max-width: 480px){
  height: 8vw;
  width: 8vw;
}
`


export default HoodiesAndJackets

// const XAxisAnimation = keyframes`
// 50%
// {
//   margin-left: -50vw;
// 100%
// {
//   margin-left: 150vw;
// }
// `

// const Divider = styled.div`
// align-items: center;
// justify-content: center;
// display: flex;
// background-color: red;
// width: 100vw;
// height: 4vw;
// align-text: center;
// `

// const DividerText = styled.div`
// color: white;
// font-size: 2vw;
// animation: ${XAxisAnimation} 10s infinite;
// `
