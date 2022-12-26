import React, {useEffect, useState } from 'react'
import styled from 'styled-components'
import InvertedLogo from "../Assets/InvertedLogo.png";
import Image from 'next/image';
import Proposal from "../Components/DaoComponents/Proposal"
import {FiLogOut} from "react-icons/fi";
import { ConnectWallet , useAddress, useContract, useDisconnect } from "@thirdweb-dev/react";

const VallonieXDAO = () => {

  const address = useAddress();
  const disconnectWallet = useDisconnect();
  const vote = useContract('xx')
  const token = useContract('xx')
  const [proposals, setProposals] = useState(null)
  const [proposalInput, setProposalInput] = useState('')

  const [dummyData] = useState([{
    proposer: "0xxxxxxxx",
    votes: [{ type: 0, label: 'For', count: 30443 },
    { type: 1, label: 'Against', count: 43232 },
    { type: 2, label: 'Abstain', count: 3432 }],
    state: 1,
    title: "Make a beach themed perfume"
  },
  {
    proposer: "0xxxxxxxxxxx",
    votes: [{ type: 0, label: 'For', count: 330443 },
    { type: 1, label: 'Against', count: 43232 },
    { type: 2, label: 'Abstain', count: 3432 }],
    state: 1,
    title: "Allocate 2% of sales to TEX"
  }])

  const getAllProposals = async () => {
    const proposals = await vote.getAll()
    return proposals
  }

  const checkIfVoted = async id => {
    const res = await vote.hasVoted(id, address)
    console.log(res, 'hasVoted')
    return res
  }

  useEffect(() => {
    getAllProposals()
      .then(proposals => {
        if (proposals.length) {
          setProposals(proposals.reverse())
          console.log(proposals)

        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Section>
        <TopFlex>
            <LeftSide>
            <ImageContainer>
                <Image src={InvertedLogo} alt="Vallonie Logo" />
            </ImageContainer>
            <Title>THE  VALLONIE  COUNCIL</Title>
            </LeftSide>
            { address ? <><Connected>{address.substring(0,7)}....{address.substr(-7)}</Connected><FiLogOutStyled onClick={disconnectWallet} /></> : <ConnectWalletComp><ConnectWallet/></ConnectWalletComp>}
        </TopFlex>
        {address ? 
        // <MainContainer>         </MainContainer> 
          <><PlaceHolder>WILL UNLOCK ON TOKEN RELEASE DATE</PlaceHolder></> 
            //  {/* {dummyData &&
            //   dummyData.map(data => {
            //     return (
            //       <Proposal key={Math.random()} proposal={data}  address={address} />
            //     )
            //   })} */}
        : <PlaceHolder>WILL UNLOCK ON TOKEN RELEASE DATE</PlaceHolder>
        }
    </Section>
  )
}

const AddProposal = styled.div`
position: absolute;
top: 27vw;
right: 10vw;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
weight: 3vw;
height: 3vw;
border-radius: 100px;
color: black;
font-weight: 600;
margin-top: 2vw;
font-size: 3vw;
padding: 1vw 3vw;
transition: all 0.5s ease;
cursor: pointer;

&:hover{ 
  transform: scale(1.05);
}

&::after{
  content: " ";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%) scale(0);
  transition: all 0.5s ease;
  border: 0.5vw solid white;
  border-radius: 100px;
  width: 100%;
  height: 100%;
}

&:hover::after{
  transform: translate(-50%,-50%) scale(1);
  padding: 0.5vw;
}
`

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: Black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 10px double white;
  border-bottom: 10px double white;
  `
const TopFlex = styled.div`
    display: flex;
    width: 100%;
    height: 10vw;
    margin-bottom: 1vw;
    justify-content: space-between;
    align-items: center;
    border-bottom: 7.5px solid white;
  `
const Title = styled.div`
    font-size: 4vw;
    margin-right: 2vw;
    // background-color: red;
  `
const ConnectWalletComp = styled.div`
  width: 30vw;
  margin-left: 2vw;
  margin-right: 2vw;
  cursor: pointer;
  display: inline-block;
  border-radius: 10px;
  background-color: white;
  color: black;
  font-weight: 600;
  font-size: 2vw;
  padding: 1.25vw 1.25vw;
  transition: all 0.5s ease;
  `
const FiLogOutStyled = styled(FiLogOut)`
  font-size: 3.5vw;
  margin-right: 2vw;
  font-weight: 900;
  cursor: pointer;
  `

  const Connected = styled.div`
  width: 18vw;
  margin-left: 2vw;
  margin-right: 1vw;
  display: inline-block;
  border-radius: 10px;
  border: 0.5vw double white;
  background-color: black;
  color: white;
  font-weight: 600;
  font-size: 2vw;
  padding: 0.5vw 1vw;
  transition: all 0.5s ease;
  `
// const Current = styled.div`
// width: 15vw;
// font-weight: 600;
// font-size: 2vw;
// // background-color: coral;
// `

const ImageContainer = styled.div`
height: 6vw;
margin-right: 1vw;
margin-left: 1vw;
width: 6vw;
&:hover{
  transform: rotate(360deg);
  transition: all 10s ease-out;
}

@media (max-width: 480px){
  height: 8vw;
  width: 8vw;
}
`
const LeftSide = styled.div`
width: 100%;
flex-direction: row;
display: flex;
`

const PlaceHolder = styled.div`
display: flex; 
height: 20vw;
justify-content: center;
align-items: center;
font-size: 4vw;
color: red;
`

const MainContainer = styled.div`
display: flex; 
flex-direction: column;
width: 100%;
margin-left: 25vw;
height: 100%;
margin-bottom: 2vw;
`

export default VallonieXDAO

