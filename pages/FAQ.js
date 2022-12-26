import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Accordion from '../Components/AssistingComponents/Accordian'

const FAQ = () => {
  return (
    <Section>
        <Container>
            <Title>
                Frequently asked questions
            </Title>
                <MainBox>
                    <Accordion title="What makes Vallonie different from other luxury fashion brands?">
                    We are one of the only fashion brands that actively care about our community. Whatever it may be, we want to listen to your input. We believe this separates us from the crowd and is the new revolution in the fashion industry. Furthermore, we are also one of the first crypto-based fashion platforms, which we hope to fuse the future of currency and fashion in a single community.
                    </Accordion>
                    <Accordion title="Why invest in Vallonie Token?">
                    Vallonie Token is the only token that allows its owners to contribute and be a part of its DAO (Decentralized Autonomous Community). Not to mention that it gives voting and governance power to holders and that stakers can receive exclusive items and giveaways. Additionally, over 50% of the supply is oriented purely toward the community. To put it all together, Vallonie Token is the currency of a community-based, open-minded integration of fashion and blockchain technology; owning the token gives powers and abilities other cryptocurrencies can't offer.
                    </Accordion>
                    <Accordion title="What Ensures Vallonie's long term success?">
                    We have an unmatched spirit that praises and accepts hard effort while unapologetically shunning defeatism. Vallonie is open to all innovations, ideas, meaningful exchanges, and communications. Vallonie is the instigator of a new revolution in the world of cryptocurrency and fashion.
                    </Accordion>
                    <Accordion title="How does Vallonie add value to the market?">
                    Vallonie provides exquisite pieces of apparel and beauty products that are 100% representative of Italian luxury. Essentially, we are exporting and communicating the exquisite, sensual Mediterranean lifestyle and culture to the rest of the world. Every one of our products has a story to tell, an experience to provide, and a cause to give. On top of that, we ensure that none of our products are tested on animals, so by supporting us, you can help us make cruelty-free testing the new norm. 
                    </Accordion>
                    <Accordion title="What is Vallonie's future vision?">
                    We, as Vallonie, are not afraid to call ourselves dreamers; we could spend years talking about our future visions and aspirations. However, to put it simply, we have three main ambitions we would like to achieve first and foremost before taking on new ideas. Our first goal is to export luxury products to the storefront, ensuring they are of the utmost legitimacy, quality, and authenticity. However, our ambitions don't stop there. Our second goal is to successfully implement a platform that combines blockchain technology and fashion into a decentralized community that allows its users to contribute and actively provide input. Finally, our last primary goal is to inspire a revolution throughout the fashion industry by encouraging community-oriented projects, animal rights, and empowering women. 
                    </Accordion>
                    <Accordion title="What makes Vallonie expensive?">
                    A wise man once said, "You get what you pay for." Likewise, the price of Vallonie products truly reflects this statement. Unfortunately, ensuring that our products are 100% authentic and have a story to share and a message to communicate costs more than it should. It is simply the price for such exquisite exceptionalism presented in our beauty products and apparel. Whether it might be a potent white musk in one of our fragrances or a well-crafted jacket from one of our pieces of clothing, we ensure every article and product is representative of pure Italian luxury.
                    </Accordion>
                  </MainBox>
        </Container>
    </Section>  )
}

const Section = styled.section`
width: 100%;
height: 100%;
border-top: 8px double black;
border-bottom: 8px double black;
background-color: white;
color: black;

`
const Container = styled.div`
height: 100%;
display: flex;
background-color:  white;
color: black;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`

const Title = styled.div`
font-size: 3.75vw;
margin-top: 1vw;
margin-left: 5vw;
margin-right: 5vw;
margin-bottom: 1vw;
`
const MainBox = styled.div`
width: 80%;
height: 90%;
display: grid;
grid-template-columns: repeat(2, 3fr);
gap: 2.5vw;
`
export default FAQ