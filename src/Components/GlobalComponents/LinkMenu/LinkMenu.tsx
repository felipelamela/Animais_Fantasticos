import React from 'react'
import style from './LinkMenu.module.css'
import { Links } from '../../../../types/global'

const LinkMenu:React.FC<Links> = ({nome, href}) => {
  return (
    <a className={style.link} href={href}>{nome}</a>
  )
}

export default LinkMenu