import React, { useState, useRef } from 'react';
import styled, {keyframes} from 'styled-components'
import toast from 'react-hot-toast';
import { client, urlFor } from '../../lib/client';
import MovingProduct from '../../Components/MovingProduct';
import {IconContext} from "react-icons";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useStateContext} from '../../context/StateContext';

const ProductDetails = ({ product, mayLikeProducts }) => {

const mayLikeProductsRef = useRef(null);
const { image, name, details, price, discountOn, discount, smallStock, mediumStock, largeStock, isFragrance } = product;
const [index, setIndex] = useState(0);
const {decQty, incQty, qty, onAdd, setShowCart} = useStateContext();
const [sizeType, setSizeType] = useState("Medium");

const sizeCheck = () => {
  if(sizeType == "Medium" && product.mediumStock >= qty){
    return true
  }
  if(sizeType == "Small" && product.smallStock >= qty){
    return true
  }
  if(sizeType == "Large" && product.largeStock >= qty){
    return true
  }
  else{ return false }
}

const isSizeCheck = sizeCheck();

const selectedSize = () => {
  if(sizeType == "Medium"){
    if(mediumStock > 50){
      return (<>CURRENTLY IN STOCK</>)
    } 
    if(mediumStock > 0){
      return (<>{mediumStock} PIECES LEFT, HURRY UP!</>)
    } 
    if(mediumStock == 0){
      return (<font color="red">CURRENTLY OUT OF STOCK</font>)
    } 
  }
  if(sizeType == "Small"){
    if(smallStock > 50){
      return (<>CURRENTLY IN STOCK</>)
    } 
    if(smallStock > 0){
      return (<>{smallStock} PIECES LEFT, HURRY UP!</>)
    } 
    if(smallStock == 0){
      return  (<font color="red">CURRENTLY OUT OF STOCK</font>)
    } 
  }
  if(sizeType == "Large"){
    if(largeStock > 50){
      return (<>CURRENTLY IN STOCK</>)
    } 
    if(largeStock > 0){
      return (<>{largeStock} PIECES LEFT, HURRY UP!</>)
    } 
    if(largeStock == 0){
      return  (<font color="red">CURRENTLY OUT OF STOCK</font>)
    } 
  }
}

const HighlightSelected = (Given) => {
  if(sizeType == "Medium" && Given == "Medium"){
    return "True"
  }
  if(sizeType == "Small"&& Given == "Small"){
    return "True"
  }
  if(sizeType == "Large"&& Given == "Large"){
    return "True"
  }
  else{ return "False"}
}

const BuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);  
}

  return (
    <Section>
        <Container>
          <LeftBox>
            <LeftImages>
              <Images>
                  {image?.map((item, i) => (
                  <img 
                  key={i}
                  src={urlFor(item)}
                  className={i === index ? 'small-image selected-image' : 'small-image'}
                  onMouseEnter={() => setIndex(i)}
                />
              ))}</Images>
            </LeftImages>
            <ImageBox><img src={urlFor(image && image[index])} 
                    width = {250}
                    height = {350}
                    />
                </ImageBox>
            </LeftBox>

            <MassContainer>
              <Box>
            <Title>{name}</Title>
                <Details>{details}</Details>
                <SizeContianer>
                  <Size>SIZE: </Size>
                    {isFragrance ? <>
                    <ButtonGroup>
                    <SmallButton onClick={() => setSizeType("Small")} Selected = {HighlightSelected("Small")} isFragrance = {isFragrance}>50mL</SmallButton>
                    <MediumButton onClick={() => setSizeType("Medium")} Selected = {HighlightSelected("Medium")} isFragrance = {isFragrance}>100mL</MediumButton>
                    <LargeButton onClick={() => setSizeType("Large")} Selected = {HighlightSelected("Large")} isFragrance = {isFragrance}>200mL</LargeButton>
                    </ButtonGroup>  
                    </>: 
                    <>
                    <ButtonGroup>
                    <SmallButton onClick={() => setSizeType("Small")} Selected = {HighlightSelected("Small")} isFragrance = {isFragrance}>S</SmallButton>
                    <MediumButton onClick={() => setSizeType("Medium")} Selected = {HighlightSelected("Medium")} isFragrance = {isFragrance}>M</MediumButton>
                    <LargeButton onClick={() => setSizeType("Large")} Selected = {HighlightSelected("Large")} isFragrance = {isFragrance}>L</LargeButton>
                    </ButtonGroup>  
                    </>}
                  <SelectedSize>{selectedSize()}</SelectedSize>
                </SizeContianer>
                {isSizeCheck ? <>
                  <QuantityContainer >
                <Quan>Quantity: </Quan>
                    <ButtonDEC onClick={decQty}>-</ButtonDEC>
                    <Input value={qty}/>
                    <ButtonINC onClick={incQty}> +</ButtonINC>
                    {discountOn ? 
                    <>
                          <Price>Price:  <strike > $ {price}</strike></Price>
                          <NewPrice>$ {discount}</NewPrice>
                    </>
                : <Price>Price: $ {price}</Price>
                }          
                </QuantityContainer>
                <Buttons>
                <CartButton onClick={() => onAdd(product, qty, sizeType)}>ADD TO CART</CartButton>
                <BuyButton onClick={BuyNow}>BUY NOW</BuyButton>
                </Buttons></>: 
                <><HurryUpText>HURRY UP NEXT TIME. WE SELL FAST!</HurryUpText></>}
            </Box>
            </MassContainer>
        </Container>
        <IntrestedIn>YOU MAY ALSO LIKE</IntrestedIn>
        <OtherProductsContainer ref={mayLikeProductsRef}>
          {mayLikeProducts.map((item)=> (
            <MovingProduct key={item._id} product={item} passRef={mayLikeProductsRef}/>
          ))}
        </OtherProductsContainer>
    </Section>
  )
}

export const getStaticPaths = async () => { // add on finish
    const query = `*[_type in ["maleTopsProduct","maleBottomsProduct","maleJacketsProduct","femaleTopsProduct", "bestSellersProduct","allWomenFragProduct","allMenFragProduct","unisexFragProduct"]] 
    {
      slug {
        current
      }
    }
    `;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
      params: { 
        slug: product.slug.current
      }
    }));

    return {
      paths,
      fallback: 'blocking'
    }
  }

export const getStaticProps = async ({params: {slug}}) => { // add on finish
    const query = `*[_type in ["maleTopsProduct","maleBottomsProduct","maleJacketsProduct","femaleTopsProduct","femaleBottomsProduct","femaleJacketsProduct","bestSellersProduct","allWomenFragProduct","allMenFragProduct","unisexFragProduct"] && slug.current == '${slug}'][0]`

    // const productsQuery = '*[_type in ["product","maleTopsProduct","maleBottomsProduct","maleJacketsProduct","femaleTopsProduct","femaleBottomsProduct","femaleJacketsProduct","allWomenFragProduct","allMenFragProduct","unisexFragProduct"]]';
    const productsQuery = '*[_type in ["allWomenFragProduct","allMenFragProduct","unisexFragProduct","maleTopsProduct","bestSellersProduct"]]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    const mayLikeProducts = [];

    for (let i = 0; i < products.length; i++){
      if (products[i].discountOn){
        mayLikeProducts.push(products[i]);
      }
    }

    return {
      props: { mayLikeProducts, product }
    }
  }

  const Section = styled.section`
  width: 100%;
  height: auto;
  background-color: white;
  border-top: 1vw double black;
  border-bottom: 1vw double black;
  color: black;
  position: relative;
  overflow: hidden;

  `
  
  const Container = styled.div`
  width:  100%;
  margin: 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0vw;
  
  @media (max-width:480px){
    display:block;
  }
  `
const Title = styled.div`
  letter-spacing: 0vw;
  width: 100%;
  margin-bottom: auto;
  font-size: 3vw;
  font-weight: 900;
  display: flex;
  align-text: center;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 480px){
    font-size: 8vw;
  }
  `
  const Price = styled.div`
  margin-left: auto; // delete for center

  font-size: 1.6vw;
  font-weight:900;
  
  @media (max-width: 480px){
    font-size: 3.5vw;
  }
  `
  const NewPrice = styled.div`
  margin-left: 1vw;
  margin-right: 0vw;
  
  font-size: 1.6vw;
  color: red;
  font-weight:999;
  
  @media (max-width: 480px){
    font-size: 3.5vw;
  }
  `
  
  const Box = styled.div`
    margin-top: 7vw;
    width: 34.5vw;
    // background-color: cyan;
    height: 36vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  
    @media (max-width: 480px){
      margin-top: 0vw;
      width: 69vw;
      height: auto;
    }
    
  `
  const LeftBox = styled.div`
  display: flex;
  height: 50vw;
  width: 50vw;
  // background-color: green;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  @media (max-width: 480px){
    width: 100%;
    height: 100vw;
  }
  `
  
  const ImageBox = styled.div`
      margin-right: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-style: outset;
      border-color: grey dimgrey dimgrey grey;
      border-width: 0.5vw;
      background-color: #2FBF71;
      &:hover{
        filter: invert(0.05);
        transform: scale(1.01);
      }
  
      img{
        width: 30vw;
        height: 36vw;
      }
  
      @media (max-width: 480px){
        img{
          width: 60vw;
          height: 72vw;
        }
      }
  
  `
  
  const MassContainer = styled.div`
  justify-content: center;
  // align-items: center;
  // text-align: center;
  display: flex;
  // background-color: yellow;
  width: 50vw;
  height: 50vw;
  
  @media (max-width: 480px){
    width: 100%;
    height: auto;
  }
  `
  
  const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `
  
  const LeftImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: darkred;
  margin: auto auto auto auto;
  width: 4.5vw;
  height: auto;
  
  @media (max-width: 480px){
    width: 9vw;
  }
  `
  
  const Images = styled.div`
  display: block;
  .small-image{
    background-color: #2FBF71;
      width: 4.5vw;
      height: 5vw;
      margin-left: 1vw;
      margin-right: 1vw;
      cursor: pointer;
      border-style: outset;
      border-color: grey dimgrey dimgrey grey;
      border-width: 0.3vw;
    }
    .selected-image{
      border-style: outset;
      border-color: grey dimgrey dimgrey grey;
      border-width: 0.5vw;
    }
  
    @media (max-width: 480px){
      .small-image{
        width: 9vw;
        height: 10vw;
      }
    }
  `
  
  const Details = styled.div`
  width: 100%;
  max-height: 20vw;
  overflow: auto;
  font-size: 1.35vw;
  margin-bottom: auto;
  &::-webkit-scrollbar {
    width: 1vw;
  }
  
  &::-webkit-scrollbar-thumb {
    background: black; 
  }
  
  &::-webkit-scrollbar-button:vertical:increment {
    height: 1vw;
    border-bottom: 0.2vw solid black;
    border-left: 0.2vw solid black;
    border-right: 0.2vw solid black; 
  }
  
  &::-webkit-scrollbar-button:vertical:decrement {
    height: 1vw;
    border-top: 0.2vw solid black;
    border-left: 0.2vw solid black;
    border-right: 0.2vw solid black; 
  }
  @media (max-width: 480px){
    overflow: visible;
    max-height: none;
    // background-color: deeppink;
    font-size: 5vw;
  }
  `
  const Quan = styled.div`
  font-size: 1.75vw;
  letter-spacing: 1px;
  font-weight:900;
  margin: 1vw 0.5vw;
  display: flex;
  @media (max-width: 480px){
    font-size: 3.5vw;
  }
  `
  const QuantityContainer = styled.div`
  margin-bottom: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  align-text: center; 
  width: 100%;
  
  @media (max-width: 480px){
    margin: 3vw;
    flex-wrap: wrap;
  }
  `
  const Size = styled.div`
  font-size: 1.75vw;
  letter-spacing: 1px;
  font-weight:900;
  margin: 1vw 0.5vw;
  display: flex;
  @media (max-width: 480px){
    font-size: 3.5vw;
  }
  `

  const SelectedSize = styled.div`
  font-size: 1.75vw;
  font-weight:900;
  margin: 1vw 0.4vw;
  margin-left: auto; // delete for center
  display: flex;
  justify-content: left;
  @media (max-width: 480px){
    font-size: 3.5vw;
  }
  `
  
  const Input = styled.input`
    font-size: 1.1vw;
    font-weight: 500;
    width: 2vw;
    height: 1.6vw;
    margin-left: 0.5vw;
    margin-right: 0.5vw;
    text-align: center;
    border: 0.2vw dashed black;
    padding: 0vw;
    type: number;
  
    @media (max-width:480px){
      border: 0.4vw dashed black;
      width: 4vw;
      height: 3.3vw;
      padding: 0vw;
      font-size: 2vw;
    }
  `
  
  const CartButton = styled.button`
  display: inline-block;
  background-color: black;
  color: white;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 1.25vw;
  margin: 0 0.5vw;
  padding: 1vw 1vw;
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
    font-size: 5vw;
    margin: 1vw 1vw;
    padding: 2vw 2vw;
  }
  
  `
  const BuyButton = styled.button`
  display: inline-block;
  background-color: black;
  color: white;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 1.25vw;
  margin: 0 1vw;
  padding: 1vw 1vw;
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
    font-size: 5vw;
    margin: 1vw 1vw;
    padding: 2vw 2vw;
  }
  `
  
  const ButtonINC = styled.button`
  width: 2vw;
  height: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 3px double black;
  color: black;
  outline: none;
  font-weight: 900;
  font-size: 1vw;
  margin: 0vw 0.25vw;
  padding: 0.45vw 0.45vw;
  cursor: pointer;
  transition: all 0.5s ease;
  
  &:hover{
      background-color: green;
  }
  
  @media (max-width: 480px){
    font-size: 2vw;
    padding: 2vw 2vw;
  }
  `
  const ButtonDEC = styled.button`
  width: 2vw;
  height: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 3px double black;
  color: black;
  outline: none;
  align-text: center;
  font-weight: 900;
  font-size: 1vw;
  margin: 0vw 0.25vw;
  cursor: pointer;
  transition: all 0.5s ease;
  
  &:hover{
      background-color: red;
  }
  
  @media (max-width: 480px){
    font-size: 2vw;
    padding: 2vw 2vw;
  }
  `
  const IntrestedIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-text: center;
  font-size: 3.25vw;
  letter-spacing: 0.1vw;
  margin-top: 1vw;
  
  @media (max-width: 480px){
    font-size: 8vw;
  }
  `
const MoveLeft = keyframes`
  from { transform: translateX(12.5%); }
  to { transform: translateX(-175%); }
  `

const OtherProductsContainer = styled.div`
  display: flex;
  animation: ${MoveLeft} 90s linear infinite;
  justify-content: center;
  align-items: center;
  margin: 0 0;
  transition: 0.1s ease;
`

const SizeContianer = styled.div`
margin-bottom: auto;
display: flex;
justify-content: center;
align-items: center;
align-text: center; 
width: 100%;

@media (max-width: 480px){
  margin: 3vw;
  flex-wrap: wrap;
}
`
const ButtonGroup = styled.div`
display: flex;
text-align: center;
align-items: center;
`
const LargeButton = styled.button`
background-color: white;
color: black;
border: 3px double black;
font-size: ${props => props.isFragrance === true ? '0.75vw' : '1vw'};
font-weight: 900;
margin-left: 0.2vw;
margin-right: 0.2vw;
margin-top: 0.2vw;
width: ${props => props.isFragrance === true ? '3.55vw' : '2vw'};
height: 2vw;
padding: 1vw 1vw;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
&:hover{
  background-color: black;
  color: white;
}
@media (max-width: 480px){
  width: ${props => props.isFragrance === true ? '8.5vw' : '4.5vw'};;
  height: 4.5vw;
  font-size: ${props => props.isFragrance === true ? '1.75vw' : '2vw'};
  margin-left: 0.5vw;
  margin-right: 0.5vw;
}
background-color: ${({Selected}) => 
Selected === 'True' && 'black' || 
Selected === 'False' && 'white' 
};
color: ${({Selected}) => 
Selected === 'True' && 'white' || 
Selected === 'False' && 'black' 
};
`
const SmallButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: white;
font-size: ${props => props.isFragrance === true ? '0.75vw' : '1vw'};
color: black;
border: 3px double black;
font-weight: 900;
margin-top: 0.2vw;
margin-left: 0.2vw;
margin-right: 0.2vw;
padding: 1vw 1vw;
width: ${props => props.isFragrance === true ? '3.55vw' : '2vw'};
height: 2vw;
cursor: pointer;
&:hover{
  background-color: black;
  color: white;
}
@media (max-width: 480px){
  width: ${props => props.isFragrance === true ? '8.5vw' : '4.5vw'};;
  height: 4.5vw;
  font-size: ${props => props.isFragrance === true ? '1.75vw' : '2vw'};
  margin-left: 0.5vw;
  margin-right: 0.5vw;
}
background-color: ${({Selected}) => 
Selected === 'True' && 'black' || 
Selected === 'False' && 'white' 
};
color: ${({Selected}) => 
Selected === 'True' && 'white' || 
Selected === 'False' && 'black' 
};
`

const MediumButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
font-size: ${props => props.isFragrance === true ? '0.75vw' : '1vw'};
background-color: white;
color: black;
border: 3px double black;
font-weight: 900;
display: flex;
justify-content: center;
align-items: center;
margin-top: 0.2vw;
margin-left: 0.2vw;
margin-right: 0.2vw;
padding: 1vw 1vw;
width: ${props => props.isFragrance === true ? '3.55vw' : '2vw'};
height: 2vw;
cursor: pointer;
&:hover{
  background-color: black;
  color: white;
}
@media (max-width: 480px){
  width: ${props => props.isFragrance === true ? '8.5vw' : '4.5vw'};;
  height: 4.5vw;
  font-size: ${props => props.isFragrance === true ? '1.75vw' : '2vw'};
  margin-left: 0.5vw;
  margin-right: 0.5vw;
}
background-color: ${({Selected}) => 
Selected === 'True' && 'black' || 
Selected === 'False' && 'white' 
};
color: ${({Selected}) => 
Selected === 'True' && 'white' || 
Selected === 'False' && 'black' 
};
`
const HurryUpText = styled.div`
font-size: 1.5vw;
color: #d96309;
font-weight: 600;
`

export default ProductDetails