import styled from 'styled-components'
import { color } from './color'

export const Text = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
  font-size: ${(props) => props.size ? `${props.size}px`: '14px'};
  color: ${(props) => props.color ? props.color : `${color.$grey02}` };
`