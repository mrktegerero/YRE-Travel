import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Popular from "./Popular"
import { motion } from 'framer-motion'

const Destination = () => {
const data = useStaticQuery(graphql`
    query DestinationQuery {
        allDestinationJson {
            edges {
              node {
                alt
                name
                amount
                def
                img {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid 
                    }
                  }
                }
              }
            }
        }
    }
`)

function getDestination(data) {
    const destinationArray = []
    data.allDestinationJson.edges.forEach((item, index) => {
        destinationArray.push(
            <ProductCard to="" key={index}
            whileHover={{ x: 15, y:10 , duration: 0.5}}
                variants={fadeUp}
                initial='hidden'
                animate='visible'
                transition={{ duration: 0.5}}
            >
                <CardImg>
                <ProductImg src={item.node.img.childImageSharp.fluid.src}
                fluid={item.node.img.childImageSharp.fluid} />
                </CardImg>
                <CardText>
                    <TextWrap>
                        <ProductTitle>{item.node.name}</ProductTitle>
                        <ProductPrice>{item.node.amount}</ProductPrice>
                        <ProductDef>{item.node.def}</ProductDef>
                    </TextWrap>
                </CardText>
            </ProductCard>
        )
    })
    return destinationArray
}

const fadeUp = {
    hidden: { opacity: 0, y: -100},
    visible: { opacity: 1, y: 0}
  }
    return (
        <ProductsContainer id="area">
               <PopularHeading>Best 3 yearly pupolar destinations</PopularHeading>
               <PopularP>No matter what you achieve, what you want to aspire to be, or how famous and powerful you become, the most important thing is whether you are excited about each and every moment of your life because of your work and people around you.</PopularP>
            
            <ProductsWrapper>{getDestination(data)}</ProductsWrapper>
            <div><Popular/></div>
        </ProductsContainer>
    )
}

export default Destination

//PRODUCT WRAPPER

const ProductsContainer = styled.div`
padding: 5rem calc((95vw - 1300px) /2);
background: linear-gradient(#EEEEEF, #FCFCFC, #FFFFFF);

@media screen and (max-width: 768px) {
    padding: initial;
  }
`
const ProductsWrapper = styled.div` 
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 25px;
margin-top: -10.5rem;
z-index: 10;
position: relative;
justify-items: center;
padding: 0 2rem;


@media screen and (max-width: 1200px){
    grid-template-columns: repeat(2, 1fr);
    margin-top: 0;
}

@media screen and (max-width: 868px){
    grid-template-columns: repeat(1, 1fr);
    margin-top: 4rem;
}

`

const ProductCard = styled(motion.a)`
line-height: 1;
width: 100%;
height: 175px;
display: flex;
background: #fff;
color: black;
position: relative;
box-shadow: 0 2px 6px rgba(65, 11, 16, .05);

&:hover{
    box-shadow: 0 3px 12px rgba(65, 11, 16, .15);
    cursor: pointer;
}
`
const ProductImg = styled(Img)`
height: 100%;
max-width: 100%;
position: absolute;

`
const CardImg = styled.div`
width: 50%;
`

const CardText = styled.div`
width: 50%;
justify-content: center;
margin: 1.5rem 1.5rem;
`

const TextWrap = styled.div`
 position: absolute;
 align-items: left;
 line-height: 1.3;
 font-weight: bold;
`

const ProductTitle = styled.div`
font-size: clamp(1rem, 1vw, 1rem);
letter-spacing: 3px;
text-transform: uppercase;
margin-bottom: .6rem;

`

const ProductPrice = styled.div`
font-size: clamp(.8rem, 1vw, .9rem);
letter-spacing: 1px;
margin-bottom: .7rem;
text-transform: uppercase;
font-weight: 400;
color: #A9A9B3;
font-family: 'Noto Sans', sans-serif;
`

const ProductDef = styled.p`
  font-size: clamp(0.5rem, 1vw, .8rem);
  line-height: 1.5;
  font-weight: 100;
  max-width: 600px;
  color: #7C7B8C;
  font-family: 'Noto Sans', sans-serif;
  
`


//PRODUCT POPULAR

const PopularHeading = styled.h1`
    line-height: initial;
    font-size: clamp(2rem, 6vw, 3.7rem);
    margin-bottom: 1rem;
    max-width: 800px;
    padding: 0 0;
    text-transform: capitalize;
    color: #3F3E55;
    padding: 0 2rem;
    font-family: 'Playfair Display', serif;

@media screen and (min-width: 1200px){
    
    display: none;
}
`
const PopularP = styled.p`
    line-height: 1.3;
    font-size: clamp(1rem, 1vw, 10rem);
    margin-bottom: 2rem;
    font-weight: lighter;
    max-width: 600px;
    color: #777686;
    padding: 0 2rem;
    font-family: 'Noto Sans', sans-serif;


@media screen and (min-width: 1200px){   
    line-height: 1.3;
    font-size: clamp(1rem, 1vw, 10rem);
    margin-bottom: 2rem;
    font-weight: lighter;
    max-width: 600px;
    color: #777686;
    display: none;
}
`