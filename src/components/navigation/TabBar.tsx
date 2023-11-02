import React from 'react'
import { RouteProp, ParamListBase } from '@react-navigation/native'
import styled from 'styled-components/native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import {
  IconDefinition,
  faHouse,
  faStopwatch,
  faBookmark,
  faUser,
  faCompass,
} from '@fortawesome/free-solid-svg-icons'

import { StyledIcon } from '@/components/layout/Icon'
import { DefaultText } from '@/components/layout/Texts'

type TabRoutesType = Record<string, { icon: IconDefinition; title: string }>

const TAB_ROUTES: TabRoutesType = {
  ForYou: {
    icon: faHouse,
    title: 'Home',
  },
  Discover: {
    icon: faCompass,
    title: 'Discover',
  },
  Activity: {
    icon: faStopwatch,
    title: 'Activity',
  },
  Bookmarks: {
    icon: faBookmark,
    title: 'Bookmarks',
  },
  Profile: {
    icon: faUser,
    title: 'Profile',
  },
}

export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const TabIcons = () => {
    const { routes, index: activeRouteIndex } = state

    const handleTabPress = ({
      route,
      isRouteActive,
    }: {
      route: RouteProp<ParamListBase, string>
      isRouteActive: boolean
    }) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      })

      //ForYou is the only screen available for now
      if (route.name !== 'ForYou') {
        event.preventDefault()
      }

      if (!isRouteActive && !event.defaultPrevented) {
        navigation.navigate(route.name, route.params)
      }
    }

    return (
      <>
        {routes.map((route, routeIndex) => {
          const { icon, title } = TAB_ROUTES[route.name]
          const isRouteActive = routeIndex === activeRouteIndex
          return (
            <IconButton
              onPress={() => handleTabPress({ route, isRouteActive })}>
              {icon && (
                <StyledIcon icon={icon} active={isRouteActive} size={20} />
              )}
              <TabTitle active={isRouteActive}>{title}</TabTitle>
            </IconButton>
          )
        })}
      </>
    )
  }

  return (
    <StyledTabBar>
      <TabIcons />
    </StyledTabBar>
  )
}

const StyledTabBar = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #000000;
  height: 100px;
`

const IconButton = styled.TouchableOpacity`
  align-items: center;
`

const TabTitle = styled(DefaultText)<{ active: boolean }>`
  color: #fff;
  text-align: center;
  font-size: 12px;
  letter-spacing: 0.1px;
  margin-top: 3px;
  opacity: ${p => (p.active ? 1 : 0.5)};
`
