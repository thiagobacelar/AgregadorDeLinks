import React from 'react';
import {Listabtn, LinkBtn, MainBtn} from '../../style';
import LinkIcon from '@material-ui/icons/Link';

const links  = [
    {nome: "Planilha do Aprovado - PRF", link: "https://go.hotmart.com/F40072338C"},
    {nome: "Mapas Mentais - Carreiras Policiais", link: "https://go.hotmart.com/H28171546P"},
    {nome: "Corrida e Resistência para o TAF", link: "https://go.hotmart.com/S40131213F"},
    {nome: "5.000 questões comentadas - 69%OFF", link: "https://amzn.to/3jCLVq3"},
    {nome: "Apostila PRF 2020", link: "https://amzn.to/2GKloIw"}
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