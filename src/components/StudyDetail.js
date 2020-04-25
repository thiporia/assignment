import React, { useContext } from 'react';
import Navi from './Navi';
import { Text } from 'styles/font';
import { color } from 'styles/color'
import Problem from './Problem'
import Button from './Button'
import styled from 'styled-components'
import { AppContext } from 'App'
import _ from 'lodash'

const ProblemSection = styled.section`
  margin-top: 3px;
  div:not(:first-child) {
    margin-top: 8px;
  }
  height: 675px;
  overflow-y: scroll;
`

const StudyDetail = () => {
  const { state: { problems, activeBtn }, actions } = useContext(AppContext)

  const renderProblems = (problemsData) => (
    problemsData.map(({ id, problemType, unitName, problemURL }, i) => {
      const ButtonGroup = () => (
        <>
          <Button active={_.isEqual(activeBtn, `${i + 1}`)} dataId={i + 1} onClick={(e) => actions.getActive(e)}>유사문항</Button>
          <Button dataId={i + 1} onClick={(e) => actions.deleteProblem(e)}>삭제</Button>
        </>
      )
      return (
        <Problem
          key={id}
          problemOrder={i + 1}
          problemType={problemType}
          unitName={unitName}
          problemURL={problemURL}
          buttonGroup={<ButtonGroup />}
        />
      )
    })
  )

  return (
    <div style={{ width: '50%' }}>
      <Navi style={{ paddingLeft: '25px' }}>
        <Text bold color={color.$grey03}>
          학습지 상세 편집
        </Text>
      </Navi>
      <ProblemSection>
        {
          _.isEmpty(problems) ?
          "Loading..."
          :
          renderProblems(problems)
        }
      </ProblemSection>
    </div>
  );
};

export default StudyDetail;