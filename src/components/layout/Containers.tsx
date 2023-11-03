import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const ScreenContainer = styled.View`
  height: ${height - 100}px;
  width: ${width}px;
`
