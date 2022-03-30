import React from 'react'

export default function Vote(props) {
  const { state } = props
const percentage = (partialValue) => (100 * partialValue) / state.totalVotes
  return (
    <div>
        <ul>
           {Object.keys(state.options).map((id) => (
        <li key={id}>
          {state.options[id].text} - {state.options[id].votes} - {percentage(state.options[id].votes).toFixed(2)}
        </li>
       
      ))}
       </ul>
      Total Votes = <b>{state.totalVotes}</b>
    </div>
  )
}
