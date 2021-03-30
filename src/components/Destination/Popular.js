import React, { useEffect } from 'react'
import styled from 'styled-components'
import Malaysia1 from '../../assets/images/malaysia1.jpg'
import Singapore from '../../assets/images/singapore.jpg'
import Malaysia2 from '../../assets/images/malaysia2.jpg'
import {FaArrowRight} from 'react-icons/fa'
import Aos from "aos"
import "aos/dist/aos.css"
import { motion } from 'framer-motion'


const popular1 = [
    {
        title: "Malaysia",
        preview: Malaysia1,
        amount: "$217/Person",
        button: "See package"
    }
   ]

   const popular2 = [
    {
        title: "Singapore",
        preview: Singapore,
        amount: "$417/Person",
        button: "See package"
    },
    {
        title: "Malaysia",
        preview: Malaysia2,
        amount: "$217/Person",
        button: "See package"
    }

   ]

const Popular = () => {
useEffect(() => {
    Aos.init({duration: 2000});
}, []);
    
    return (
        <PopularDestination>
            <PopularLeft>
                <PopularHeadText>
               <PopularHeading data-aos="fade-right">Best 3 yearly pupolar destinations</PopularHeading>
               <PopularP data-aos="zoom-in" >No matter what you achieve, what you want to aspire to be, or how famous and powerful you become, the most important thing is whether you are excited or not.</PopularP>
               </PopularHeadText>
               {popular1.map((pop, index) => (
                <PopularCardLeft data-aos="fade-right" key={index}>
                    <PopularImgL src={pop.preview} />
                        <PopularInfo>
                            <TextWrap>
                                    <PopularTitle>{pop.title}</PopularTitle>
                                <TextWrap2>
                                    <PopularAmount>{pop.amount}</PopularAmount>
                                    <PopularButton whileHover={{ x: 15, duration: 1.5}} to="/">{pop.button}<Arrow /></PopularButton>
                                </TextWrap2>
                            </TextWrap>
                        </PopularInfo>
                </PopularCardLeft>
               ))}
            </PopularLeft>
            <PopularRight>
            {popular2.map((pop, index) => (
                <PopularCardRight data-aos="zoom-in-left" key={index}>
                    <PopularImgR src={pop.preview} />
                        <PopularInfo>
                            <TextWrap>
                                    <PopularTitle>{pop.title}</PopularTitle>
                                <TextWrap2>
                                    <PopularAmount>{pop.amount}</PopularAmount>
                                    <PopularButton whileHover={{ x: 15, duration: 1.5}} to="/">{pop.button}<Arrow /></PopularButton>
                                </TextWrap2>
                            </TextWrap>
                            </PopularInfo>
                    </PopularCardRight>
                ))}
            </PopularRight>
        </PopularDestination>
    )
}

export default Popular

const PopularDestination = styled.div`
min-height: 100vh;
margin-top: 5rem;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 25px;
position: relative;
justify-items: center;
padding: 0 2rem;


@media screen and (max-width: 1200px){
    grid-template-columns: 1fr;
    margin-top: 2rem;
    min-height: 2vh;
}

@media screen and (max-width: 868px){
    grid-template-columns: 1fr;
    margin-top: 2rem;
    min-height: 2vh;
}
`
const PopularLeft = styled.div`
display: flex;
flex-direction: column;
line-height: 2;
width: 100%;
height:100%;
transition: 0.2s ease;

@media screen and (max-width: 1200px){
    line-height: initial;
    display: initial;
}

@media screen and (max-width: 868px){
    line-height: initial;
    display: initial;
}
`
const PopularRight = styled.div`
display: flex;
flex-direction: column;
line-height: 2;
width: 100%;
height: 100%;
transition: 0.2s ease;

@media screen and (max-width: 1200px){
    display: initial;

}

@media screen and (max-width: 868px){
    display: initial;
}

`
const PopularHeadText = styled.div`
height: 33%;

@media screen and (max-width: 1200px){
    display: none;

}

@media screen and (max-width: 868px){
    display: none;
}

`

const PopularHeading = styled.h1`
line-height: initial;
font-size: clamp(2rem, 6vw, 3.25rem);
margin-bottom: .7rem;
margin-top: 3rem;
max-width: 800px;
padding: 0 0;
text-transform: capitalize;
color: #3F3E55;
max-width: 580px;
font-family: 'Playfair Display', serif;
`
const PopularP = styled.p`
line-height: 1.5;
font-size: clamp(1rem, 1vw, 10rem);
  margin-bottom: 5rem;
  font-weight: lighter;
  max-width: 500px;
  color: #777686;
font-family: 'Noto Sans', sans-serif;
`

const PopularCardLeft = styled.div`
width: 100%;
height: 75%;
position: relative;
margin-bottom: 2rem;
display: flex;
flex-direction: column;
transition: 0.2s ease;
box-shadow: 0 2px 6px rgba(65, 11, 16, .05);

&:hover{
    box-shadow: 0 1px 12px rgba(63, 62, 85);
    transition: 0.5s ease;
}

@media screen and (max-width: 1200px){
    display: none;
}

@media screen and (max-width: 868px){
    display: none;
}

`
const PopularCardRight = styled.div`
width: 100%;
height: 77%;
position: relative;
margin-bottom: 2rem;
transition: 0.2s ease;
box-shadow: 0 2px 6px rgba(65, 11, 16, .05);

&:hover{
    box-shadow: 0 1px 12px rgba(63, 62, 85);
    transition: 0.5s ease;
}


@media screen and (max-width: 1200px){
    display: none;
}

@media screen and (max-width: 868px){
    display: none;
}

`

const PopularImgL = styled.img`
height:100%;
width: 100%;
max-width: 100%;
transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
position: absolute;

`
const PopularImgR = styled.img`
height:100%;
width: 100%;
max-width: 100%;
transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
position: absolute;
filter: brightness(80%);
`
const PopularInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0 2rem;

@media screen and (max-width: 280px) {
    padding: 0 1rem;
}

`
const TextWrap = styled.div`
position: absolute;
bottom: 40px;
color: #fff;
margin-left: 1rem;
`
const TextWrap2 = styled.div`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
height: 100%;
width: 150%;
`

const PopularTitle = styled.h1`
font-size: clamp(2rem, 1vw, 6rem);
letter-spacing: 3px;
font-family: 'Playfair Display', serif;
 
`
const PopularAmount = styled.div`
font-size: clamp(1rem, 1vw, 1rem);
letter-spacing: 2px;
margin-bottom: .7rem;
text-transform: uppercase;
font-weight: 500;
color: #A9A9B3;
margin-right: 90px;
font-family: 'Noto Sans', sans-serif;
font-weight: 600;
`
const PopularButton = styled(motion.a)`
font-size: clamp(1rem, 1vw, 1rem);
text-decoration: none;
color: #fff;
text-transform: uppercase;
cursor: pointer;
font-weight: bold;
letter-spacing: 3px;
float: right;
margin-left: auto; 
margin-right: -80px;
font-family: 'Noto Sans', sans-serif;

`
const Arrow = styled(FaArrowRight)`
  font-size: 1rem;
  cursor: pointer;
  position: absolute;
  margin-left: 10px;
  font-weight: bold;
  margin-top: 6px;

`