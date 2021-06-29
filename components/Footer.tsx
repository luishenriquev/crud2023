import styled from 'styled-components'

export default function Footer() {
  return (
    <Wrapper>
      Esta aplicação foi criada por Luis Henrique Vieira e tem como objetivo
      servir de exemplo para todos os novos participantes da Eliti. Apesar de
      simples, ela utilizada liguagens como HTML, CSS, Typescript, frameworks
      como ReactJS, NextJS e NestJS.
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: rgba(255, 255, 255, .5);
  font-size: .7rem;
`
