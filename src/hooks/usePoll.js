import { useState } from "react";

const usePoll = () => {
  const [state, setState] = useState({
    question: "something",
    Options: {}
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
      Options: {
        ...state.Options,
        [id]: {
          ...state.Options[id],
          text: e.target.value,
        }
      }
    })
  }
  const onAddOption = (value) => {
    setState({
      ...state,
      Options: {
        ...state.Options,
        [Date.now()]: {
          text: value,
          votes: 0
        }
      }
    })
  }
  const onDeleteOption = (id) => {
    const cloneOptions = { ...state.Options }
    delete cloneOptions[id]
    setState({
      ...state,
      Options: cloneOptions
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