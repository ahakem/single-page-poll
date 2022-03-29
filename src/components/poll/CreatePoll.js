import React, { useRef } from 'react'

export default function CreatePoll(props) {
  const {
    onQuestionChange,
    onAnswerChange,
    onAddAnswer,
    onDeleteAnswer,
    state,
  } = props

  const answerRef = useRef(null)
  
  const passAnswer = () =>{
    onAddAnswer(answerRef.current.value)
    answerRef.current.value = null
  }
  React.useEffect(() => {
    console.log(state)
  }, [state.answers])
  
  return (
    <>
    <div>
      <div>
        <label>Write Q?</label>
        <input value={state.question} onChange={onQuestionChange} type="text" />
      </div>
      <hr/>
      {
        Object.keys(state.answers).map((id) => (
          <div key={id}>
            <input onChange={(e)=>onAnswerChange(e, id)} value={state.answers[id].text} type="text" />
            <button onClick={()=>{onDeleteAnswer(id)}} >x</button>
      </div>
        ))
      }
      {Object.keys(state.answers).length < 10 &&
      <div>
        <input ref={answerRef} type="text" />
        <button onClick={passAnswer}>Add</button>
      </div>
      }
    </div>

    </>
  )
}
