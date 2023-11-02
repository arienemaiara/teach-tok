import React from 'react'
import styled from 'styled-components/native'

import { QuestionType } from '@/screens/ForYou' //todo remove from here

import SideOptions from './SideOptions'

export default function Question({ question }: { question: QuestionType }) {
  return (
    <Container>
      <SideOptions />
    </Container>
  )
}

const Container = styled.View`
  align-self: flex-end;
`
