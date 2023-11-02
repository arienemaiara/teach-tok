import { useQuery } from '@tanstack/react-query'

import { BASE_URL, NUMBER_OF_ITEMS_TO_FETCH } from '@/constants'

export default function useFetchQuestions() {
  const fetchQuestion = async () => {
    const res = await (await fetch(BASE_URL)).json()
    return res
  }

  const fetchQuestions = async () => {
    const collectedData = []
    for (let i = 0; i < NUMBER_OF_ITEMS_TO_FETCH; i++) {
      const question = await fetchQuestion()
      collectedData.push(question)
    }
    return collectedData
  }

  return useQuery({
    queryKey: ['todos', 1],
    queryFn: fetchQuestions,
    retry: 2,
  })
}
