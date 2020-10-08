import React from 'react';
import styled from 'styled-components';

const Main = styled.body`
   display:flex;
`;

const Headertop  = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
`;

const Textoseguir = styled.span`
  font-size:18px;
  margin-bottom:6rem;
  font-weight: 500;
  color: var(--color-texto);
`;

const Link = styled.a`
  text-decoration:none;
  color: var(--color-texto);
  font-weight: 700;
  cursor:pointer;
`;

const Logo  = styled.div`
 margin:20px 0px;
    img{
        border-radius:100px;
    }
`;

//lista de botoes

const MainBtn =  styled.div`
    max-width:500px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    top:10px;
`;


const Listabtn =  styled.div`
    width:100%;
    height:55px;
    background-color: var(--color-texto);
    margin-bottom:15px;
    border-radius:55px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-left:20px;
    box-shadow: 0px 0px 10px var(--color-shadow);

    @media(max-width:500px){
       width:90%;
    }
`;

const LinkBtn =  styled.a`
    color: var(--color-link);
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:16px;
    font-weight:500;
    text-decoration:none;
`;


export {Headertop, Logo, Main, Textoseguir, Link, LinkBtn, Listabtn, MainBtn };