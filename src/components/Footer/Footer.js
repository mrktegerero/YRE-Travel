import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {

    return (
        <ContainerFooter>
        <FooterContainer>
                <FooterLinksWrapperLeft>
                <FooterLinksWrapper2>
                    <FooterDesc>
                        <h1>yre travel <span>.</span></h1>
                        <p>Concert with amazing and wonderful DJ arround the world.</p>
                        <FooterSocial><FaGoogle/><FaTwitter/><FaInstagram/><FaLinkedin/><FaYoutube/></FooterSocial>
                    </FooterDesc>
                </FooterLinksWrapper2>
                </FooterLinksWrapperLeft>
                <FooterLinksWrapperRight>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                    <FooterLinkTitle>Community</FooterLinkTitle>
                        <FooterLink to='/'>For Artist</FooterLink>
                        <FooterLink to='/'>Developers</FooterLink>
                        <FooterLink to='/'>Advertiising</FooterLink>
                        <FooterLink to='/'>Vendor</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                    <FooterLinkTitle>Services</FooterLinkTitle>
                        <FooterLink to='/'>iConcert Music</FooterLink>
                        <FooterLink to='/'>Digital Download</FooterLink>
                        <FooterLink to='/'>Custom Merch</FooterLink>
                        <FooterLink to='/'>eTicketing</FooterLink>
                        <FooterLink to='/'>Khontholz</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Company</FooterLinkTitle>
                        <FooterLink to='/'>About Concert</FooterLink>
                        <FooterLink to='/'>Company News</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>More</FooterLinkTitle>
                        <FooterLink to='/'>Security</FooterLink>
                        <FooterLink to='/'>Accessibility</FooterLink>
                        <FooterLink to='/'>Changelog</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                </FooterLinksWrapperRight>
        </FooterContainer>
        
        </ContainerFooter>
    )
}


export default Footer

const ContainerFooter = styled.div`
padding: 5rem calc((90vw - 1300px) /2);
height: 100%;
background: #fff;
width: 100%;
margin-top: 5rem;

@media screen and (max-width: 768px) {
    margin-top: 0;
  }
`
const FooterContainer = styled.div`

margin: 0 0;
display: grid;
grid-template-columns: 40% 60%;
width: 100%;
padding: 0 2rem;

@media screen and (max-width: 868px){
    grid-template-columns: repeat(1, 1fr);
}
`

const FooterLinksWrapperLeft = styled.div`
justify-content: center;
width: 100%;
padding: 0 3rem;
`
const FooterLinksWrapperRight = styled.div`
display: grid;
grid-template-columns: 50% 50%;
width: 100%;

@media screen and (max-width: 868px){
    grid-template-columns: repeat(2, 1fr);
}
`

const FooterDesc = styled.div`
padding: 0 0 0 1rem;
width: 250px;

h1{ 
    font-size: 25px;
    margin-bottom: 1rem;
    text-transform: uppercase;
  font-family: 'Playfair Display', serif;
   cursor: pointer;
}

span{
    font-size: 50px;
  font-family: 'Playfair Display', serif;
  
}

p{
    line-height: 1.8;
    font-size: 17px;
    color: #777686;
    
font-family: 'Noto Sans', sans-serif;
}

@media screen and (max-width: 868px){
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 2rem;
}

`
const FooterSocial = styled.div`
font-size: 25px;
display: flex;
max-width: 100%;
justify-content: space-between;
margin: 1.6rem 0 2rem 0;

&:hover{
    cursor: pointer;
}

`

const FooterLinksWrapper2 = styled.div``
const FooterLinksWrapper = styled.div`
padding: 0 0 0 1rem;
display: grid;
grid-template-columns: repeat(2,1fr);
line-height: 1.8;

@media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
}

`
const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1rem 2rem;

@media screen and (max-width: 1000px){
    padding: 1rem
}
`
const FooterLinkTitle = styled.h2`
font-size: 16px;
margin-bottom: 23px;
text-transform: uppercase;
font-family: 'Noto Sans', sans-serif;



`
const FooterLink = styled(Link)`
text-decoration:none;
margin-bottom: 0.5rem;
font-size: 16px;
color: #777686;
font-family: 'Noto Sans', sans-serif;


&:hover {
    color: #388684;
    transition: 0.3s ease-out;

}
`