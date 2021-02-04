import React from 'react';
import {Headertop, Logo, Main, Textoseguir, Link} from '../../style';
import logo from '../../img/logo-insta2.png';

export default function Header(){

    let linkPrf =  "";
    let Instagram = "";
    
    return(
        <Main>
            <Headertop >
                <Logo>
                <img src={logo} />
                </Logo>
                <Textoseguir>
                    Siga o nosso instagram: <Link target="t_blank" href={linkPrf} >{Instagram}</Link>
                </Textoseguir>
            </Headertop >
        </Main>
    )
}
