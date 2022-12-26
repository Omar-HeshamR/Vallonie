import React, {useState} from 'react'
import styled from 'styled-components'
import "@fontsource/oswald"
import {VscLocation, VscGlobe, VscAccount}  from "react-icons/vsc";
import { AiOutlineShopping } from 'react-icons/ai';   
import {BiCartAlt} from  "react-icons/bi"; // if we wanna make it a cart
import Link from 'next/link';
import LanguageModal from '.././LanguageModal';
import LogInModal from '../LogIn';
import Account from '../Account';
import MenDropDown from './DropDownMenus/MenDropDown';
import WomenDropDown from "./DropDownMenus/WomenDropDown";
import FragDropDown from './DropDownMenus/FragDropDown';
import VallDropDown from './DropDownMenus/VallDropDown';
import AboutDropDown from './DropDownMenus/AboutDropDown';
import Cart from '../Cart';
import { useStateContext } from '../../context/StateContext';


export const Navbar = () => {

  const { showCart, setShowCart, totalQuantities, currentUser, currentLocation, setCurrentLocation, currentLanguage, setCurrentLanguage} = useStateContext();
  
  const showName = () => {
    let indexForName = currentUser.email.indexOf("@");
    return currentUser.email.slice(0, indexForName).toUpperCase();
  }

  // LANGUAGE
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const openLanguageModal = () => {
    setShowLanguageModal(prev => !prev)
  }
  //LOG IN
  const [showLogInModal, setShowLogInModal] = useState(false);
  const openLogInModal = () => {
    setShowLogInModal(prev => !prev)
  }

  // DROPDOWN MENUS
  const [openMenDropDown, setOpenMenDropDown] = useState(false);
  const [openWomenDropDown, setOpenWomenDropDown] = useState(false);
  const [openFragDropDown, setOpenFragDropDown] = useState(false);
  const [openVallxDropDown, setOpenVallXDropDown] = useState(false);
  const [openAboutDropDown, setOpenAboutDropDown] = useState(false);
  const [openAccountMenu, setOpenAccountMenu]= useState(false);
  const openAccountMenuMethod = () => {
    setOpenAccountMenu(prev => !prev)
  }

  return (
    <>
    <BlackLine />
      <Section>
      <MainContainer>

        <MiniContainer>
        {/* <VscLocationStyled  />
        <LocationAndLanguageText> ({currentLocation})</LocationAndLanguageText>  */}
        <VscGlobeStyled />
        <LocationAndLanguageText onClick={openLanguageModal}>LANGUAGE:  {currentLanguage} </LocationAndLanguageText>
        </MiniContainer>

        <MiniContainer>
        {currentUser ? 
        <> <WelcomeDiv>WELCOME, {showName()} !</WelcomeDiv>
        <LogoHover onClick={openAccountMenuMethod}><VscAccount style={IconStyle2}/></LogoHover></> :        
        <LogoHover onClick={openLogInModal}><VscAccount style={IconStyle2}/></LogoHover> }

        <LogoHover onClick={() => setShowCart(true)}><AiOutlineShopping style={IconStyle2}/></LogoHover>
        </MiniContainer>

      </MainContainer>

      <LogoContainer>
      <Link  href= "/" >
      <LogoText>
                VALLONIE
      </LogoText>
      </Link>
      </LogoContainer>

      <MenuContainer>
        <Menu>

        
          <MenuItem><Link href= "/"> HOME</Link></MenuItem> 

          <a onClick = {() => {setOpenWomenDropDown(false), setOpenFragDropDown(false), setOpenVallXDropDown(false),
            setOpenAboutDropDown(false),setOpenMenDropDown(!openMenDropDown)}}> 
          <MenuItem>MEN</MenuItem> </a>
          {openMenDropDown ?  <MenDropDown showModal= {openMenDropDown} setShowModal = {setOpenMenDropDown}  /> : <></> }

          <a onClick = {() => {setOpenMenDropDown(false), setOpenFragDropDown(false), setOpenVallXDropDown(false),
            setOpenAboutDropDown(false), setOpenWomenDropDown(!openWomenDropDown)}} > 
          <MenuItem>WOMEN</MenuItem> </a>
          {openWomenDropDown ?  <WomenDropDown  showModal= {openWomenDropDown} setShowModal = {setOpenWomenDropDown} /> : <></> }

          <a onClick = {() => {setOpenMenDropDown(false), setOpenWomenDropDown(false), setOpenVallXDropDown(false),
            setOpenAboutDropDown(false), setOpenFragDropDown(!openFragDropDown)}} > 
          <MenuItem>FRAGRANCES</MenuItem> </a>
          {openFragDropDown ?  <FragDropDown showModal= {openFragDropDown} setShowModal = {setOpenFragDropDown}/> : <></> }

          <a onClick = {() => {setOpenMenDropDown(false), setOpenWomenDropDown(false), setOpenFragDropDown(false),
            setOpenAboutDropDown(false), setOpenVallXDropDown(!openVallxDropDown)}} > 
          <MenuItem>VALLONIE-X</MenuItem> </a>
          {openVallxDropDown ?  <VallDropDown showModal={openVallxDropDown} setShowModal={setOpenVallXDropDown}/> : <></> }
          
          <a onClick = {() => {setOpenMenDropDown(false), setOpenWomenDropDown(false), setOpenFragDropDown(false),
            setOpenVallXDropDown(false), setOpenAboutDropDown(!openAboutDropDown)}} > 
          <MenuItem>ABOUT US</MenuItem> </a>
          {openAboutDropDown ?  <AboutDropDown showModal= {openAboutDropDown} setShowModal = {setOpenAboutDropDown}/> : <></> }

        </Menu>
      </MenuContainer>
      {totalQuantities > 0 && <NumberOfItems>{totalQuantities}</NumberOfItems>}
      <LanguageModal showModal={showLanguageModal} setShowModal={setShowLanguageModal}/>
      <LogInModal showModal={showLogInModal} setShowModal={setShowLogInModal}/>
      {showCart && < Cart /> }
      {openAccountMenu && <Account openAccountMenu={openAccountMenu} setOpenAccountMenu ={setOpenAccountMenu}/>}
    </Section>
    </>
  )
}

const BlackLine = styled.div`
width: 100%;
height: 0.275vw;
margin: 0vw 0vw;
margin-bottom: 2vw;
background-color: Black;

@media (max-width: 480px){
  height: 0.5vw;
}
`

const Section = styled.section`
width: 100%;
height: 11.5vw;
background-color: ${props => props.theme.body};
@media (max-width: 1024px){
  height: 12.5vw;
  
}
@media (max-width: 480px){
  height: 21vw;
  
}
`
const MainContainer = styled.div`
width:100%;
height:0;
margin-top: 2vw;
display: flex;
justify-content: space-between;
align-items: center;
//  border: 1px solid black;
div{
  margin-right: 0vw;
}


`

const MiniContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-text: center;
// border: 1px solid red;


div{
  margin-left: 1vw;
  margin-right: 1vw;
  cursor: pointer;
}


`
const LocationAndLanguageText = styled.div`
font-size: 1vw;
`

const LogoHover = styled.a`
cursor: pointer;
margin: 0 0.75vw;
&:hover{
  transform: scale(1.1);
}
`

const NumberOfItems = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
right: 0.8vw;
top: 1.2vw;
font-size: 0.8vw;
color: black;
border: 2px solid black;
width: 1vw;
height: 1vw;
border-radius: 50%;
text-align: center;
font-weight: 900;
z-index: 1;
@media (max-width: 1024px){
  right: 0.8vw;
  top: 2vw;
}
@media (max-width: 480px){
  font-size: 1.5vw;
  right: 0.8vw;
  top: 7vw; 
}
`

const LogoText = styled.div`
font-size: 4.5vw;
font-weight: 800;
cursor: pointer;
transition: all 0.5s ease;

&:hover{
  transform: scale(0.85);
}

&::after{
  content: " ";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%) scale(0);
  border: 0.5vw double black;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease;
}
&:hover::after{
  transform: translate(-50%,-50%) scale(1);
  padding: 0.5vw;
}

@media (max-width: 480px){
  margin-top: 0vw;
  font-size: 10vw;
}
`
const SpecialDiv = styled.div`
margin-right: 0.2vw;
margin-left: 0.2vw;
`
const LogoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const MenuContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;


`

const Menu = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`
const MenuItem = styled.li`

font-size: 2vw;
margin: 1vw 3vw;
color: black;
cursor: pointer;

&::after{
    content:" ";
    display: block;
    width: 0%;
    height: 0.2vw;
    background: black;
    // transition: width 0.5s ease;
}
&:hover::after{
    width: 100%;
}

@media (max-width: 480px){
  font-size: 2.5vw;
  font-weight: 800;
}

`
const DropDown = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;


`

const IconStyle2 = { 
  color: "Black", 
  fontSize: "2.2vw",

}

const WelcomeDiv = styled.div`
`

const VscLocationStyled = styled(VscLocation)`

  color: #373737;
  // font-size: 2.2vw;
`
const VscGlobeStyled = styled(VscGlobe)`
  margin-top: 0.2vw;
  color: #373737;
  font-size: 2.2vw;
`
export default Navbar