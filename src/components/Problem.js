import React from 'react'
import styled from 'styled-components'
import { Text } from 'styles/font'
import { color } from 'styles/color'

const Container = styled.div`
  background-color: ${color.$white}
`

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 52px;
  padding: 0 15px 0 38px;
  border-bottom: 1px solid ${color.$grey01};
`

const ButtonBox = styled.div`
  margin-left: auto;
  button:last-child {
    margin-left: 8px;
  }
`

const Main = styled.section`
  display: flex;
  padding: 12px 0 23px 47px;
`
const Img = styled.img.attrs((props) => ({
  src: props.src,
  alt: '문제 설명',
}))`
  margin-left: 37px;
`

const Problem = ({ problemOrder, problemType, unitName, problemURL, buttonGroup }) => {
  return (
    <Container>
      <Header>
        <Text bold color={color.$grey02}>{problemType}</Text>
        <Text style={{ marginLeft: '18px' }}color={color.$grey03}>{unitName}</Text>
        <ButtonBox>
          {buttonGroup}
        </ButtonBox>
      </Header>
      <Main>
        <Text size="24" bold color={color.$blue02}>{problemOrder}</Text>
        <Img src={problemURL} />
      </Main>
    </Container>
  )
}

export default Problem;