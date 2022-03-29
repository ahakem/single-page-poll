import React, { useState, useRef } from 'react'
import CreatePoll from './CreatePoll'
export default function Poll() {

  const [state, setState] = useState({
    question: "something",
    answers:{}
  });
  const onQuestionChange = (e) =>{
    setState({
      ...state,
      question: e.target.value
    })
  }
  const onAnswerChange = (e, id) =>{
    
    setState({
      ...state,
      answers: {
        ...state.answers,
        [id]:{
          ...state.answers[id],
          text: e.target.value,
        }
      }
    })
  }
  const onAddAnswer = (value) =>{
    setState({
      ...state,
      answers: {
        ...state.answers,
        [Date.now()]:{
          text: value,
          votes:0
        }
      }
    })
  }
  const onDeleteAnswer = (id) =>{
    const cloneAnswers = {...state.answers}
    delete cloneAnswers[id]
    setState({
      ...state,
      answers: cloneAnswers
    })
  }
  return (
    <div>
      <CreatePoll
        onQuestionChange={onQuestionChange}
        onAnswerChange={onAnswerChange}
        onAddAnswer={onAddAnswer}
        onDeleteAnswer={onDeleteAnswer}
        state={state}
      />
    </div>
  )
}
