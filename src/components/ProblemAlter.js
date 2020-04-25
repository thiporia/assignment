import React, { useContext } from 'react';
import Navi from './Navi';
import { Text } from 'styles/font';
import { color } from 'styles/color'
import styled from 'styled-components'
import PlaceHolder from './PlaceHolder'
import Problem from './Problem'
import Button from './Button'
import { AppContext } from 'App'
import _ from 'lodash'

const PlaceHolderSection = styled.section`
  margin-top: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.$white};
  height: 675px;
`

const SimilarProblemSection = styled.section`
  div:not(:nth-child(-n + 2)) {
    margin-top: 8px;
  }
  height: 675px;
  overflow-y: scroll;
`

const TitleBox = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  span {
    margin-left: 25px;
  }
`


const ProblemAlter = () => {
  const { state: { problems, similarProblems, activeBtn }, actions} = useContext(AppContext)
  const renderAlterProblems = (problemsData) => (
    <>
      <TitleBox>
        <Text color={color.$grey03}>{problems[activeBtn - 1].unitName}</Text>
      </TitleBox>
    {
      problemsData.map(({ id, problemType, unitName, problemURL }, i) => {
        const ButtonGroup = () => (
          <>
            <Button dataId={i + 1} onClick={(e) => actions.addSimilarPromblem(e)}>추가</Button>
            <Button dataId={i + 1} onClick={(e) => actions.alterProblem(e)}>교체</Button>
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
    }
    </>
  )

  return (
    <div style={{ width: '50%' }}>
      <Navi style={{ justifyContent: 'center' }}>
        <Text bold color={color.$grey03}>
          문항 교체&#47;추가
        </Text>
      </Navi>
      {
        _.isEmpty(similarProblems) ?
          (<PlaceHolderSection>
              <PlaceHolder />
            </PlaceHolderSection>
          ) : (
            <SimilarProblemSection>
              {renderAlterProblems(similarProblems)}
            </SimilarProblemSection>
          )
      }
    </div>
  );
};

export default ProblemAlter;