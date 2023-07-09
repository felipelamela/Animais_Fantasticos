import React from 'react'
import style from './Contato.module.css'
import Paragrafo from '../GlobalComponents/Paragrafo/Paragrafo'
import Titulo from '../GlobalComponents/Titulo/Titulo'

const linksContato = [{
  texto: 'contato@contato.com'
}, {
  texto: '+55(21)9999-9999'
}, {
  texto: 'Rua do Conde, nº21'
}, {
  texto: 'Rio de Janeiro - RJ'
}]

const Contato: React.FC = () => {
  return (
    <section className="gridSection contato" id="contato">
      <Titulo texto="Contato" />
      <div className={style.mapa}>
        <img src="/img/mapa.png" alt="" />
      </div>
      <ul className={style.dados}>
        {linksContato.map((link, index) => (
          <li key={index}><Paragrafo texto={link.texto} /></li>
        ))}
      </ul>

    </section>
  )
}

export default Contato