import React, { useState } from 'react'
import { Dimensions, ImageBackground, Text, View } from 'react-native'
import styled from 'styled-components/native'

import { QuestionType, QuestionOptionType } from '@/screens/ForYou' //todo remove from here

import SideOptions from './SideOptions'
import Playlist from './Playlist'
import { BoldText, DefaultText } from '../layout/Texts'

const { width, height } = Dimensions.get('window')

const Option = ({
  option,
  isAnswered,
  selectedAnswer,
  rightAnswer,
  onPress,
}: {
  option: QuestionOptionType
  isAnswered: boolean
  selectedAnswer: string
  rightAnswer: string
  onPress: (id: string) => void
}) => {
  return (
    <OptionItem
      key={option.id}
      onPress={() => onPress(option.id)}
      isAnswered={isAnswered}
      isRight={selectedAnswer === rightAnswer}>
      <OptionItemText
        style={{
          textShadowColor: 'rgba(0, 0, 0, 1)',
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 1,
        }}>
        {option.answer}
      </OptionItemText>
    </OptionItem>
  )
}

export default function Question({ question }: { question: QuestionType }) {
  const [isAnswered, setIsAnswered] = useState<boolean>(false)
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
                  <Option
                    option={option}
                    isAnswered={false}
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
  background-color: #00000080;
  width: 90%;
  padding: 5px;
  border-radius: 5px;
`

const QuestionText = styled(BoldText)`
  font-size: 24px;
`

const OptionsWrapper = styled.View`
  align-self: baseline;
`

const QuestionDescription = styled.View`
  margin-top: 15px;
`

const OptionItem = styled.TouchableOpacity<{
  isAnswered: boolean
  isRight: boolean
}>`
  min-width: 100%;
  background-color: #ffffff75;
  margin: 5px 0;
  padding: 15px 10px;
  border-radius: 8px;
`

const OptionItemText = styled(BoldText)`
  font-size: 16px;
`
