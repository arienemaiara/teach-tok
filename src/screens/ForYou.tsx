import React from 'react'

import { ScreenContainer } from '@/components/layout/Containers'
import Question from '@/components/forYou/Question'
import { DefaultText } from '@/components/layout/Texts'

type QuestionOptionType = {
  id: string
  answer: string
}

type QuestionUserType = {
  name: string
  avatar: string
}

//todo remove from here
export type QuestionType = {
  type: string
  id: number
  playlist: string
  description: string
  image: string
  question: string
  options: QuestionOptionType[]
  user: QuestionUserType
}

const question: QuestionType = {
  type: 'mcq',
  id: 7069,
  playlist: 'Period 6: 1865-1898',
  description: '5.4 The Compromise of 1850 #apush',
  image:
    'https://cross-platform-rwa.rp.devfactory.com/images/7069%20-%20Compromise%20of%201850.png',
  question: 'What led to the Compromise of 1850?',
  options: [
    {
      id: 'A',
      answer: 'Sectional disagreements over slavery',
    },
    {
      id: 'B',
      answer: 'Conflict over tariffs',
    },
    {
      id: 'C',
      answer: "Arguments surrounding states' rights",
    },
  ],
  user: {
    name: 'AP US History',
    avatar: 'https://cross-platform-rwa.rp.devfactory.com/avatars/apush.png',
  },
}

export default function ForYou() {
  return (
    <ScreenContainer>
      <Question question={question} />
    </ScreenContainer>
  )
}
