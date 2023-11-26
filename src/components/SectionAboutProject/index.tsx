import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAboutProjectProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionAboutProject = ({
  title,
  image,
  description
}: SectionAboutProjectProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.Container>
          <S.Image
            src={getImageUrl(image.data.attributes.url)}
            loading="lazy"
            alt={image.data.attributes.alternativeText}
          />
          <div>
            <Heading>{title}</Heading>
            <S.Text
              dangerouslySetInnerHTML={{
                __html: description
              }}
            />
          </div>
        </S.Container>
      </Container>
    </S.Wrapper>
  )
}
export default SectionAboutProject
