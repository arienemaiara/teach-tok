import React, { useState } from 'react'
import { LayoutChangeEvent } from 'react-native'
import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'

import { QuestionOptionType } from '@/types'
import { BoldText } from '../layout/Texts'

const ResultAnimation = ({
  isRight,
  itemHeight,
}: {
  isRight: boolean
  itemHeight: number
}) => {
  const animationFile = isRight
    ? require('../../../assets/animations/thumbs_up.json')
    : require('../../../assets/animations/thumbs_down.json')
  return (
    <LottieView
      source={animationFile}
      autoPlay
      loop
      style={{
        height: 80,
        width: 80,
        position: 'absolute',
        zIndex: 1,
        right: 0,
        top: itemHeight <= 52 ? -15 : 0,
      }}
    />
  )
}

export default function AnswerOption({
  option,
  selectedAnswer,
  rightAnswers,
  onPress,
}: {
  option: QuestionOptionType
  selectedAnswer: string
  rightAnswers: string[]
  onPress: (id: string) => void
}): JSX.Element {
  const [itemHeight, setItemHeight] = useState<number>(0)
  const isRight = rightAnswers.includes(selectedAnswer)
  const wasSelected = selectedAnswer === option.id

  const handleLayout = (event: LayoutChangeEvent) => {
    setItemHeight(event.nativeEvent.layout.height)
  }

  return (
    <OptionItem
      onPress={() => onPress(option.id)}
      isRight={isRight}
      wasSelected={wasSelected}
      onLayout={handleLayout}>
      {wasSelected && (
        <ResultAnimation isRight={isRight} itemHeight={itemHeight} />
      )}
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

const OptionItem = styled.TouchableOpacity<{
  isRight: boolean
  wasSelected: boolean
}>`
  flex-direction: row;
  min-width: 100%;
  background-color: ${({ wasSelected, isRight }) =>
    !wasSelected ? `#ffffff75` : isRight ? '#00bb4475' : '#a1000075'};

  margin: 5px 0;
  padding: 15px 10px;
  border-radius: 8px;
`

const OptionItemText = styled(BoldText)`
  font-size: 16px;
`
