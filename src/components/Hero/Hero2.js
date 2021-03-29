import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Hero2 = () => {

  const fadeLeft = {
    hidden: { opacity: 0, x: -100},
    visible: { opacity: 1, x: 0}
  }
    return (
        <HeroContainer>
            <HeroBg>
           
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1
                      variants={fadeLeft}
                      initial='hidden'
                      animate='visible'
                      transition={{ duration: 1}}
                    >We offer different distantion area!</HeroH1>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero2

const HeroContainer = styled.div`
  background: #006462;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
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

const HeroContent = styled.div`
  z-index: 3;
  height: 100%;
  max-height: 100%;
  padding: 0rem calc((100vw - 1300) /2);
  width: 1250px;
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
  padding: 0 0;
  text-transform: capitalize;
  font-family: 'Playfair Display', serif;
  letter-spacing: 3px;
  margin-top: 5rem;

`