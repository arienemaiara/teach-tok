import React from 'react'
import { Dimensions } from 'react-native'
import { FlashList } from '@shopify/flash-list'

import { ScreenContainer } from '@/components/layout/Containers'
import Question from '@/components/forYou/Question'
import useFetchQuestions from '@/hooks/useFetchQuestions'
import { QuestionType } from '@/types'
import { DefaultText } from '@/components/layout/Texts'

const { height } = Dimensions.get('window')

const Loading = () => (
  <ScreenContainer
    style={{
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <DefaultText
      style={{
        color: '#000',
      }}>
      Loading...
    </DefaultText>
  </ScreenContainer>
)

export default function ForYou() {
  const { data, isLoading, isError, fetchNextPage } = useFetchQuestions()
  const flattenData = data?.pages.flatMap(page => page)

  const renderItem = ({ item }: { item: QuestionType }) => {
    return <Question key={item.id} question={item} />
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <ScreenContainer>
      <FlashList
        data={flattenData}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={2}
        estimatedItemSize={height}
        bounces={false}
        pagingEnabled
      />
    </ScreenContainer>
  )
}
