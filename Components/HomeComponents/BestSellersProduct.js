import React from 'react'
import Link from "next/link"
import { urlFor } from "../../lib/client"
import Image from 'next/image'
import styled, {keyframes} from 'styled-components'

const BestSellerProduct = ({ product: {image, name, slug, price, discountOn, discount} }) => {

  return (
    <>
      <Link href = {`/product/${slug.current}`}>
             <MainContainer >
                    <ImageBox><img src={urlFor(image && image[0])} 
                    /></ImageBox>
                <ProductTitle>{name}</ProductTitle>
                {discountOn ? 
                <ProductPrice><strike >$ {price}</strike><Discount>$ {discount}</Discount></ProductPrice>
                : <ProductPrice>$ {price}</ProductPrice>
                }
             </MainContainer>
      </Link>
    </>
  )
}


const MainContainer = styled.div`
margin-left: 1vw;
margin-right: 1vw;
margin-top: 1.75vw;
margin-bottom: 2.25vw;
height: auto;
width: 20vw;
transition: all 0.1s ease-out;
border-style: outset;
border-color: grey dimgrey dimgrey grey;
border-width: 0.5vw;
&:hover{
    transition: all 0.1s ease-out;
    cursor: pointer;
    border-style: none;
    transform: scale(1.01);
}

@media (max-width: 480px){
  width: 75vw;
  margin-bottom: 8vw;
}

`

const ProductTitle = styled.div`
max-width: 20vw;
height: auto;
 font-size: 1.5vw;
 color: black;
 font-weight: 100;
 justify-content: center;
 display: flex;
 align-items: center;
 text-align: center;

@media (max-width: 480px){
  font-size: 8vw;
  min-width: 100%;
}
`
const ImageBox = styled.div`
justify-content: center;
display: flex;
align-items: center;
height: 24vw;
width: 20vw;
margin: auto auto;
background-color: #EE2E31;

img{
  max-width: 20vw;
  max-height: 24vw;
  display: block;
}

&:hover{
  border-bottom: 0.5vw solid black;
  img{
    filter: invert(0.05);
  }
}


@media (max-width: 480px){
  width: 75vw;
  height: 75vw;

  img{
    min-width: 58.33vw;
    min-height: 70vw;
    max-width: 58.33vw;
    max-height: 70vw;
  }
}
`

const ProductPrice = styled.div`
justify-content: center;
display: flex;
align-items: center;
font-size: 1vw;

@media (max-width: 480px){
  font-size: 5vw;
}
`

const Discount = styled.div`
display: flex;
justify-content: space-between;
margin-left: 1vw;
color: red;

`

export default BestSellerProduct

