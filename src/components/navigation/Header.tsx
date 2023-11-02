import React, { useEffect } from 'react'
import styled from 'styled-components/native'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'

import { faSearch, faStopwatch } from '@fortawesome/free-solid-svg-icons'

import { DefaultText, HeaderTitle } from '@/components/layout/Texts'
import { StyledIcon } from '@/components/layout/Icon'

export default function Header({
  layout,
  options,
  route,
  navigation,
}: BottomTabHeaderProps) {
  return (
    <Container>
      <Timer>
        <StyledIcon icon={faStopwatch} />
        <DefaultText>10m</DefaultText>
      </Timer>
      <HeaderTitleContainer>
        <HeaderTitle>{options.title}</HeaderTitle>
        <HeaderTitleLine />
      </HeaderTitleContainer>
      <Search>
        <StyledIcon icon={faSearch} />
      </Search>
    </Container>
  )
}

const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px;
  align-items: center;
`

const HeaderTitleContainer = styled.View`
  align-items: center;
`

const HeaderTitleLine = styled.View`
  height: 4px;
  width: 30px;
  background-color: black;
`

const Timer = styled.View`
  flex-direction: row;
`

const Search = styled.View``
