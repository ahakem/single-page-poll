import React, { useState } from 'react'

export default function Vote(props) {
  const { state, onVote } = props
  const [answer, setAnswer] = useState(null)
  const sendVote = (answer) =>{
    onVote(answer)
    setAnswer(null)
  }
  return (
    <div>
      {Object.keys(state.options).map((id) => (
        <div key={id}>
          <input 
            onChange={()=> setAnswer(id)} 
            type="radio" 
            id={id} 
            name="option" 
            value={id}
            checked={answer === id}
             />
          <label htmlFor={id}>{state.options[id].text} - {state.options[id].votes}</label>
        </div>
      ))}
      <button onClick={()=>sendVote(answer)} disabled={!answer}>Vote</button>
      Total Votes = <b>{state.totalVotes}</b>
    </div>
  )
}
