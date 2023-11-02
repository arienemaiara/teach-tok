import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'

import { ScreenContainer } from '@/components/layout/Containers'
import Question from '@/components/forYou/Question'
import useFetchQuestions from '@/hooks/useFetchQuestions'

export type QuestionOptionType = {
  id: string
  answer: string
}

export type QuestionUserType = {
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

export default function ForYou() {
  const { data, isLoading, isError } = useFetchQuestions()
  // console.log({ data, isLoading, isError })

  const renderItem: ListRenderItem<QuestionType> = ({ item }) => {
    return <Question question={item} />
  }

  return (
    <ScreenContainer>
      <FlatList
        data={data}
        renderItem={renderItem}
        bounces={false}
        pagingEnabled
      />
    </ScreenContainer>
  )
}
