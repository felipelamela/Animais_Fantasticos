'use client'
import React from 'react'
import { Descricao } from '../../../../types/global'


const Definicao: React.FC<Descricao> = ({ tituloDescri, textoDescri }) => {
  const [ativaDescricao, setAtivaDescricao] = React.useState<boolean>(false)

  function handleClick() {
    setAtivaDescricao(!ativaDescricao)
  }

  return (
    <>
      <dt onClick={event => handleClick()} className={`${ativaDescricao ? "DTAtivo" : ""} `}>{tituloDescri}</dt>
      <dd className={`${ativaDescricao ? "DDAtivo" : ""} ddClass`}>{textoDescri}</dd>
    </>
  )
}

export default Definicao