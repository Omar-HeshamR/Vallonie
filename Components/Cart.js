import React, { useRef } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import styled, { keyframes } from 'styled-components';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';   
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from "../lib/getStripe";
 
const Cart = () => {
    
const cartRef = useRef();
const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

const handleCheckout = async () => {
  const stripe = await getStripe(); 
  
  const response = await fetch('/api/stripe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({cartItems}),
  });

  if(response.statusCode === 500) return;
  
  const data = await response.json();

  toast.loading('Redirecting...');

  stripe.redirectToCheckout({ sessionId: data.id });
}

  return (
    <CartWrapper ref={cartRef}>
        <CartContainer>

            <HeadBack onClick={() => setShowCart(false)}>
                <AiOutlineLeft size={30}/>
                    <YourBag>YOUR BAG</YourBag>
                    <TotalItemNumber>&#91; {totalQuantities} ITEMS &#93;</TotalItemNumber>
            </HeadBack>

        {cartItems.length < 1 && (
          <EmptyCart>
            <AiOutlineShopping size={350} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <ContinueShoppingButton
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </ContinueShoppingButton>
            </Link>
          </EmptyCart>
        )}

        <ProductContainer>
        {cartItems.length >= 1 && cartItems.map((item) => (
            <IndividualProduct key={item._id}>
                <CartProductImage>
                <img src={urlFor(item?.image[0])}   
                />
                </CartProductImage>
                  <ItemDescription>
                    <FlexTop>
                       <h5>{item.name}</h5>
                       {item.discountOn ? <h4>$ {item.discount}</h4>: <h4>$ {item.price}</h4>}
                    </FlexTop>
                    <FlexBot>
                      <ButtonDEC><a  onClick={() => toggleCartItemQuanitity(item._id, 'dec') }>-</a></ButtonDEC>
                      <Input value={item.quantity}/>
                      <ButtonINC><a onClick={() => toggleCartItemQuanitity(item._id, 'inc')}>+</a></ButtonINC>
                      <RemoveItemButton onClick={() => onRemove(item)}>
                        <TiDeleteOutline />
                      </RemoveItemButton>
                    </FlexBot>
                  </ItemDescription>
            </IndividualProduct>
          ))}
        </ProductContainer>

        {cartItems.length >= 1 && (  
          <CartBottomContainer>
            <Total>
              <h2>SubTotal: </h2>
              <h3>$ {totalPrice.toFixed(2)}</h3>
            </Total>
            <PayContainer>
              <PayButton onClick={handleCheckout}>CHECKOUT</PayButton>
            </PayContainer>
          </CartBottomContainer>
        )}

          <Marginer></Marginer>
        </CartContainer>
    </CartWrapper>
  )
}

const OpenUp = keyframes`
 0%{
  transform: translatex(35vw)
}
100%{
  transform: translatex(0vw)
}
`
const Pulse = keyframes`
0% { box-shadow: 0 0 0 0 var(--hover); }
`
const CartWrapper = styled.div`
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;
    transition: all 1s ease-in-out;
`
const CartContainer = styled.div`
    height: 100vh;
    width: 33.5vw;
    background-color: white;
    float: right;
    padding: 40px 10px;
    overflow: auto;
    position: relative;
    animation: ${OpenUp} 1.25s ease;
    @media (max-width: 1024px){
      width: 40vw;
    } 
    @media (max-width: 480px){
      width: 50vw;
    } 
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
`
const HeadBack = styled.button`
display: flex;
align-items: center;
font-size: 2vw;
font-weight: 500;
cursor: pointer;
gap: 0px;
margin-left: 0vw;
border: none;
background-color: transparent;
`
const YourBag = styled.span`
margin-left: 0.5vw;
font-size: 1.25vw;
font-weight: 850;
@media (max-width: 1024px){
  font-size: 1.55vw;
}
@media (max-width: 480px){
  font-size: 2.5vw;
}
`
const TotalItemNumber = styled.span`
margin-left: 1vw;
font-size: 1.25vw;
font-weight: 600;
color: #f02d34;
@media (max-width: 1024px){
  font-size: 1.55vw;
}
@media (max-width: 480px){
  font-size: 2vw;
}
`
const EmptyCart = styled.div`
display: flex;
margin-top: 2vw;
justify-content: center;
flex-direction: column;
align-items: center;
font-size: 1.75rem;
@media (max-width: 1024px){
  font-size: 2.5vw;
}
@media (max-width: 480px){
  font-size: 3.8vw;
}
`
const ContinueShoppingButton = styled.button`
display: inline-block;
background-color: black;
color: white;
outline: none;
border: none;
font-weight: 600;
font-size: 1.25vw;
margin: 4vw auto;
transition: all 0.5s ease;
padding: 2vh 2vw;
cursor: pointer;
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
}

&:hover::after{
    transform: translate(-50%,-50%) scale(1);
    padding: 0.5vw;
}
@media (max-width: 1024px){
  font-size: 2.5vw;
}
@media (max-width: 480px){
  font-size: 3.8vw;
} 
`
const ProductContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 1.25vw;
margin-top: 2.55vw;
width: 100%;
`
const IndividualProduct = styled.div`
display: flex;
align-items: center;
width: 100%;
gap: 1vw;
padding: 1vw;
border: 5px double black;
@media (max-width: 480px){
  height:15vw;
}
`
const CartProductImage = styled.div`
width: 50%;
height: 8vw;
display: flex;
// border: 2px solid red;
justify-content: center;
align-items: center;
img{
  max-width: 100%;
  @media (max-width: 1024px){
    max-width: 65%;
  } 
  @media (max-width: 480px){
    max-width: 75%;
  }
}
`
const ItemDescription = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
font-size: 1.75vw;
width: 28vw;
color: black;
`
const FlexTop = styled.div`
display: flex;
font-size: 1.75vw;
h4{
  margin-left: auto;
  @media (max-width: 480px){
    font-size:2.5vw;
  }
}
h5{
  font-size: 1.75vw;
  @media (max-width: 480px){
    font-size:2.5vw;
  }
}
`
const FlexBot = styled.div`
display: flex;
align-items: center;
width: 100%;
`
const Input = styled.input`
    font-size: 1.1vw;
    font-weight: 600;
    width: 1.75vw;
    height: 1.25vw;
    text-align: center;
    border: 3px solid black;
    padding: 0rem;
    margin: 0.75vw;
    type: number;
    @media (max-width: 480px){
      width: 2.5vw;
      height: 2.5vw;
      font-size: 2vw;
      border: 1px solid black;
    }
`
const ButtonINC = styled.button`

width: 1.5vw;
height: 1.5vw;
display: flex;
justify-content: center;
align-items: center;
align-text: center;
background-color: black;
color: white;
outline: none;
border: none;
font-weight: 900;
font-size: 1vw;
padding: 0.45vh 0.45vw;
cursor: pointer;
transition: all 0.5s ease;

&:hover{
    background-color: green;
}
@media (max-width: 480px){
  padding: 1.5vw 1.5vw;
  font-size: 2vw;
}
`
const ButtonDEC = styled.button`
width: 1.5vw;
height: 1.5vw;
display: flex;
justify-content: center;
align-items: center;
background-color: black;
color: white;
outline: none;
border: none;
align-text: centerl
font-weight: 900;
font-size: 2vw;
cursor: pointer;
transition: all 0.5s ease;

&:hover{
    background-color: red;
}
@media (max-width: 480px){
  padding: 1.5vw 1.5vw;
  font-size: 4vw;
}
`
const RemoveItemButton = styled.button`
font-size: 2vw;
display: flex;
margin-left: 13vw;
color: #f02d34;
cursor: pointer;
background: transparent;
border: none;
`
const Marginer = styled.div`
margin-top: 3.5vw;
`
const CartBottomContainer = styled.div`
displa: flex;
jusitfy-content: center;
align-items: center;
position: relative;
width: auto;
margin-top: 1vw;
`
const Total = styled.div`
display: flex;
border-top: 3px solid black;
justify-content: space-between;
h3{
  font-size: 1.75vw;
  @media (max-width: 480px){
    font-size: 5vw;
  }
}
h2{
  letter-spacing: 1px;
  font-size: 1.75vw;
  @media (max-width: 480px){
    font-size: 5vw;
  }
}
`
const PayContainer = styled.div`
display: flex;
width: 100%;
height: 7vw;
justify-content: center;
align-items: center;
`

const PayButton = styled.button`
display: inline-block;
background-color: black;
color: white;
outline: none;
border: none;
font-weight: 600;
font-size: 1.25vw;
margin: 4vw auto;
transition: all 0.5s ease;
padding: 1vw 1vw;
cursor: pointer;
box-shadow:
  0px 0px 5.7px rgba(	57, 255, 20,.169),
  0px 0px 13.7px rgba(	57, 255, 20, .242),
  0px 0px 25.8px rgba(	57, 255, 20, 0.3),
  0px 0px 46px rgba(	57, 255, 20, 0.358),
  0px 0px 86.1px rgba(57, 255, 20, 0.431),
  0px 0px 206px rgba(	57, 255, 20, 0.6)
;

&:hover{ 
    transform: scale(1.15);
}

&::after{
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(0);
    transition: all 0.5s ease;
    border: 0.5vw solid black;
    border-radius: 10px;
    width: 100%;
    height: 100%;
}

&:hover::after{
    transform: translate(-50%,-50%) scale(1);
    padding: 0.5vw;
}
@media (max-width: 480px){
  margin-top: 30vw;
  padding: 5vw 5vw;
  font-size: 5vw;
}
`
export default Cart