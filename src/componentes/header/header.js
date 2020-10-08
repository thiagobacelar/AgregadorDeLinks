import React from 'react';
import {Headertop, Logo, Main, Textoseguir, Link} from '../../style';
import logo from '../../img/logo-insta2.png';

function Header(){
    return(
        <Main>
            <Headertop >
                <Logo>
                <img src={logo} />
                </Logo>
                <Textoseguir>
                    Siga o nosso instagram: <Link target="t_blank" href={'https://www.instagram.com/concursoprf2020/'} >@concursoprf2020</Link>
                </Textoseguir>
            </Headertop >
        </Main>
    )
}


export default Header;