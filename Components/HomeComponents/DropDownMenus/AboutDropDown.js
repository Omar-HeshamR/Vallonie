import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled, {keyframes} from 'styled-components';
import { MdClose } from 'react-icons/md';
import Link from 'next/link';

const AboutDropDown = ({ showModal, setShowModal}) => {

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 550
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
       {showModal ? (
          <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>

              <Container >
              <Link href = "/AboutUs/OurStory" ><Title onClick={() => setShowModal(prev => !prev)}>Our Story</Title></Link>
              <Link href = "/AboutUs/OurCommitments"><Title onClick={() => setShowModal(prev => !prev)}>Our Commitments</Title></Link>
              <Link href = "/AboutUs/OurValues"><Title onClick={() => setShowModal(prev => !prev)}>Our Values</Title></Link>
              </Container>

              </ModalContent>
              <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal(prev => !prev)}
                />
              </ModalWrapper>
              </animated.div>
          </Background>

       ) : null}
    </>
  )
}



const Background = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:10;

`;

const OpenUp = keyframes`
0% {
  transform: rotateY(-90deg)
}
70% {
  transform: rotateY(20deg)
}
99% {
  transform: rotateY(0deg)
}
`

const ModalWrapper = styled.div`
  width: 45vw;
  height: 22vw;
  animation: ${OpenUp} 1.5s;
  box-shadow: 0 0.25vw 0.8vw rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 10;
  border: 1vw double black;
  border-radius: 1vw;

  @media (max-width: 1024px){
    border-radius: 1vw;
  }
`;

const Container = styled.div`
padding: 1.5vw;
// border: 10px solid red;
`

const ModalContent = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  line-height: 3.5vw;
  color: #141414;
  p {
    margin-bottom: 0vw;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 1vw;
  right: 1vw;
  width: 2vw;
  height: 2vw;
  padding: 0;
  z-index: 10;

  @media (max-width: 1024px){
    width: 4vw;
    height: 4vw;
  }

  @media (max-width: 480px){
    width: 5vw;
    height: 5vw;
  }
`;

const Title = styled.div`
  font-size: 3vw;
  font-weight: 600;
  margin: 1.75vw;
  &:hover{
    background-color: #c9c9c9;
    transform: scale(1.1);
    cursor: pointer;
}
`
const SubTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75vw;
  margin: 0.7vw;
  cursor: pointer;
  &:hover{
    background-color: #c9c9c9;
}
`

export default AboutDropDown
