import { useContext, useEffect, useMemo, useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { useContract, useContractWrite, useContractRead,useAddress} from "@thirdweb-dev/react";
import {Chart as ChartJs, Tooltip, ArcElement, Legend} from 'chart.js';
ChartJs.register(
  Tooltip, ArcElement, Legend
);
import styled from 'styled-components'
import { ethers } from 'ethers'

export default function Proposal({proposal}) {
    const address = useAddress();
    const { TokenContract } = useContract("xxx");
    const {data : TokenContractName} = useContractRead(TokenContract, "name");
    const [statusText, setStatusText] = useState('')
    const [statusColor, setStatusColor] = useState('#fff')
    const [buttonChoice, setButtonChoice] = useState("");

    const data = {
      datasets: [{
          data: [proposal.votes[0].count, proposal.votes[1].count,proposal.votes[2].count],
          backgroundColor:[
            'green',
            'red',
            'yellow',
          ]
      },
    ],
    labels: [
        'FOR',
        'AGANIST',
        'ABSTAIN',
    ], 
  };

  const isExecutable = async id => {
    const canExecute = await canExecute(id);
    return canExecute
  }

  const executeProposal = async id => {

    console.log(TokenContract);
    console.log(address);
    console.log(buttonChoice);

    // const canExecute = await isExecutable(id)
    // if (canExecute) {
    //   const res = await vote.execute(id)
    //   console.log(res)
    // } else {
    //   console.log('Can not execute')
    // }
  }

  const voteFor = async (id, type, reason) => {
    try {
      const delegation = await token.getDelegationOf(address)
      if (delegation === ethers.constants.AddressZero) {
        await token.delegateTo(address)
      }
      let voteType
      if (type === 'Against') {
        voteType = VoteType.Against
      } else if (type === 'For') {
        voteType = VoteType.For
      } else {
        voteType = VoteType.Abstain
      }
      const res = await checkIfVoted(id)
      if (!res) {
        await vote.vote(id, voteType, reason)
      } else {
        console.log('You have already voted for this proposal')
      }
    } catch (error) {
      console.log(error)
    }
  }

    const setStatus = () => {
        switch (proposal.state) {
          case 0:
            setStatusText('Pending')
            setStatusColor('#48494a')
          case 1:
            setStatusText('Active')
            setStatusColor('#21b66f')
            break
          case 3:
            setStatusText('Defeated')
            setStatusColor('#f44336')
            break
          case 7:
            setStatusText('Executed')
            setStatusColor('#0011ff')
            break
          case 4:
            setStatusText('Successful')
            setStatusColor('#21b66f')
            break
          default:
            setStatusText('Unknown')
            setStatusColor('#fff')
        }
      }
      // useMemo(() => {
      //   setStatus()
      // }, [statusText, statusColor, proposal.state])
      
  return (
    <MainDetalis>
      <LeftSide>
      <Title>{proposal.title}</Title>
        <Proposer>Proposer: {proposal.proposer.substring(0,7)}....{proposal.proposer.substr(-7)}</Proposer>
        <Status>Status: Active</Status>
        <ButtonContainer>
            {buttonChoice == "" && 
                    <><ChoiceButton onClick={() => setButtonChoice("VOTE FOR")}>VOTE FOR</ChoiceButton>
                    <ChoiceButton onClick={() => setButtonChoice("VOTE AGANIST")}>VOTE AGANIST</ChoiceButton>
                    <ChoiceButton onClick={() => setButtonChoice("ABSTAIN")}>ABSTAIN</ChoiceButton>
                     </> 
            } 
            {buttonChoice == "VOTE FOR" && <>
                    <Picked>VOTE FOR</Picked>
                    <ChoiceButton onClick={() => setButtonChoice("VOTE AGANIST")}>VOTE AGANIST</ChoiceButton>
                    <ChoiceButton onClick={() => setButtonChoice("ABSTAIN")}>ABSTAIN</ChoiceButton></>}
            {buttonChoice == "VOTE AGANIST" && <>
                    <ChoiceButton onClick={() => setButtonChoice("VOTE FOR")}>VOTE FOR</ChoiceButton>
                    <Picked>VOTE AGANIST</Picked>
                    <ChoiceButton onClick={() => setButtonChoice("ABSTAIN")}>ABSTAIN</ChoiceButton></>}
            {buttonChoice == "ABSTAIN" && <>
                    <ChoiceButton onClick={() => setButtonChoice("VOTE FOR")}>VOTE FOR</ChoiceButton>
                    <ChoiceButton onClick={() => setButtonChoice("VOTE AGANIST")}>VOTE AGANIST</ChoiceButton>
                    <Picked>ABSTAIN</Picked></>}        
              </ButtonContainer>
        <ExcuteButton onClick={() => {executeProposal(proposal.proposalId)}}> EXCUTE MY VOTE</ExcuteButton>
      </LeftSide>
      <ResultsContainer>
          <Doughnut data={data}/>
      </ResultsContainer>
    </MainDetalis>

  )
}

const LeftSide = styled.div`
flex-direction: column;
margin-right: 2vw;
margin-left: 2vw;
`

const MainDetalis = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-text: center;
flex-direction: row;
margin-top: 1vw;
margin-bottom: 1vw;
width: 50%;
height: 100%;
border: 0.2vw solid white;
border-radius: 10px;
&:hover{
  // cursor: pointer;
  // background-color: #212121;
}
`
const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-size: 2.25vw;
margin-top: 0.75vw;
margin-bottom: 0vw;
font-weight: 600;
`
const Proposer = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-text: center;
font-size: 1.25vw;
margin-top: 0.15vw;
margin-bottom: 0.15vw;
color: #d4d4d4;
`
const Status = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-text: center;
font-size: 1.25vw;
color: white;
`

const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
`

const ChoiceButton = styled.button`
justify-content: center;
align-items: center;
align-text: center;
display: flex;
background-color: white;
color: black;
margin-left: 0.5vw;
margin-right: 0.5vw;
margin-top: 1vw;
margin-bottom: 1vw;
height: 3vw;
width: 100%;
outline: none;
border: none;
font-weight: 600;
font-size: 1vw;
padding: 1vw 1vw;
cursor: pointer;
transition: all 0.5s ease;
`
const Picked = styled.button`
justify-content: center;
align-items: center;
align-text: center;
display: flex;
background-color: #d6d6d6;
border: 1px solid red;
color: black;
width: 100%;
margin-left: 0.5vw;
margin-right: 0.5vw;
margin-top: 1vw;
margin-bottom: 1vw;
height: 3vw;
outline: none;
font-weight: 600;
font-size: 1vw;
padding: 1vw 1vw;
cursor: pointer;
transition: all 0.5s ease;
`

const ExcuteButton = styled.button`
justify-content: center;
align-items: center;
align-text: center;
display: flex;
color: white;
letter-spacing: 0.2vw;
background-color: black;
width: 100%;
margin-top: 0.75vw;
margin-bottom: 1vw;
height: 3vw;
outline: none;
border: 0.4vw double red;
font-weight: 600;
font-size: 1vw;
padding: 1vw 3vw;
cursor: pointer;
&:hover{
  background-color: red;
  color: black;
  font-size: 1.15vw;
  font-weight: 900;
}
`

const ResultsContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 34%;
border-left: 0.5vw double white;
padding-left: 2vw;
`


// export default Proposal