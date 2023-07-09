
import React from 'react'
import style from './Faq.module.css'
import Definicao from '../GlobalComponents/Definicao/Definicao'
import Titulo from '../GlobalComponents/Titulo/Titulo'


const listaDaDescricao = [{
  pergunta: "Qual a media de idade dos animais?",
  resposta: "Raposas podem viver em média de 2 a 10 anos, dependendo da espécie e do ambiente. Esquilos têm uma expectativa de vida que varia de 5 a 20 anos, enquanto ursos podem viver entre 20 e 30 anos, dependendo da espécie. Lobos têm uma média de vida de 6 a 15 anos, macacos variam entre 15 e 30 anos, e leões vivem em média de 10 a 20 anos. Esses números são apenas estimativas e podem ser afetados por diversos fatores, incluindo ambiente, estilo de vida e cuidados recebidos."
},
{
  pergunta: "Eles são fantasticos ?",
  resposta: "Eles possuem características únicas e fascinantes que os tornam notáveis. Raposas e esquilos encantam com sua beleza e agilidade, enquanto os ursos impressionam com sua imponência e força. Lobos são admirados por sua inteligência e organização social, e os macacos cativam com sua semelhança aos seres humanos e habilidades cognitivas. Por fim, os leões são símbolos de nobreza e poder, com sua presença majestosa e habilidades de caça em grupo"
},
{
  pergunta: "Quais são as diferenças?",
  resposta: "Raposas têm focinhos alongados, caudas exuberantes e são solitárias na caça, enquanto esquilos possuem corpos compactos, caudas peludas e são habilidosos escaladores de árvores. Ursos, por sua vez, variam em tamanho e cor da pelagem, têm corpos musculosos e algumas espécies são especializadas em dietas carnívoras ou onívoras. Lobos são animais sociais que vivem em matilhas, com pelagem cinza ou marrom e têm comportamento de caça em grupo. Macacos são primatas com características físicas e comportamentais diversas, enquanto leões são grandes felinos com cabeças poderosas, juba e vivem em grupos sociais conhecidos como coalizões ou alcateias."
},
{
  pergunta: "O que podemos fazer para reduzir o impacto na vida deles?",
  resposta: "É essencial conservar seus habitats naturais e criação de áreas protegidas. Além disso, é importante combater a caça ilegal e o comércio de animais por meio de leis mais rigorosas e conscientização pública. A promoção da coexistência harmoniosa entre os animais e as comunidades humanas, juntamente com o apoio a organizações de conservação. Com ações conscientes e um compromisso contínuo, podemos contribuir para garantir um futuro mais seguro para esses animais incríveis.."
}]


const Faq = () => {
  return (
    <section className={` gridSection`} id="Faq">
      <Titulo texto='FAQ' />
      <dl data-scroll="showDown" className={`${style.faqLista} ${style.showDown}`}>
        {listaDaDescricao.map((valor, index) => (
          <Definicao
            key={index}
            tituloDescri={valor.pergunta}
            textoDescri={valor.resposta} />
        ))}
      </dl>
    </section>
  )
}

export default Faq