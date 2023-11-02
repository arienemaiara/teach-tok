import React from 'react'
import styled from 'styled-components/native'
import {
  faHeart,
  faCommentDots,
  faBookmark,
  faShare,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons'

import { StyledIcon } from '@/components/layout/Icon'
import { DefaultText } from '../layout/Texts'

const Like = () => {
  return (
    <OptionButton>
      <StyledIcon icon={faHeart} active size={26} />
      <DefaultText>87</DefaultText>
    </OptionButton>
  )
}

const Comments = () => {
  return (
    <OptionButton>
      <StyledIcon icon={faCommentDots} active size={26} />
      <DefaultText>3</DefaultText>
    </OptionButton>
  )
}

const Bookmark = () => {
  return (
    <OptionButton>
      <StyledIcon icon={faBookmark} active size={26} />
      <DefaultText>5</DefaultText>
    </OptionButton>
  )
}

const Share = () => {
  return (
    <OptionButton>
      <StyledIcon icon={faShare} active size={26} />
      <DefaultText>17</DefaultText>
    </OptionButton>
  )
}

export default function SideOptions() {
  return (
    <Container>
      <Like />
      <Comments />
      <Bookmark />
      <Share />
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
`

const OptionButton = styled.TouchableOpacity`
  align-items: center;
  margin-bottom: 15px;
`
