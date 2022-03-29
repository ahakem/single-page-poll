import React, { useState, useRef } from 'react'
import CreatePoll from './CreatePoll'
import usePoll from '../../hooks/usePoll'
export default function Poll() {
  const {
    onQuestionChange,
    onOptionChange,
    onAddOption,
    onDeleteOption,
    state,
  } = usePoll()
  return (
    <div>
      <CreatePoll
        onQuestionChange={onQuestionChange}
        onOptionChange={onOptionChange}
        onAddOption={onAddOption}
        onDeleteOption={onDeleteOption}
        state={state}
      />
    </div>
  )
}
