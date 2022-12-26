import React from 'react'
import styled from 'styled-components'
import "@fontsource/poppins"

const OurValues = () => {
  return (
    <>
        <Section>
            <Title>OUR VALUES</Title>
            <Container>
                <SubTitle>WE ARE COMMITTED TO DOING MORE; WE ARE COMMITTED TO FUELING INNOVATIVE IDEAS AND 
                    EXCHANGES. AT VALLONIE, WE SOLEMNLY SWEAR BY:</SubTitle>
                <Pargraph>PROVIDING CUSTOMERS WITH ITEMS OF AUTHENTIC AND EXCEPTIONAL QUALITY. AT VALLONIE, WE 
                    MAKE SURE ALL OUR PRODUCTS ARE REMINISCENT OF THE SENSUAL LIFE IN SOUTHERN ITALY. OUR ITALIAN 
                    DESIGNERS DILIGENTLY CRAFT EVERY PIECE, WHETHER IT BE A PIECE OF PHYSICAL APPAREL REPRESENTING 
                    HIGH-VALUE ITALIAN TEXTILES OR A FRAGRANCE UTILIZING THE SWEET, JUICY, CALABRIAN BERGAMOT PAIRED 
                    WITH A ZESTY SICILIAN MANDARIN. </Pargraph>
                <Pargraph>EMPOWERING WOMEN. VALLONIE BELIEVES EVERY SINGLE WOMAN DESERVES TO FEEL POWERFUL AND 
                    BEAUTIFUL NO MATTER WHAT. WE STRIVE TO PROVIDE THIS EXPERIENCE FOR WOMEN THROUGH OUR EXTENSIVE 
                    PERFUME LINE AND READY-TO-WEAR APPAREL TO HELP OUR FEMALE MEMBERS INSPIRE THE BACKBONE OF A 
                    COMMUNITY-BASED FASHION PLATFORM. </Pargraph>
                <Pargraph>HELPING THE ENVIRONMENT. VALLONIE VALUES ALL FORMS OF LIFE, WHETHER HUMAN OR ANIMAL. 
                    VALLONIE DOES NOT TEST ANY OF OUR PRODUCTS ON ANIMALS. ALL OF OUR FEATURED COSMETIC PRODUCTS 
                    ARE TESTED WILLINGLY BY OUR TEAM, ENSURING WE TRY EVERY SINGLE PRODUCT IN A CRUELTY-FREE MANNER. 
                    AT VALLONIE, WE CARE FOR ANIMAL WELFARE AND ARE FOR BEAUTY WITH NO CRUEL TESTING. </Pargraph>
                <Pargraph>LANDSCAPING AN OPEN-MINDED ENVIRONMENT WHERE THE COMMUNITY AROUND VALLONIE CAN IMPACT 
                    OUR OUTPUT. VALLONIE BELIEVES THAT A COMMUNITY-DRIVEN FASHION PLATFORM IS A FUTURE. THEREFORE, 
                    WE ARE DEDICATED TO PROVIDING OPPORTUNITIES AND RESOURCES TO OUR MEMBERS. WE INTENDED TO MAKE 
                    THE VALLONIE EXPERIENCE LAST A LIFETIME, NOT WHEN CUSTOMERS REACH AN EMPTY SPRAY BOTTLE, BY 
                    ALLOWING MEMBERS TO ENGAGE WITH THE LOGISTICS OF VALLONIE. </Pargraph>
        <BottomBorder></BottomBorder>
            </Container>
        </Section>
        <QuoteContainer>
                <CEOQuote>&quot;<em>THE FIRST THING YOU DO WHEN YOU RIDE A CAR, IS CHOOSING THE PATH.</em>&quot;</CEOQuote>
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

const SubTitle = styled.div`
// background-color: blue;
font-family: "Poppins", sans-serif;
color: white;
width: 75%;
font-size: 3vw;
font-weight: 800;
margin: 5vw 0;
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

export default OurValues