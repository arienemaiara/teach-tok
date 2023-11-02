import React, { useState } from 'react'
import styled from 'styled-components/native'

import { QuestionType, QuestionOptionType } from '@/screens/ForYou' //todo remove from here
import { BoldText, DefaultText } from '../layout/Texts'

export default function AnswerOption({
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
}): JSX.Element {
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
