import React, { useRef } from 'react'

export default function CreatePoll(props) {
  const {
    onQuestionChange,
    onOptionChange,
    onAddOption,
    onDeleteOption,
    state,
  } = props

  const OptionRef = useRef(null)
  
  const passOption = () =>{
    onAddOption(OptionRef.current.value)
    OptionRef.current.value = null
  }
  React.useEffect(() => {
    console.log(state)
  }, [state.Options])
  
  return (
    <>
    <div>
      <div>
        <label>Write Q?</label>
        <input value={state.question} onChange={onQuestionChange} type="text" />
      </div>
      <hr/>
      {
        Object.keys(state.Options).map((id) => (
          <div key={id}>
            <input onChange={(e)=>onOptionChange(e, id)} value={state.Options[id].text} type="text" />
            <button onClick={()=>{onDeleteOption(id)}} >x</button>
      </div>
        ))
      }
      {Object.keys(state.Options).length < 10 &&
      <div>
        <input ref={OptionRef} type="text" />
        <button onClick={passOption}>Add</button>
      </div>
      }
    </div>

    </>
  )
}
