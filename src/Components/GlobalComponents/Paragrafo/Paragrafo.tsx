import React from 'react'
import style from './Paragrafo.module.css'
import { Texto } from '../../../../types/global'



const Paragrafo: React.FC<Texto> = ({ texto }) => {
  return (
    <p className={style.paragrafo}>{texto}</p>
  )
}

export default Paragrafo