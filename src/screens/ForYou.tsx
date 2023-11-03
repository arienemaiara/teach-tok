import React, { useState, useCallback, useMemo } from 'react'
import { Dimensions } from 'react-native'
import { FlashList } from '@shopify/flash-list'

import { ScreenContainer } from '@/components/layout/Containers'
import Question from '@/components/forYou/Question'
import useFetchQuestions from '@/hooks/useFetchQuestions'
import { QuestionType, SelectAnswer } from '@/types'
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
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [x: number]: string
  }>({})
  const { data, isLoading, isError, fetchNextPage } = useFetchQuestions()
  const flattenData = data?.pages.flatMap(page => page)

  const renderItem = useMemo(
    () =>
      ({ item }: { item: QuestionType }) => {
        const { id: questionId } = item
        const handleSelectAnswer = ({
          questionId,
          selectedAnswer,
        }: SelectAnswer) => {
          setSelectedAnswers({
            ...selectedAnswers,
            [questionId]: selectedAnswer,
          })
        }

        return (
          <Question
            key={questionId}
            question={item}
            onSelectAnswer={handleSelectAnswer}
            selectedAnswer={selectedAnswers[questionId]}
          />
        )
      },
    [selectedAnswers],
  )

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
