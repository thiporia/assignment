import React, { useState, useEffect, createContext } from 'react';
import styled from 'styled-components'
import GlobalStyles from 'styles/GlobalStyles'
import StudyDetail from 'components/StudyDetail'
import ProblemAlter from 'components/ProblemAlter'
import axios from 'axios'
import { color } from 'styles/color'
import _ from 'lodash'

const VerticalLine = styled.div`
  width: 8px;
  heigth: 100%;
  position: relative;
  background-color: ${color.$grey01};

  ::before {
    position: absolute;
    content: "";
    width: 2px;
    height: 100%;
    background-color: ${color.$grey04};
  }

`

export const AppContext = createContext()

function App() {
  const [ problems, setProblems ] = useState([])
  const [ similarProblems, setSimilarProblems ] = useState([])
  const [ activeBtn, setActiveBtn ] = useState(null)

  const getProblems = async () => {
    try {
      const { data: { data: problemsData } } = await axios.get('/data/fe-problems.json')
      setProblems(problemsData)
    } catch (err) {
      throw err;
    }
  }

  const getSimilarData = async () => {
    try {
      const { data: { data: similarProblemsData } } = await axios.get('/data/fe-similars.json')
      setSimilarProblems(similarProblemsData)
    } catch (err) {
      throw err;
    }
  }

  const addProblemData = (data, addData) => [..._.slice(data, 0, activeBtn), addData, ..._.slice(data, activeBtn)]
  const removeProblemData = (data, dataIdx) =>  _.filter(data, (d, idx) => !_.isEqual(idx, dataIdx))
  const changeProblemData = (data, dataIdx, changeData) => [..._.slice(data, 0, dataIdx), changeData, ..._.slice(data, dataIdx + 1)]

  useEffect(() => {
    getProblems()
  }, [])

  useEffect(() => {
    if (activeBtn) {
      getSimilarData()
    }
  }, [activeBtn])

  const state = {
    problems,
    similarProblems,
    activeBtn,
  }

  const actions = {
    getActive: ({ target: { value } }) => {
      setActiveBtn(value)
    },

    addSimilarPromblem: ({ target: { value } }) => {
      setProblems(addProblemData(problems, similarProblems[value - 1]))
      setSimilarProblems(removeProblemData(similarProblems, value - 1))
    },

    deleteProblem: ({ target: { value } }) => {
      setProblems(removeProblemData(problems, value - 1))
      setActiveBtn(null)
      setSimilarProblems([])
    },

    alterProblem: ({ target: { value } }) => {
      setProblems(changeProblemData(problems, activeBtn - 1, similarProblems[value - 1]))
      setSimilarProblems(changeProblemData(similarProblems, value - 1, problems[activeBtn - 1]))
    }
  }

  const value = {
    state,
    actions,
  }

  return (
    <>
    <GlobalStyles />
    <div style={{ display: 'flex' }}>
      <AppContext.Provider value={value}>
        <StudyDetail />
        <VerticalLine />
        <ProblemAlter />
      </AppContext.Provider>
    </div>
    </>
  );
}

export default App;
