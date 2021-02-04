import React from 'react';
import {Headertop, Logo, Main, Textoseguir, Link} from '../../style';

export default function Header(){

    let linkPrf ="";
    let Instagram ="";
    let logo = "";

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
