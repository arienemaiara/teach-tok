import React, { useState } from 'react'
import styled from 'styled-components/native'

import { QuestionOptionType } from '@/types'
import { BoldText } from '../layout/Texts'

export default function AnswerOption({
  option,
  selectedAnswer,
  rightAnswer,
  onPress,
}: {
  option: QuestionOptionType
  selectedAnswer: string
  rightAnswer: string
  onPress: (id: string) => void
}): JSX.Element {
  return (
    <OptionItem
      onPress={() => onPress(option.id)}
      isRight={selectedAnswer === rightAnswer}
      wasSelected={selectedAnswer === option.id}>
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
