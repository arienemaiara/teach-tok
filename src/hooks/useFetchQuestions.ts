import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { BASE_URL, NUMBER_OF_ITEMS_TO_FETCH } from '@/constants'

import { QuestionType } from '@/types'

export default function useFetchQuestions() {
  const [fetchedIds] = useState<Set<number>>(new Set())

  const fetchQuestion = async () => {
    const res = (await (await fetch(BASE_URL)).json()) as QuestionType
    return res
  }

  const fetchQuestions = async () => {
    const collectedData = []

    while (collectedData.length < NUMBER_OF_ITEMS_TO_FETCH) {
      const question = await fetchQuestion()
      const questionId = question.id

      if (!fetchedIds.has(questionId)) {
        collectedData.push(question)
        fetchedIds.add(questionId)
      }
    }

    return collectedData
  }

  return useQuery({
    queryKey: ['questions', 1],
    queryFn: fetchQuestions,
    retry: 2,
  })
}
