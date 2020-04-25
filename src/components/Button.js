import React from 'react'
import styled from 'styled-components'
import { color } from 'styles/color'

const Button = styled.button`
  width: 80px;
  height: 36px;
  border: 1px solid ${(props) => props.active ? color.$blue01 : color.$grey04};
  border-radius: 3px;
  text-align: center;
  padding: 8.5px 0;
  cursor: pointer;
  background-color: ${(props) => props.active ? color.$blue01 : color.$white};
  font-family: Noto Sans KR;
  font-style: normal;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.active ? color.$white : color.$blue01}
`
export default ({ children, onClick, dataId, active }) => (
  <Button active={active} value={dataId} onClick={onClick}>
    {children}
  </Button>
)
