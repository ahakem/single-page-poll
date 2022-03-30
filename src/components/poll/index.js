import React, { useState, useRef } from 'react'
import CreatePoll from './CreatePoll'
import usePoll from '../../hooks/usePoll'
import Vote from './Vote'
import Chart from './Chart'
export default function Poll() {
  const {
    onQuestionChange,
    onOptionChange,
    onAddOption,
    onDeleteOption,
    state,
    onResetData,
    onVote
  } = usePoll()
  return (
    <div>
      <CreatePoll
        onQuestionChange={onQuestionChange}
        onOptionChange={onOptionChange}
        onAddOption={onAddOption}
        onDeleteOption={onDeleteOption}
        state={state}
        onResetData={onResetData}
      />
      <hr />
      <Vote
        onVote={onVote}
        state={state} />
        <hr />
        <Chart state={state} />
    </div>
  )
}
