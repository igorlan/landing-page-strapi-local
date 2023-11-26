import React from 'react'
import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'
import * as S from './styles'
import { SectionAboutUsProps } from 'types/api'

const SectionAboutUs = ({ authors, title }: SectionAboutUsProps) => {
  return (
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.Content>
        {authors.data.map((author) => (
          <ProfileCard
            key={author.attributes.name}
            name={author.attributes.name}
            role={author.attributes.role}
            image={author.attributes.photo?.data[0].attributes.url}
            socialLinks={author.attributes.socialLinks}
            description={author.attributes.description}
          />
        ))}
      </S.Content>
    </Container>
  )
}

export default SectionAboutUs
