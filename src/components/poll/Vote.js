import React from 'react'

export default function Vote(props) {
const {state} = props

  return (
    <ul>
    {Object.keys(state.options).map((id)=>(
        <li key={id}>{state.options[id].text} - {state.options[id].votes}</li>
    ))}

    </ul>
  )
}
