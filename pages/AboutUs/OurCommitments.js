import React from 'react'
import styled from 'styled-components'
import "@fontsource/poppins"

const OurCommitments = () => {
  return (
    <>
        <Section>

            <Container>
                <Title>OUR COMMITMENTS</Title>

                <SubTitle>WE ARE COMMITTED TO DOING MORE; WE ARE COMMITTED TO FUELING INNOVATIVE IDEAS AND 
                    EXCHANGES. AT VALLONIE, WE ARE COMMITTED TO:</SubTitle>
                <Pargraph>FUELING INNOVATIVE IDEAS THROUGHOUT OUR PLATFORM. WHETHER OUR MEMBERS HAVE A NEW IDEA 
                    FOR A PIECE OF APPAREL OR WANT SOME LOGISTICS OF OUR COMMUNITY-BASED PLATFORM TO CHANGE, WE 
                    WANT TO HEAR IT AND IMPLEMENT IT AS SOON AS POSSIBLE. WE, AS VALLONIE, ARE KEEN ON UPDATING 
                    OURSELVES WITH THE NEWEST AIMS AND OBJECTIVES SO THAT WE CAN FOSTER THE MOST EXCELLENT FASHION 
                    PLATFORM THE WORLD HAS EVER SEEN.  </Pargraph>
                <Pargraph>UNSHACKLING THE STATUS QUO OF PROFIT OVER THE COMMUNITY. VALLONIE IS PROUD TO CALL 
                    ITSELF ONE OF THE FIRST FASHION PLATFORMS THAT ARE COMMUNITY-DRIVEN AND COMMUNITY-ORIENTED. 
                    VALLONIE HOPES TO INCENTIVIZE OTHER BUSINESSES TO TACKLE THE PROBLEMS COMMUNITIES FACE BY 
                    PROVIDING THE WORLD WITH AN EQUITABLE MODEL OF FULL TRANSPARENCY, NO STRINGS ATTACHED. </Pargraph>
                <Pargraph>EXPORTING THE CALABRIAN ESSENCE. ALL APPAREL, BEAUTY, AND COSMETIC PRODUCTS OF VALLONIE 
                    ARE REDOLENT OF THE LUXURIOUS, SENSUAL LIFESTYLE AND CULTURE OF THE MEDITERRANEAN. ALL SCENTS, 
                    TEXTURES, TASTES, EMOTIONS, COMMUNICATIONS, AND IMAGINATIONS CREATED BY OUR COMMUNITY EVOKE THE 
                    TRUE EXCEPTIONALISM OF ITALIAN EXCEPTIONALISM.  </Pargraph>
                <Pargraph>ADVOCATING FOR ANIMAL RIGHTS. VALLONIE HOPES TO INSPIRE OTHER COMPANIES AND COMMUNITIES 
                    TO STOP TESTING PRODUCTS ON ANIMALS, ENSURING THAT ALL PLATFORMS AND ENVIRONMENTS ARE 
                    CRUELTY-FREE BY 2030. BY SHOWING THAT PRODUCTS CAN BE SUCCESSFULLY TESTED BY VOLUNTEERS MAKING 
                    UP OUR INNOVATIVE TEAM, WE HOPE TO PROVIDE AN EXAMPLE THAT WILL SPARK A REVOLUTION FOR THE 
                    BETTER.</Pargraph>
                    <BottomBorder></BottomBorder>
            </Container>
        </Section>
        <QuoteContainer>
                <CEOQuote>&quot;<em>When you change your thoughts, remember to also change your world.</em>&quot;</CEOQuote>
                <CEOSource>- Norman Vincent Peale</CEOSource>
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


export default OurCommitments