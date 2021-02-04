import React from 'react';
import {Listabtn, LinkBtn, MainBtn} from '../../style';
import LinkIcon from '@material-ui/icons/Link';

const links  = [
    {nome: "", link: ""},
    {nome: "", link: ""},
    {nome: "", link: ""},
    {nome: "", link: ""},
    {nome: "", link: ""}
];

const items = links.map((item) => 
    <Listabtn className="listaBtn">
        <LinkIcon style={{ fontSize: 25 }} color="primary" /><LinkBtn target="t_blank" href={item.link}>{item.nome}</LinkBtn>
    </Listabtn>
)

function Botao() {
    return (
        <MainBtn>
            {items}
        </MainBtn>
    );
  }

export default Botao;