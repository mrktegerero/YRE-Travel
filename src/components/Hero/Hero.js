import React from 'react'
import styled from 'styled-components'
import {FaGreaterThan} from 'react-icons/fa'
import { Button } from "../Button/Button"
import Video from '../../assets/videos/travel.mp4'
import { motion } from 'framer-motion'

const Hero = () => {

  const fadeLeft = {
    hidden: { opacity: 0, x: -100},
    visible: { opacity: 1, x: 0}
  }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1
                      variants={fadeLeft}
                      initial='hidden'
                      animate='visible'
                      transition={{ duration: 1}}
                    >Traveling arround the world without any frustration & painless.</HeroH1>
                    <HeroP
                      initial={{ opacity: 0}}
                      animate={{ opacity: 1}}
                      transition={{ duration: 1 }}
                    >Feeling stress when you going to travel? Yeah, sometimes I feel like that too. I know that is bad things, but hey, that things is going always happen to us when we travelling, except for us bro.</HeroP>
                    <HeroBtn >
                    <Button primary="true" round="true" to="/"
                    whileHover={{ x: 15, y: 5 , backgroundColor: 'none', duration: 0.5}}
                    initial={{opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{duration: 0.5}}
                    > Set The Date<GreaterThan/></Button>
                    </HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -100px;
  color: #fff;

  :before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 2;
      background: linear-gradient(
          180deg,
          rgba(0,0,0,0.2) 0%,
          rgba(0,0,0,0.4) 100%
      ),
      linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
  }

  @media screen and (max-width: 768px) {
    margin-top: -80px;
  }

`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300) /2);
  width: 1250px;

  @media screen and (max-width: 768px) {
    margin-top: 5rem;
  }
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  max-height: 100%;
  margin-top: -2rem;
  padding: 0;
  color: #F8F9FA;
  line-height: 1.1;
  font-weight: bold;
  max-width: 1250px;
  @media screen and (max-width: 768px) {
    margin-top: 0rem;
  }
`

const HeroH1 = styled(motion.h1)`
line-height: 1.23;
  font-size: clamp(2rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  max-width: 800px;
  padding: 0 0;
  text-transform: capitalize;
  font-family: 'Playfair Display', serif;
  letter-spacing: 3px;
  

`

const HeroP = styled(motion.p)`
line-height: 1.5;
  font-size: clamp(1rem, 1vw, 9rem);
  margin-bottom: 2rem;
  font-weight: 300;
  max-width: 600px;
  color: #D7D7D7;
  font-family: 'Noto Sans', sans-serif;
`

const HeroBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

`
const GreaterThan = styled(FaGreaterThan)`
  color: #fff;
  margin-left: .5rem;
  font-size: 10px;
`