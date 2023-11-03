export type QuestionOptionType = {
  id: string
  answer: string
}

export type QuestionUserType = {
  name: string
  avatar: string
}

export type QuestionType = {
  type: string
  id: number
  playlist: string
  description: string
  image: string
  question: string
  options: QuestionOptionType[]
  user: QuestionUserType
  correct_options: QuestionOptionType[]
}

export type SelectAnswer = {
  questionId: number
  selectedAnswer: string
}
