import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { BASE_URL, NUMBER_OF_ITEMS_TO_FETCH } from '@/constants'

import { QuestionType } from '@/types'

export default function useFetchQuestions() {
  const [fetchedIds, setFetchedIds] = useState<number[]>([])

  const fetchQuestion = async () => {
    const res = (await (await fetch(BASE_URL)).json()) as QuestionType
    return res
  }

  const fetchQuestions = async () => {
    const collectedData = []
    for (let i = 0; i < NUMBER_OF_ITEMS_TO_FETCH; i++) {
      let question: QuestionType
      do {
        question = await fetchQuestion()
      } while (fetchedIds.includes(question.id))
      collectedData.push(question)
      setFetchedIds(prevIds => [...prevIds, question.id])
    }
    return collectedData
  }

  return useQuery({
    queryKey: ['todos', 1],
    queryFn: fetchQuestions,
    retry: 2,
  })
}
