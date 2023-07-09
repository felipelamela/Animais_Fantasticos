'use client'

import React from 'react'
import style from './Main.module.css'
import AnimaisDescricao from '../GlobalComponents/AnimaisDescricao/AnimaisDescricao'
import Titulo from '../GlobalComponents/Titulo/Titulo'
import Image from 'next/image'
import useFetch from '../GlobalComponents/useFetch/useFetch'


const listaDeImagem = [
  {
    name: 'raposa',
    src: '/img/imagem1.jpg'
  },
  {
    name: "esquilo",
    src: '/img/imagem2.jpg'
  },
  {
    name: "urso",
    src: '/img/imagem3.jpg'
  },
  {
    name: "lobo",
    src: '/img/imagem4.jpg'
  },
  {
    name: "macaco",
    src: '/img/imagem5.jpg'
  },
  {
    name: "leao",
    src: '/img/imagem6.jpg'
  },
]



const Main = () => {
  const { data, setAnimalAtual, animalAtual } = useFetch()


  function handleClick(index: number) {
    setAnimalAtual(index)
  }


  if (data === null) return null
  return (
    <main className={`${style.animais} gridSection`}>
      <Titulo texto='Animais Fantasticos' />
      <ul data-animais="lista" className={style.animaisLista}>
        {listaDeImagem.map((animal, index) => (
          <li

            onClick={event => handleClick(index)}
            key={animal.name}>
            <Image

              priority={false}
              src={animal.src}
              alt={animal.name}
              layout="responsive"
              width={270}
              height={380}

            /></li>
        ))}

      </ul>
      <div>
        {data.map((animal, index) => (
          <AnimaisDescricao
            key={index}
            titulo={animal.animal}
            texto={animal.paragrafo}
            ativo={animalAtual === animal.id ? "ativo" : ''} />
        ))}

      </div>
    </main>
  )
}

export default Main