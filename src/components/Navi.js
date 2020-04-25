import React from 'react';
import styled from 'styled-components'
import { color } from 'styles/color'

const NavBox = styled.nav`
  background: ${color.$white};
  display: flex;
  align-items: center;
  width: 100%;
  height: 46px;
`

export default ({ children, style }) => (
  <NavBox style={style}>
    {children}
  </NavBox>
)
