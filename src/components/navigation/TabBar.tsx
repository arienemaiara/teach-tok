import React, { useEffect } from 'react'
import styled from 'styled-components/native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

import { StyledIcon } from '@/components/layout/Icon'

export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <StyledTabBar>
      <StyledIcon icon={faHouse} />
    </StyledTabBar>
  )
}

const StyledTabBar = styled.View`
  padding: 15px;
  background-color: #00000050;
`
