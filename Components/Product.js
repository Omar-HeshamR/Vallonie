import React, {useState} from 'react'
import Link from "next/link"
import { urlFor } from "../lib/client"
import Image from 'next/image'
import styled from 'styled-components'

const Product = ({ product: {image, name, slug, price, discountOn, discount} }) => {

  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <Link href = {`/product/${slug.current}`}>
             <MainContainer>
                    <ImageBox>
                    {/* width = {240} height = {350} */}
                      <img src={urlFor(image && image[0])}/>            
                    </ImageBox>
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
border-style: outset;
border-color: grey dimgrey dimgrey grey;
border-width: 0.5vw;
margin-left: 0vw;
margin-right: 0vw;
margin-top: 1.75vw;
margin-bottom: 2.25vw;
// background-color: red;
height: 29vw;
width: 20vw;
// border: 0.5vw double black;
// border-radius: 1vw;
&:hover{
    border-style: none;
    transform: scale(1.01);
    transition: all 0.1s ease-out;
    cursor: pointer;
}

@media (max-width: 480px){
  // background-color: green;
  height: 105vw;
  width: 69vw;
}
`

const ProductTitle = styled.div`
 font-size: 2vw;
 color: black;
 font-weight: 100;
 justify-content: center;
 display: flex;
 align-items: center;

 @media (max-width: 480px){
   font-size: 8vw;
 }
`
const ImageBox = styled.div`
height: 24vw;
width: 20vw;
margin: auto auto;
justify-content: center;
display: flex;
align-items: center;
background-color: #6290C3;
// OPTIONS ARE: #614E41, #7F6951, #5c5b5b
img{
  max-width: 20vw;
  max-height: 20vw;
  display: block;
}

&:hover{
  border-bottom: 0.5vw solid black;
  img{
    filter: invert(0.05);
  }
}

@media (max-width: 480px){
  // background-color: red;
  height: 83vw;
  width: 69vw;
  img{
    min-width: 69vw;
    min-height: 83vw;
    max-width: 69vw;
    max-height: 83vw;
  }
}
`


const ProductPrice = styled.div`
justify-content: center;
display: flex;
align-items: center;
font-size: 1.25vw;

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

export default Product