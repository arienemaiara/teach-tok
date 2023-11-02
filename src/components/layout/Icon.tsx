import styled from 'styled-components/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export const StyledIcon = styled(FontAwesomeIcon)<{ active: boolean }>`
  color: #fff;
  opacity: ${p => (p.active ? 1 : 0.5)};
`
