import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { useStateContext } from '../context/StateContext';
// import {Translator, Translate} from 'react-auto-translate';

export const LanguageModal = ({ showModal, setShowModal}) => {

  const {currentLanguage, setCurrentLanguage} = useStateContext();

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
                  <MainTitle> SELECT LANGUAGE </MainTitle>
                  <SelectedLang>SELECTED: {currentLanguage}</SelectedLang>
                  <OptionsMenu>
                    <option>--Select Language--</option>
                    <option>ENGLISH</option>
                  </OptionsMenu>
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
    );
};

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

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  line-height: 1.25;
  color: #141414;
  p {
    margin-bottom: 0rem;
    font-size: ${props => props.theme.fontlg};
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 1vw;
  right: 1vw;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const MainTitle = styled.h1`
font-size: 2.75vw;
margin-top: 1vw;
margin-left: 5vw;
margin-right: 5vw;
`
const SelectedLang = styled.div`
margin-top: 1vw;
margin-bottom: 1vw;
font-size: 2vw;
`
const OptionsMenu = styled.select`
border: 1px solid black;
font-size: 1vw;
font-weight: 550;
padding: 1vw 1vw;
margin-bottom: 1vw;
`

export default LanguageModal