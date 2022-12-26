import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import "@fontsource/special-elite"

const canceled = () => {
  return (
    <Section>
        <Container>
            <Title>
                <Link  href ="./">CANCELED, MISTAKE? ABSOLUTELY!</Link>
            </Title>
        </Container>
    </Section>  )
}

const Section = styled.section`
width: 100%;
height: 25vw;
border-top: 8px double black;
background-color: white;
color: black;

`
const Container = styled.div`
height: 100%;
display: flex;
background-color:  #7B0606;
color: white;
justify-content: center;
align-items: center;
text-align: center;
`

const Title = styled.div`
font-size: 7.5vw;
font-family: "Special Elite", cursive;
&:hover{
    cursor: pointer;
    transform: scale(1.1);
}
`
export default canceled