import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import NicoleSanderson from "../../Assets/NicoleSanderson.png";
import MikeJennings from "../../Assets/MikeJennings.jpg";
import SydneyAdams from "../../Assets/SydneyAdams.png"
import TylerAnderson from "../../Assets/TylerAnderson.png";

const Section3 = () => {
  return (
    <Section>
    <Title>VALLONIE EXPERIENCES</Title>
     <ExteriorGridContainer>

       <ExteriorGridItem>
          <InteriorGridContainer>

            <LeftQuoteContainer>&quot;Vallonie is my favorite brand, especially in perfume. They never fail to impress me with their fragrances—I don&apos;t go a single day without a spritz of Vallonie!&quot;</LeftQuoteContainer>
            <RightImageContainer><Image src={NicoleSanderson} alt = "Nicole Sanderson" layout='intrinsic' style={{borderRadius: 400/ 2}}/></RightImageContainer>
          </InteriorGridContainer>

          <LeftSource>- Nicole Sanderson</LeftSource>
       </ExteriorGridItem>

       <ExteriorGridItem>
          <InteriorGridContainer>
            <LeftImageContainer><Image src={MikeJennings} alt = "Mike Jennings" layout='intrinsic' style={{borderRadius: 400/ 2}}/></LeftImageContainer>
            <RightQuoteContainer>&quot;I am proud to be a member of Vallonie. The Vallonie team always hears my voice, and I love that I am taking part in a new revolution across the fashion industry!&quot;</RightQuoteContainer>
          </InteriorGridContainer>

          <RightSource>- Dr. Mike Jennings, MD</RightSource>  
       </ExteriorGridItem>

       <ExteriorGridItem>
          <InteriorGridContainer>
            <LeftQuoteContainer>&quot;I am in awe at how Vallonie cares about all life, whether it be human or our furry friends! Vallonie truly reflects how a community-backed platform can inspire positive change.&quot;</LeftQuoteContainer>
            <RightImageContainer><Image src={SydneyAdams} alt = "Sydney Adams" layout='intrinsic' style={{borderRadius: 400/ 2}}/></RightImageContainer>
            
          </InteriorGridContainer> 
          <LeftSource>- Sydney Adams</LeftSource>
       </ExteriorGridItem>

       <ExteriorGridItem>
          <InteriorGridContainer>
            <LeftImageContainer><Image src={TylerAnderson} alt = "Tyler Anderson" layout='intrinsic' style={{borderRadius: 400/ 2}}/></LeftImageContainer>
            <RightQuoteContainer>  &quot;I think the value that Vallonie will bring to the fashion industry is absolutely sureal, I am very excited and thrilled to take an early part in this global fashion revolution.&quot;</RightQuoteContainer>
          </InteriorGridContainer> 
          <RightSource>- Tyler Anderson</RightSource>
       </ExteriorGridItem>

     </ExteriorGridContainer>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  height: 120vw;
  display: flex;
  flex-direction: column;
  display: flex;
  // justify-content: center;
  align-items: center;
  // background-color: green;
  background-color: black;
  color: white;
  &:hover{
    box-shadow:
    inset 0.5vw 0.5vw 2vw #fff,      
    0.5vw 0 5vw #fff;   
  }

  @media (max-width: 480px){
    height: 250vw;
  }
`
const Title = styled.div`
  // background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto;
  color: white;
  font-size: 4vw;
  height: 10vw;

  @media (max-width: 480px){
    font-size: 8vw;
  }
`

const ExteriorGridContainer = styled.div`
  // background-color: aquamarine;
  width: 95%;
  height: 90%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  margin-bottom: auto;


`
const ExteriorGridItem = styled.div`
  margin: auto auto;
  width: 95%;
  height: 95%; 
  // background-color: cornsilk;
  &:hover{
    transform: scale(1.1);
    box-shadow:
    0 0 1vw #fff,           
    -0.5vw 0 3vw #fff,        
    0.5vw 0 3vw #fff; 
  }
  
`
const InteriorGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  // grid-column-gap: 0px;
  // grid-row-gap: 0px;
  // background-color: khaki;
  margin: auto auto;
  width: 95%;
  height: 80%;
`
const RightImageContainer = styled.div`
// background-color: lightgreen;
width: 39%;
margin: auto auto;
height: 80%;

@media (max-width:480px){
  width: 83%;
  
}

`
const LeftQuoteContainer = styled.div`
font-size: 2.5vw;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
// background-color: lightblue;
width: 100%;
margin-right: auto;
margin-top: auto;
margin-bottom: auto;
height: 80%;

@media (max-width:480px){
  font-size: 3.5vw;
}
`

const LeftImageContainer = styled.div`
// background-color: lightgreen;
width: 39%;
margin: auto auto;
height: 80%;

@media (max-width:480px){
  width: 83%;
  
}
`

const RightQuoteContainer = styled.div`
font-size: 2.5vw;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
// background-color: yellow;
width: 100%;
// margin-right: auto;
margin-top: auto;
margin-bottom: auto;
height: 80%;

@media (max-width:480px){
  font-size: 3.5vw;
}
`

const LeftSource = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 2vw;
// background-color: deeppink;
height: 10%;
width: 50%;
// margin-left: 2.5%;

@media (max-width: 480px){
  font-size: 3vw;
}
`
const RightSource = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 2vw;
// background-color: deeppink;
height: 10%;
width: 50%;
margin-left: auto;
// margin-right: 2.5%;
// text-align: right;

@media (max-width: 480px){
  font-size: 3vw;
}
`

export default Section3