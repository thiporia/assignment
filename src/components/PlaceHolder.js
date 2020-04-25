import React from 'react'
import { Text } from 'styles/font';
import { color } from 'styles/color'
import styled from 'styled-components'

const FirstParagraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`

const PlaceHolderBtn = styled.span`
  display: inline-block;
  width: 70px;
  height: 24px;
  text-align: center;
  border: 1px solid ${color.$grey04};
  border-radius: 3px;
  span {
    vertical-align: -webkit-baseline-middle;
  }
`

export default () => (
  <div>
    <FirstParagraph>
      <PlaceHolderBtn>
        <Text size="12" bold color={color.$blue01}>유사문항</Text>
      </PlaceHolderBtn>
      <Text style={{ marginLeft: '8px'}}>버튼을 누르면</Text>
    </FirstParagraph>
    <p style={{ marginTop: '5px'}}>
      <Text>해당 문제의 유사 문항을 볼 수 있습니다.</Text>
    </p>
  </div>
)