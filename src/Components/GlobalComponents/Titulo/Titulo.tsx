import React from 'react'
import style from  './Titulo.module.css'
import { Texto } from '../../../../types/global'


const Titulo:React.FC<Texto> = ({texto}) => {
  return (
    <h1 className={style.titulo}>{texto}</h1>
  )
}

export default Titulo