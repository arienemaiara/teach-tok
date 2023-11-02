import React from 'react'
import styled from 'styled-components/native'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { StyledIcon } from '@/components/layout/Icon'
import { BoldText } from '@/components/layout/Texts'
import { View } from 'react-native'

export default function Playlist({ playlist }: { playlist: string }) {
  return (
    <Container>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <StyledIcon icon={faYoutube} active />
        <BoldText style={{ fontSize: 13, marginLeft: 5 }}>
          Playlist • {playlist}
        </BoldText>
      </View>
      <StyledIcon icon={faChevronRight} active />
    </Container>
  )
}

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #00000090;
  padding: 5px 10px;
`
