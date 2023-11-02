import React from 'react'
import { Dimensions, ImageBackground, View } from 'react-native'
import styled from 'styled-components/native'

import { QuestionType } from '@/screens/ForYou' //todo remove from here

import SideOptions from './SideOptions'
import Playlist from './Playlist'
import { BoldText, DefaultText } from '../layout/Texts'

const { width, height } = Dimensions.get('window')

export default function Question({ question }: { question: QuestionType }) {
  return (
    <Container source={{ uri: question.image }}>
      <ImageOverlay />
      <Content>
        <QuestionContainer>
          <Column>
            <QuestionTextWrapper>
              <QuestionText>{question.question}</QuestionText>
            </QuestionTextWrapper>
            <AnswersWrapper></AnswersWrapper>
            <QuestionDescription>
              <BoldText style={{ fontSize: 14 }}>{question.user.name}</BoldText>
              <DefaultText style={{ fontSize: 14 }}>
                {question.description}
              </DefaultText>
            </QuestionDescription>
          </Column>
          <SideOptions />
        </QuestionContainer>
        <Playlist playlist={question.playlist} />
      </Content>
    </Container>
  )
}

const Container = styled(ImageBackground)`
  flex: 1;
  height: ${height - 100};
`

const Column = styled.View`
  flex: 1;
  margin: 40px 20px 20px;
  justify-content: space-between;
`

const ImageOverlay = styled.View`
  flex: 1;
  position: absolute;
  background-color: #000;
  opacity: 0.4;
  height: ${height - 100};
  width: ${width};
`

const Content = styled.View`
  flex: 1;
  margin-top: 100px;
  justify-content: space-between;
`

const QuestionContainer = styled.View`
  flex-direction: row;
  flex: 1;
`

const QuestionTextWrapper = styled.View`
  background-color: #00000060;
  width: 90%;
  padding: 5px;
  border-radius: 5px;
`

const QuestionText = styled(BoldText)`
  font-size: 24px;
`

const AnswersWrapper = styled.View``

const QuestionDescription = styled.View``
