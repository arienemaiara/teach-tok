import React, { useEffect, useState } from 'react'
import { AppState, AppStateStatus } from 'react-native'
import styled from 'styled-components/native'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'

import { faSearch, faStopwatch } from '@fortawesome/free-solid-svg-icons'

import { DefaultText, HeaderTitle } from '@/components/layout/Texts'
import { StyledIcon } from '@/components/layout/Icon'

export default function Header({ options }: BottomTabHeaderProps) {
  const [timeSpent, setTimeSpent] = useState(0)
  const [isActive, setIsActive] = useState(true)

  const updateActiveTime = () => {
    if (isActive) {
      setTimeSpent(prevTime => prevTime + 1)
    }
  }

  useEffect(() => {
    const timer = setInterval(updateActiveTime, 1000)

    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      setIsActive(nextAppState === 'active')
    }

    const appStateSubscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    )

    return () => {
      clearInterval(timer)
      appStateSubscription.remove()
    }
  }, [])

  const minutes = Math.floor(timeSpent / 60)

  return (
    <Container>
      <Timer>
        <StyledIcon icon={faStopwatch} />
        <TimerText>{minutes}m</TimerText>
      </Timer>
      <HeaderTitleContainer>
        <HeaderTitle>{options.title}</HeaderTitle>
        <HeaderTitleLine />
      </HeaderTitleContainer>
      <Search>
        <StyledIcon icon={faSearch} active />
      </Search>
    </Container>
  )
}

const Container = styled.SafeAreaView`
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px;
  align-items: center;
`

const HeaderTitleContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`

const HeaderTitleLine = styled.View`
  height: 4px;
  width: 30px;
  background-color: #fff;
`

const Timer = styled.View`
  flex-direction: row;
  flex: 1;
`

const TimerText = styled(DefaultText)`
  opacity: 0.5;
`

const Search = styled.View`
  flex: 1;
  align-items: flex-end;
`
