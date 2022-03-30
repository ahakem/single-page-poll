import { useState } from "react";

const usePoll = () => {
  const initialstate = {
    question: "",
    options: {},
    totalVotes : 0
  }
  const [state, setState] = useState(initialstate);
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
  const onResetData = () => {
    setState(initialstate)
  }
  const onVote =(id) =>{
    setState({
      ...state,
      totalVotes: state.totalVotes + 1,
      options: {
        ...state.options,
        [id]: {
          ...state.options[id],
          votes: state.options[id].votes + 1
        }
      }
    })
  }
  return {
    onQuestionChange,
    onOptionChange,
    onAddOption,
    onDeleteOption,
    state,
    onResetData,
    onVote
  }
}
export default usePoll;