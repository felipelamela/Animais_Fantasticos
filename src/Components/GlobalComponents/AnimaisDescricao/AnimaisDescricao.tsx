import React from 'react'
import style from './AnimaisDescricao.module.css'
import Paragrafo from '../Paragrafo/Paragrafo'
import Subtitulo from '../Subtitulo/Subtitulo'
import { AnimaisDescricao } from '../../../../types/global'




const AnimaisDescricao: React.FC<AnimaisDescricao> = ({ titulo, texto, ativo }) => {
  return (
    <section className={`${style.animaisDescricao} ${ativo}`}>

      <Subtitulo texto={titulo} />
      <Paragrafo texto={texto} />


    </section>
  )
}

export default AnimaisDescricao