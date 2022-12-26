import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Confetti from "react-confetti";
import useWindowSize from 'react-use/lib/useWindowSize'
import { useStateContext } from '../context/StateContext';
import "@fontsource/carter-one"

const success = () => {
  const { width, height } = useWindowSize()
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <Section>
        <Confetti 
                  width={1700}
                  height={1100}
                  colors= {["black"]}
                  confettiSource = {{x:0,y:0 ,w:width, h:0}}
          />
        <Container>
            <Title>
                WELCOME TO THE ELITE VALLONIE CLUB!
            </Title>
        </Container>
    </Section>
  )
}

const Section = styled.section`
width: 100%;
height: 25vw;
border-top: 8px double black;
background-color: white;
color: black;

`
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
&:hover{
    cursor: pointer;
    transform: scale(1.1);
}
`

const Title = styled.div`
font-size: 7.5vw;
font-family: "Carter One", cursive;

`

export default success