import React from 'react'
import styled from 'styled-components'
import { client } from "../../lib/client";
import BestSellersProduct from './BestSellersProduct';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const NewSection2 = ({products}) => {
  return (
    <Section>
        <MainTitle>BEST SELLERS</MainTitle>
        <ReveiwStars><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></ReveiwStars>
        <Container>
            {products?.map((product) => <BestSellersProduct key = {product.id} product = {product}/>)}
        </Container>
    </Section>
  )
}


const Section = styled.section`
display: flex;
align-items: center;
color: black;
height: 100%;
background-color: white;
flex-direction: column;

&:hover{
    box-shadow:
    inset 0.5vw 0.5vw 2vw #000000,      
    0.5vw 0 5vw #000000;   
  }
`
const MainTitle = styled.section`
font-size: 4vw;
// font-weight: 900;
margin-top: 3vw;
margin-bottom: 0vw;

@media (max-width:480px){
    font-size: 8vw;
}

`
const Container = styled.section`
height: 20vw;
position: relative;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 10vw;

@media (max-width: 480px){
    height: 100%;
    display: block;
    // flex-direction: column;
}
`
const ReveiwStars = styled.div`
margin-bottom: 7vw;
`

export default NewSection2