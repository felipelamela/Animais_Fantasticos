import React from "react";
import style from './Header.module.css'
import LinkMenu from "../GlobalComponents/LinkMenu/LinkMenu";

const linksDoMenu = [
  {
    nome: 'Animais',
    href: '#animais'
  },
  {
    nome: 'Faq',
    href: '#Faq'
  },
  {
    nome: 'Sobre',
    href: '/'
  },
  {
    nome: 'Contato',
    href: '#contato'
  },
  {
    nome: 'Dev 🠢',
    href: 'https://github.com/felipelamela'
  },

]


const Header = () => {
  return (
    <header className={style.menu}>
      <nav>
        <ul>
          {linksDoMenu.map(link =>(
            <LinkMenu nome={link.nome} href={link.href} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
