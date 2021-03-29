import styled from 'styled-components'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

export const Button = styled(motion.button)`
    background: ${({primary}) => (primary ? 'linear-gradient(to right, #303C3B , #314041, #4D5859)' : 'transparent')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '20px 32px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    border-radius: ${({ round }) => (round ? '5px' : 'none')};
    opacity: 1;
    backdrop-filter:blur(20px);
    font-family: 'Noto Sans', sans-serif;

    &:hover {
        background: transparent;
    }
`

export const Button2 = styled(Link)`
    background: ${({primary}) => (primary ? 'linear-gradient(to right, #1A7371 , #388684)' : 'transparent')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '20px 32px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: .3s !important;
    border-radius: ${({ round }) => (round ? '5px' : 'none')};
    opacity: 1;
    backdrop-filter:blur(20px);
    font-family: 'Noto Sans', sans-serif;


    &:hover {
        background: linear-gradient(to right, #388684 , #1A7371);
        transform:  translateY(-2px);
    }
`