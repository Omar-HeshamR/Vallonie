import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Link from 'next/link';
import img1 from "../../Assets/section1slide1.png";
import img2 from "../../Assets/section1slide2.png";
import img3 from "../../Assets/section1slide3.png";
import img4 from "../../Assets/section1slide4.png";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";


const Section1 = () => {
  return (
    <Section>
        <Container>
        <Swiper
        autoplay ={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        // cssMode={true}
        navigation={true}
        pagination={true}
        // mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <ImageWrap><Image src = {img1} alt = "Vallonie World 1"/>
            <MainText>EXPLORE ELITE EXCEPTIONALISM</MainText>
            <Link href = "/fragrances/exclusive-deals"><Button>SHOP NOW</Button></Link>
            </ImageWrap>
        </SwiperSlide>
        <SwiperSlide>
            <ImageWrap><Image src = {img2} alt = "Vallonie World 2"/>
            <MainText>PAVE THE FUTURE</MainText>
            <Link href = "/VallonieX"><Button>JOIN NOW</Button></Link>
            </ImageWrap>    
        </SwiperSlide>
        <SwiperSlide>
            <ImageWrap><Image src = {img3} alt = "Vallonie World 3"/>
            <MainText>UNLOCK A TRUE EXPRIENCE</MainText>
            <Link href = "/fragrances/exclusive-deals"><Button>UNLOCK NOW</Button></Link>
            </ImageWrap>
        </SwiperSlide>
        <SwiperSlide>
            <ImageWrap><Image src = {img4} alt = "Vallonie World 4"/>
            <MainText>EXPORTING EUROPEAN ESSENCE</MainText>
            <Link href = "/fragrances/exclusive-deals"><Button>SHOP NOW</Button></Link>
            </ImageWrap>
        </SwiperSlide>
      </Swiper>
        </Container>
    </Section>
  )
}

const Section = styled.section`
width: 100%;
height: 100%;
background-color: Black;
color: white;
border-top: 1px double black;
// @media (max-width: 1024px){
//     height: 34vh;
// }
// @media (max-width: 480px){
//     height: 20vh;
// }

`

const Container = styled.div`
width: 100%;
height: 43vw;
display:flex;
position: relative;
text-align: center;
justfiy-content: center;
align-items: center;
.swiper{
    border: 0px solid black;
    width: 100%;
    height: 100%;
}
.swiper-pagination-bullet{
      background: white;
      width: 1vw;
      height: 1vw;
      border-radius: 0;
      opacity: 1;
}
.swiper-button-next{
    color: white;
}
.swiper-button-prev{
    color: white;
}

@media (max-width: 1024px){
    // height: 34vh;
.swiper-pagination-bullet{
    display: none;
}
}

// @media (max-width: 480px){
//     height: 20vh;
// }

      
`
const ImageWrap = styled.span`
  margin: auto;
  width: 100%;
  height: 43vw;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

// @media (max-width: 1024px){
//     height: 34vh;
// }

// @media (max-width: 480px){
//     height: 20vh;
// }
`
const MainText = styled.div`
    font-size: 4vw;
    font-weight: 1000;
    letter-spacing: 0.5vw;
    position: absolute;
    top: 18.5vw;
    // marginLeft: width*0.18;
    color: white;

// @media (max-width: 1024px){
//     top: 15vh;
//     letter-spacing: 1vw;
//     font-size: 4vw;
// }

// @media (max-width: 480px){
//     top: 9vh;
//     font-size: 3vw;
// }
`

const Button = styled.button`
position: absolute;
top: 28vw;
// marginLeft: width*0.18;
display: inline-block;
background-color: white;
color: black;
outline: none;
border: none;
font-weight: 600;
font-size: 2vw;
// margin: 0vw;
padding: 1vw 3vw;
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
    border: 0.1vw solid white;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease;
}

&:hover::after{
    transform: translate(-50%,-50%) scale(1);
    padding: 0.3vw;
}


// @media (max-width: 1024px){
//     top: 23vh;
//     font-size: 2vw;
//     margin: 2vw;
//     padding: 3vw 3vh;
// }

// @media (max-width: 480px){
//     top: 13vh;
//     padding: 2vw 2vh;
// }
`

export default Section1