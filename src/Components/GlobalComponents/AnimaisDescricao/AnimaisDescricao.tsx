import React from 'react'
import style from './AnimaisDescricao.module.css'
import Paragrafo from '../Paragrafo/Paragrafo'
import Subtitlo from '../Subtitulo/Subtitlo'
import { AnimaisDescricao } from '../../../../types/global'




const AnimaisDescricao: React.FC<AnimaisDescricao> = ({ titulo, texto, ativo }) => {
  return (
    <section className={`${style.animaisDescricao} ${ativo}`}>

      <Subtitlo texto={titulo} />
      <Paragrafo texto={texto} />


    </section>
  )
}

export default AnimaisDescricao