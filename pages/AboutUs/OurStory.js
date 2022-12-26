import React from 'react'
import styled from 'styled-components'
import "@fontsource/poppins"

const OurStory = () => {
  return (
    <>

    <Section>
        <Title>OUR STORY</Title>
        <Container>
        <Pargraph>ORIGINALLY FROM THE SHORES OF THE TYRRHENIAN SEA, VALLONIE WAS FOUNDED TO DO ONE THING ABOVE 
            ALL—TO UNVEIL; THE AROMATIC, VISUAL, CULTURAL, AND OLFACTORY LANDSCAPE OF THE CALABRIAN PENINSULA WAS 
            EXCEEDINGLY ENTHRALLING TO NOT COMMUNICATE WITH THE REST OF THE GLOBE. HOWEVER, UNLOCKING A SENSUAL 
            EMOTION WAS NOT OUR ONLY CONCERN—WE WANTED OUR MEMBERS TO BE THE BUILDING BLOCK OF A NEW ERA OF 
            COMMUNITY-BASED FASHION. </Pargraph>
            <Pargraph>VALLONIE BELIEVES THAT THE FUTURE IS A FASHION PLATFORM WHERE THE COMMUNITY HAS A MEANINGFUL 
                ROLE IN THE COMPANY. THEREFORE, BY COMBINING AUTHENTIC ITALIAN LUXURY WITH A COMMUNITY-ORIENTED 
                MINDSET AND VISION, VALLONIE HOPES TO INSPIRE A REVOLUTION IN THE FASHION INDUSTRY. VALLONIE IS 
                NOT JUST AN ONLINE PLATFORM—VALLONIE IS AN EXPERIENCE HOPING TO REKINDLE THE INNER PASSION AND 
                CONTRIBUTION OF A GREAT COMMUNITY TO ENSURE OUR CREATIONS MEET THE TOP STANDARD. </Pargraph>
        <BottomBorder></BottomBorder>
        </Container>
    </Section>
    <QuoteContainer>
            <CEOQuote>&quot;<em>SUCCESS IS NOT ABOUT YOUR OUTCOME; IT IS ABOUT YOUR INTERNAL INTENTION.</em>&quot;</CEOQuote>
            <CEOSource>- TEAM OF VALLONIE GROUP CO.</CEOSource>
        </QuoteContainer>
    </>  
    )
}

const Section = styled.section`
width: 100vw;
height: auto;
background-color: black;
// background-color: green;
border-top: 1vw double white;
display: flex;
align-items: center;
flex-direction: column;
`

const Container = styled.div`
margin: 5vw 0;
width: 100%;
height: 90%;
// background-color: red;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
`

const Title = styled.div`
margin: 5vw 0;
// background-color: yellow;
color: white;
border-bottom: 1vw double white;
align-text: center;
display: flex;
justify-content: center;
align-items: center;
font-size: 8vw;

`
const Pargraph = styled.div`
// background-color: orange;
margin: 1vw 0;
font-family: "Poppins", sans-serif;
color: white;
width: 80vw;
padding: 1vw;
font-size: 1.5vw;
font-weight: 800;
`
const BottomBorder = styled.div`
// background-color: cyan;
border-bottom: 1vw double white;
width: 50%;
margin: 5vw 0;
`
const QuoteContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
width: 100%;
height: 15vw;
background-color: white;
`
const CEOQuote = styled.div`
margin-top: 4vw;
margin-left: 5vw;
display: flex;
width: 100%;
font-size: 3vw;
font-weight: 800;
color: black;
`
const CEOSource = styled.div`
display: block;
margin-top: auto;
margin-left: auto;
margin-right: 5vw;
margin-bottom: 4vw;
font-size: 2vw;
font-weight: 800;
color: black;
`
export default OurStory