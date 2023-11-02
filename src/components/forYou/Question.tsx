import React, { useState } from 'react'
import { Dimensions, ImageBackground, Text, View } from 'react-native'
import styled from 'styled-components/native'

import { QuestionType, QuestionOptionType } from '@/screens/ForYou' //todo remove from here

import SideOptions from './SideOptions'
import Playlist from './Playlist'
import { BoldText, DefaultText } from '../layout/Texts'
import AnswerOption from './AnswerOption'

const { width, height } = Dimensions.get('window')

export default function Question({ question }: { question: QuestionType }) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')

  const {
    image,
    question: title,
    options,
    user,
    description,
    playlist,
  } = question

  const handleSelectAnswer = (id: string) => {
    if (selectedAnswer) return
    setSelectedAnswer(id)
  }

  return (
    <Container source={{ uri: image }}>
      <ImageOverlay />
      <Content>
        <QuestionContainer>
          <Column>
            <QuestionTextWrapper>
              <QuestionText>{title}</QuestionText>
            </QuestionTextWrapper>
            <View>
              <OptionsWrapper>
                {options.map(option => (
                  <AnswerOption
                    key={option.id}
                    option={option}
                    selectedAnswer={selectedAnswer}
                    rightAnswer="A"
                    onPress={handleSelectAnswer}
                  />
                ))}
              </OptionsWrapper>
              <QuestionDescription>
                <BoldText style={{ fontSize: 14 }}>{user.name}</BoldText>
                <DefaultText style={{ fontSize: 14 }}>
                  {description}
                </DefaultText>
              </QuestionDescription>
            </View>
          </Column>
          <SideOptions />
        </QuestionContainer>
        <Playlist playlist={playlist} />
      </Content>
    </Container>
  )
}

const Container = styled(ImageBackground)`
  flex: 1;
  height: ${height - 100}px;
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
  height: ${height - 100}px;
  width: ${width}px;
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
  background-color: #00000080;
  width: 90%;
  padding: 5px;
  border-radius: 5px;
`

const QuestionText = styled(BoldText)`
  font-size: 22px;
`

const OptionsWrapper = styled.View`
  align-self: baseline;
`

const QuestionDescription = styled.View`
  margin-top: 15px;
`
