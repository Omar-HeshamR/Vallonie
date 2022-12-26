import React from 'react'
import Link from "next/link"
import { urlFor } from "../lib/client"
import Image from 'next/image'
import styled, {keyframes} from 'styled-components'

const MovingProduct = ({ product: {image, name, slug, price, discountOn, discount} , passRef}) => {

  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
    }
  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
    }

  return (
    <>
      <Link href = {`/product/${slug.current}`}>
             <TotalContainer >
             <MainContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
                    <ImageBox><img src={urlFor(image && image[0])} 
                    /></ImageBox>
                <ProductTitle>{name}</ProductTitle>
                {discountOn ? 
                <ProductPrice><strike >$ {price}</strike><Discount>$ {discount}</Discount></ProductPrice>
                : <ProductPrice>$ {price}</ProductPrice>
                }
             </MainContainer>
             </TotalContainer>
      </Link>
    </>
  )
}

const MoveLeft = keyframes`
from { transform: translateX(0); }
to { transform: translateX(-1780%); }
`

const TotalContainer = styled.div`
transition: all 0.5 ease;
`

const MainContainer = styled.div`
// animation: ${MoveLeft} 225s linear infinite;
margin-left: 1vw;
margin-right: 1vw;
margin-top: 1.75vw;
margin-bottom: 2.25vw;
height: auto;
width: 20vw;
transition: all 0.2s ease;
border-style: outset;
border-color: grey dimgrey dimgrey grey;
border-width: 0.5vw;
&:hover{
    transition: all 0.1s ease-out;
    cursor: pointer;
    border-style: none;
    transform: scale(1.01);
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
`
const ImageBox = styled.div`
justify-content: center;
display: flex;
align-items: center;
height: 24vw;
width: 20vw;
margin: auto auto;
background-color: #75704E;

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
`

const ProductPrice = styled.div`
justify-content: center;
display: flex;
align-items: center;
font-size: 1vw;
`

const Discount = styled.div`
display: flex;
justify-content: space-between;
margin-left: 1vw;
color: red;
`

export default MovingProduct


// const changeCOLOR = keyframes`
// 0%   {background-color:red; left:0px; top:0px;}
// 25%  {background-color:yellow; left:200px; top:0px;}
// 100% {background-color:red; left:0px; top:0px;}
// `