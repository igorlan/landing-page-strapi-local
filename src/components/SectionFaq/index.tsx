import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import faq from './content'
import * as S from './styles'
import { SectionFaqProps } from 'types/api'

const SectionFaq = ({ faq, title }: SectionFaqProps) => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>{title}</Heading>

        <S.Questions>
          {faq.map(({ question, answer }, index) => (
            <S.Question key={index}>
              <Heading lineBottom>{question}</Heading>
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </S.Question>
          ))}
        </S.Questions>

        <S.ExtraQuestion>
          <Heading lineBottom>Eu tenho outra dúvida!</Heading>
          <p>
            Sem problemas! Você pode acessar qualquer uma das{' '}
            <a
              href="https://www.instagram.com/igorrdl/"
              target="_blank"
              rel="noreferrer"
            >
              minhas redes sociais
            </a>
            .
          </p>
        </S.ExtraQuestion>
      </Container>
    </S.Content>
  </S.Wrapper>
)

export default SectionFaq
