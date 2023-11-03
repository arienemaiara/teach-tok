import { useState } from 'react'
import { useQuery, useInfiniteQuery } from '@tanstack/react-query'

import { BASE_URL, NUMBER_OF_ITEMS_TO_FETCH } from '@/constants'

import { QuestionType } from '@/types'

export default function useFetchQuestions() {
  const [fetchedIds] = useState<Set<number>>(new Set())

  const fetchQuestion = async () => {
    const res = (await (
      await fetch(`${BASE_URL}/for_you`)
    ).json()) as QuestionType
    return res
  }

  const fetchCorrectOption = async (id: number) => {
    const res = await (await fetch(`${BASE_URL}/reveal?id=${id}`)).json()
    return res
  }

  const fetchQuestions = async () => {
    const collectedData = []

    while (collectedData.length < NUMBER_OF_ITEMS_TO_FETCH) {
      let question = await fetchQuestion()
      const questionId = question.id

      if (!fetchedIds.has(questionId)) {
        const { correct_options } = await fetchCorrectOption(questionId)

        question.correct_options = correct_options

        collectedData.push(question)
        fetchedIds.add(questionId)
      }
    }

    return collectedData
  }

  return useInfiniteQuery({
    queryKey: ['questions'],
    queryFn: fetchQuestions,
    getNextPageParam: () => 1,
    initialPageParam: undefined,
  })
}
