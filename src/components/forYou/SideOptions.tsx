import React from 'react'
import styled from 'styled-components/native'
import {
  faHeart,
  faCommentDots,
  faBookmark,
  faShare,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'

import { StyledIcon } from '@/components/layout/Icon'
import { DefaultText } from '../layout/Texts'
import { QuestionUserType } from '@/screens/ForYou'
import { Image } from 'react-native'

const Profile = ({ user }: { user: QuestionUserType }) => {
  return (
    <OptionButton>
      <ProfileImageContainer>
        <Image source={{ uri: user.avatar }} width={40} height={40} />
      </ProfileImageContainer>
      <PlusIconWrapper>
        <StyledIcon icon={faPlus} active size={10} />
      </PlusIconWrapper>
    </OptionButton>
  )
}

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
      <DefaultText>2</DefaultText>
    </OptionButton>
  )
}

const Bookmark = () => {
  return (
    <OptionButton>
      <StyledIcon icon={faBookmark} active size={26} />
      <DefaultText>203</DefaultText>
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

export default function SideOptions({ user }: { user: QuestionUserType }) {
  return (
    <Container>
      <Profile user={user} />
      <Like />
      <Comments />
      <Bookmark />
      <Share />
    </Container>
  )
}

const ProfileImageContainer = styled.View`
  border: 1px solid #fff;
  border-radius: 22px;
`

const PlusIconWrapper = styled.View`
  position: absolute;
  bottom: -6px;
  background-color: #159b5a;
  padding: 2px;
  border-radius: 7px;
`

const Container = styled.View`
  padding: 15px;
  padding-left: 10px;
  justify-content: flex-end;
`

const OptionButton = styled.TouchableOpacity`
  align-items: center;
  margin-bottom: 15px;
`
