import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'

import { ScreenContainer } from '@/components/layout/Containers'
import Question from '@/components/forYou/Question'
import useFetchQuestions from '@/hooks/useFetchQuestions'
import { QuestionType } from '@/types'

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
