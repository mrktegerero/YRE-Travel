import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Team1 from '../../assets/images/team1.png'
import Team2 from '../../assets/images/team2.png'
import Team3 from '../../assets/images/team3.png'
import Tower from '../../assets/images/tower.png'
import Backg from '../../assets/images/bg.png'
import { Button2 } from "../Button/Button"
import {FaGreaterThan} from 'react-icons/fa'

import Aos from "aos"
import "aos/dist/aos.css"

const message1 = [
    {
        message: 'Start in 2013, YRE Travel is indonesia indepndent leading travel agencies with various awards.'
    }
]

const message2 = [
    {
        message: 'YRE Travel supplying amazing flight tickets to international destinations worlwide encompassing USA, Canada, Caribbean, Central America, Europe, South Asia, Far East Asia, and all domestiic flights.'
    },
    {
        message: 'We make it possiible with the help of our highly qualified travel agents in London UK, who work tirelessly to aiid all our esteemed customers. Is that great, right? Of course, bro! It was amazing great.'
    }
]

const teamimage = [
    {image: Team1},
    {image: Team2},
    {image: Team3}
]

const Team = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <Overall>
        <TeamContainer id="about">
            <TeamHeading data-aos="fade-right">Sneak peak about who we are</TeamHeading>
            <LineDiv><Line /></LineDiv>
            <MessageContainer>
            <MessageCardLeft data-aos="zoom-out">
            {message1.map((mess, index) => (
                <MessageLeft key={index}>
                    <MessageTextLeft>
                    {mess.message}
                    </MessageTextLeft>
                </MessageLeft>
            ))}
            </MessageCardLeft>
            <MessageCardRight data-aos="zoom-in-left">
            {message2.map((mess, index) => (
                <MessageRight key={index}>
                    <MessageTextRight>
                    {mess.message}
                    </MessageTextRight>
                </MessageRight>
            ))}
            </MessageCardRight>
            </MessageContainer>     
           
        </TeamContainer>
        <Green>
        <GreenContainer>
            <TeamContainer2>
            {teamimage.map((img, index) => (
                <TeamCard data-aos="fade-up" key={index}>
                    <TeamImg src={img.image} />
                </TeamCard>
                ))}
                </TeamContainer2>
                <LineDiv2><Line2 /></LineDiv2>
                <HugeTeam>
                    <TextWrap3><Text>That's the core team, but hey! We are huge team, anyway!</Text></TextWrap3>
                    <TeamButton>
                    <Button2 primary="true" round="true" to="/" > See all team<GreaterThan/></Button2>
                    </TeamButton>
                </HugeTeam>
            </GreenContainer>
            </Green>
            <BottomContainerFinal>
            
                <BackGround src={Backg}></BackGround>
                <BottomContainer></BottomContainer>
                <LeftB data-aos="fade-right">
                    <LeftImage  src={Tower}></LeftImage>
                    </LeftB>
                    <RightB >
                        <HeadB data-aos="fade-up">We are not just ordinary travel agency</HeadB>
                        <BottomLine><Line3></Line3></BottomLine>
                        <PButtom data-aos="fade-up">YRE Travel supplying amazing flight tickets to international destinations worlwide encompassing USA, Canada, Caribbean, Central America, Europe, South Asia, Far East Asia, and all domestiic flights.</PButtom>
                        <BottomB data-aos="fade-up">
                        <Button2 primary="true" round="true" to="/" > Set The Date<GreaterThan/></Button2>
                        </BottomB>
                    </RightB>
                
                </BottomContainerFinal>
                
        </Overall>
        
    )
}

export default Team

const TeamContainer = styled.div`
width: 100%;
background: #fff;
height: 100%;
padding: 5rem calc((95vw - 1300px) /2);

@media screen and (max-width: 868px){
    grid-template-columns: repeat(1, 1fr);
    padding: 1rem calc((95vw - 1300px) /2);
}
`

const TeamHeading = styled.h1`
font-size: clamp(2rem, 6vw, 3.7rem);
margin-bottom: 1.5rem;
max-width: 650px;
padding: 0 0;
padding: 0 2rem;
text-transform: capitalize;
color: #3F3E55;
margin-bottom: 2rem;
font-family: 'Playfair Display', serif;
`

const LineDiv = styled.div`
padding: 0 2rem;
`

const Line = styled.hr`
border: none;
height: 1px;
background: #dddddd;
padding: 0 2rem;
`

const MessageContainer = styled.div`
margin: 3rem 0;
display: grid;
grid-template-columns: 50% 50%;
padding: 0 2rem;
color: #777686;

@media screen and (max-width: 868px){
    grid-template-columns: repeat(1, 1fr);
    margin-top: 4rem;
}
`

const MessageCardLeft = styled.div``
const MessageCardRight = styled.div`
display: grid;
grid-template-columns: 50% 50%;
width: 100%;

@media screen and (max-width: 868px){
    grid-template-columns: repeat(1, 1fr);
}
`

const MessageLeft = styled.div`
`
const MessageRight = styled.div`
width: 100%;
`

const MessageTextLeft = styled.p`
line-height: 1.5;
font-size: clamp(1rem, 6vw, 2rem);
margin-bottom: 1rem;
max-width: 800px;
padding: 0 0;
text-transform: capitalize;
font-family: 'Playfair Display', serif;
`

const MessageTextRight = styled.p`
font-size: clamp(.9rem, 1vw, .5rem);
line-height: 1.7;
left: 0;
right: 0;
width: 90%;
margin-left: 2rem;
margin-right: 2rem;
text-align: justify;
font-family: 'Noto Sans', sans-serif;

@media screen and (max-width: 868px){
    margin-right:initial;
    margin-left: initial;
    margin-bottom: 1rem;
}
`

const Green = styled.div`
background: #006462;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 0 1rem;
position: relative;
margin-top: 10rem;
width: 100%;

  @media screen and (max-width: 868px){
    margin-top: 1rem;
}
  
  `

const GreenContainer = styled.div`
width: 100%;
height: 100%;
padding: 5rem calc((95vw - 1300px) /2);

@media screen and (max-width: 868px){
    padding: 1rem calc((95vw - 1300px) /2);
}
`

const TeamContainer2 = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
z-index: 10;
position: relative;
justify-items: center;
margin-top: -18.5rem;
width: 100%;

@media screen and (max-width: 868px){
    grid-template-columns: repeat(1, 1fr);
    margin-top: 1rem;
}
`
const TeamCard = styled(Link)`
display: flex;
position: relative;
transition: 0.2s ease;
margin-bottom: 2rem;

`
const TeamImg = styled.img`
height:100%;
width: 100%;
max-width: 100%;
&:hover{
    box-shadow: 5px 5px 12px rgba(65, 11, 16, .15);
    cursor: pointer;
    transition: 0.2s ease;
}
`
const Overall = styled.div``
const LineDiv2 = styled.div`
margin-top: 2rem;
padding: 0 1.5rem;
`
const Line2 = styled.hr`
border: none;
height: .5px;
background: #dddddd;
padding: 0 -2rem ;
`
const HugeTeam = styled.div`
padding: 5rem 0 0 1.5rem;
color: #fff;

`
const TextWrap3 = styled.div`
max-width: 500px;
`
const Text = styled.div`
line-height: 1.5;
font-size: clamp(1rem, 6vw, 2rem);
margin-bottom: 1rem;
max-width: 800px;
padding: 0 0;
font-weight: lighter;
font-family: 'Noto Sans', sans-serif;
    
@media screen and (max-width: 868px){
    max-width: initial
}
`

const TeamButton = styled.div`
float: right;
margin-right: 24px;
display: flex;
margin-top: -6rem;
text-transform: capitalize;

  @media screen and (max-width: 868px){
    float: initial;
    margin-top: initial;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
`
const GreaterThan = styled(FaGreaterThan)`
  margin-left: .5rem;
  font-size: 10px;
`
const BottomContainerFinal = styled.div`
height: 100%;
width: 100%;
`

const BottomContainer = styled.div`
background: #006462;
height: 50vh;
width: 100%;
position: absolute;
z-index: -1;

  @media screen and (max-width: 868px){
    height: 30vh;
}
`
const BackGround = styled.img`
right: 0;
float: right;

@media screen and (max-width: 1330px){
    display: none;
}
`

const LeftB = styled.div``
const LeftImage = styled.img`
width: 48%;

@media screen and (max-width: 868px){
    width: 90%;
    font-size: clamp(1rem, 6vw, 2rem);
}
`
const RightB = styled.div`
float: right;
padding: 5rem calc((95vw - 1300px) /2);
margin-top: -29rem;
margin-right: 6rem;
margin-left: 0;

@media screen and (max-width: 1382px){
    margin-right: initial;

}


@media screen and (max-width: 1030px){
    padding: 0 -10rem;
    width: 400px;
}
@media screen and (max-width: 868px){
    float: initial;
    margin-right: initial;
    margin-top: 2rem;
    padding: 0 2rem;
    margin-left: initial;
    width: initial;
}
`
const HeadB = styled.h1`
font-size: clamp(1rem, 6vw, 2rem);
margin-bottom: 1.7rem;
line-height: 1.4;
font-weight: lighter;
max-width: 400px;
color: #777686;
font-family: 'Playfair Display', serif;

@media screen and (max-width: 1521px){
    color: #fff;
}

@media screen and (max-width: 868px){
    max-width: initial;
    color: #777686;
}

`
const PButtom = styled.p`
font-size: clamp(.9rem, 1vw, .6rem);
line-height: 1.7;
left: 0;
right: 0;
width: 90%;
margin-bottom: 2rem;
max-width: 500px;
color: #777686;
font-family: 'Noto Sans', sans-serif;

@media screen and (max-width: 1330px){
    color: #fff;
}

@media screen and (max-width: 868px){
    max-width: initial;
    color: #777686;
}

`
const BottomLine = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
max-width: 80px;
`

const Line3 = styled.hr`
border: none;
height: 2px;
background: #dddddd;
padding: 0 -2rem ;
`

const BottomB = styled.div`
margin-top: 2rem;
display: flex;
`