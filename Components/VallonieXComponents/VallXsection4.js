import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { EffectCards } from "swiper";
import Image from 'next/image'
import NFT1 from"../../Assets/NFT1.png"
import NFT2 from"../../Assets/NFT2.png"
import NFT3 from"../../Assets/NFT3.png"


const VallXsection4 = () => {
  return (
    <Section>
        <Title>VALLONIE-X NFTs</Title>
        <Container>
          <Box>
            <SliderContainer>
            <Swiper
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        pagination={{
            type: "fraction",
        }}
        navigation={true}
        scrollbar={{
            draggable:true
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={NFT1} layout='fill'/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={NFT2} layout='fill'/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={NFT3} layout='fill'/>
        </SwiperSlide>
        </Swiper>
            </SliderContainer>
          </Box>
          <Box>
            <Pargraph> ALL PRODUCTS HAVE NFT REPRESENTATIONS WITH THEM </Pargraph>
            <Pargraph> DISPLAY YOUR DIGITAL COLLECTIBLE ONLINE</Pargraph>
            <Pargraph> SPECIAL EXCLUSIVITY AND DISCOUNTS TO HOLDERS</Pargraph>
            <Pargraph> SPECIAL ON-PRODUCT COMMISSION NFTS</Pargraph>
            <Button> CHECK OUT </Button>
          </Box>
        </Container>
    </Section>
  )
}

const Section = styled.section`
width: 100vw;
height: 50vw;
background-color: white;
color: black;
position: relative;

@media (max-width:480px){
  height: 175vw;
}
`
const Title = styled.div`
padding: 3.5vw;
font-family: "Recursive", sans-serif; 
align-text: center;
display: flex;
justify-content: center;
align-items: center;
font-size:5vw;
letter-spacing: 0.5vw;
font-weight: 800;

&:hover{
  letter-spacing: 0vw;
}
`
const Container = styled.div`
width:  90vw;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 480px){
  margin-top: 10vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
}
`

const Box = styled.div`
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 30vw;

    @media (max-width: 480px){
      width: 100%;
      margin: 0 auto;
    }
`
const SliderContainer = styled.div`
width: 21vw;
height: 27vw;
border-radius: 5vw;
box-shadow:  
-1vw 0 10vw #dbc200,        
1vw 0 10vw #dbc200;  

@media (max-width: 480px){
  width: 63vw;
  height: 81vw;
}

.swiper{
  width: 100%;
  height: 100%;
  

}

.swiper-slide{
  background-color: white;
  border-radius: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  
 
}.swiper-button-next{
  color: black;
  @media (max-width: 1024px){
    width: 0vw;
    transform: scale(0.6);
  }
  @media (max-width: 480px){
    display: none;
  }
}
.swiper-button-prev{
  color: black;
  @media (max-width: 1024px){
    width: 0vw;
    transform: scale(0.6);
  }
  @media (max-width: 480px){
    display: none;
  }
}

.swiper-pagination-fraction{
  @media (max-width: 1024px){
    margin: -1.5vw 0;
    transform: scale(0.6);
  }
  @media (max-width: 480px){
    display: none;
  }
}
}

.swiper-pagination-fraction{
  @media (max-width: 480px){
    display: none;
  }
}


`

const Pargraph = styled.div`
    font-family: "Secular One", sans-serif;
    font-size: 1.6vw;
    margin-top: 1vw;
    margin-bottom: 1vw;
    &:hover{
        transform: scale(1.15);
        cursor: pointer;
        // color: orange;
        padding: 1vw;
        border-left: 0.25vw solid yellow;
        border-right: 0.25vw solid yellow;
        border-bottom: 0.5vw solid darkorange;
    }

    @media (max-width: 480px){
      font-size: 3vw;
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
margin: 1.5vw auto;
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
    padding: 0.3vw;
}

@media (max-width:480px){
  margin-top: 5vw;
  font-size: 6vw;
  padding: 3vw 3vw;
}
`

export default VallXsection4