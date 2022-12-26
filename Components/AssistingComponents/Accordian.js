import React, {useState} from "react";
import styled from "styled-components";

const Accordion = ({title,children}) => {

    const [collapse, setCollapse] = useState(false);

    return(
        <Container>
            <Title onClick={()=> setCollapse(!collapse)}>
                <Name>
                    <span>{title}</span>
                </Name>
                {
                    collapse ?
                    <Indicator>
                        -
                    </Indicator> : 
                    <Indicator>
                        +
                    </Indicator>
                }
            </Title>
            <Reveal clicked={collapse}>
                {children}
            </Reveal>
        </Container>
    )
}

const Container = styled.div`
cursor: pointer;
padding 1rem 0.5rem;
display: flex;
flex-direction: column;
border-bottom: 1px solid black;
margin: 3vw 0;

@media (max-width: 48em){
    margin: 2rem 0;
}

`

const Title = styled.div`
font-size: 1.25vw;
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
`

const Reveal = styled.div`
display: ${props => props.clicked ?  "block" : "none"};
margin-top: 1rem;
color: $black;
font-size: 1.2vw;
font-weight: 300;
line-height: 1.1rem;
`
const Name = styled.div`
display: flex;
align-items: center;
`
const Indicator = styled.span`
display: flex;
font-size: 1.8vw;
justify-content: center;
align-items: center;
svg{
    width: 1rem;
    height: auto;
    fill: black; 
}
@media (max-width: 48em){
    font-size: 1.2vw;
}
`

export default Accordion