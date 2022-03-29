import { useState } from "react";

const usePoll = () => {
  const [state, setState] = useState({
    question: "something",
    options: {}
  });
  const onQuestionChange = (e) => {
    setState({
      ...state,
      question: e.target.value
    })
  }
  const onOptionChange = (e, id) => {
    setState({
      ...state,
      options: {
        ...state.options,
        [id]: {
          ...state.options[id],
          text: e.target.value,
        }
      }
    })
  }
  const onAddOption = (value) => {
    setState({
      ...state,
      options: {
        ...state.options,
        [Date.now()]: {
          text: value,
          votes: 0
        }
      }
    })
  }
  const onDeleteOption = (id) => {
    const cloneOptions = { ...state.options }
    delete cloneOptions[id]
    setState({
      ...state,
      options: cloneOptions
    })
  }
  return {
    onQuestionChange,
    onOptionChange,
    onAddOption,
    onDeleteOption,
    state,
  }
}
export default usePoll;