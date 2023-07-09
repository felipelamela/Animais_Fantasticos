import React from 'react'
import { Texto } from '../../../../types/global'

const Subtitulo: React.FC<Texto> = ({ texto }) => {
  return (
    <h2>{texto}</h2>
  )
}

export default Subtitulo