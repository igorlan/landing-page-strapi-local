import React from 'react'
import * as S from './styles'
import { ImageProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const Logo = ({ data }: ImageProps) => (
  <S.LogoWrapper
    src={getImageUrl(data?.attributes.url)}
    alt={data?.attributes.alternativeText}
  />
)

export default Logo
