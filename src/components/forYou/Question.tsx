import React from 'react'
import { Dimensions, ImageBackground } from 'react-native'
import styled from 'styled-components/native'

import { QuestionType } from '@/screens/ForYou' //todo remove from here

import SideOptions from './SideOptions'

const { width, height } = Dimensions.get('window')

export default function Question({ question }: { question: QuestionType }) {
  console.log(question.image)
  return (
    <Container>
      <ImageBackground
        source={{ uri: question.image }}
        style={{ flex: 1, justifyContent: 'center' }}>
        <ImageOverlay />
        <SideOptions />
      </ImageBackground>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  height: ${height - 100};
`

const ImageOverlay = styled.View`
  flex: 1;
  position: absolute;
  background-color: #000;
  opacity: 0.4;
  height: ${height - 100};
  width: ${width};
`
