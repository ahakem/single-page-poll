import React, { useRef } from 'react'

export default function CreatePoll(props) {
  const {
    onQuestionChange,
    onOptionChange,
    onAddOption,
    onDeleteOption,
    state,
    onResetData
  } = props

  const OptionRef = useRef(null)
  const passOption = () =>{
    onAddOption(OptionRef.current.value)
    OptionRef.current.value = null
  }
  React.useEffect(() => {
    console.log(state)
  }, [state.options])
  
  return (
    <>
    <div>
      <div>
        <label>Write Q?</label>
        <input value={state.question} onChange={onQuestionChange} type="text" />
      </div>
      <hr/>
      {
        Object.keys(state.options).map((id) => (
          <div key={id}>
            <input onChange={(e)=>onOptionChange(e, id)} value={state.options[id].text} type="text" />
            <button onClick={()=>{onDeleteOption(id)}} >x</button>
      </div>
        ))
      }
      {Object.keys(state.options).length < 10 &&
      <div>
        <input ref={OptionRef} type="text" />
        <button onClick={passOption}>Add</button>
      </div>
      }
      <p>{Object.keys(state.options).length}/10 possible Answers</p>
    </div>
      <button onClick={onResetData}>Reset</button>
    </>
  )
}
