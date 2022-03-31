import React, { useState } from 'react'
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
} from '@mui/material';
import NoVote from './NoVote';
export default function Vote(props) {
  const { state, onVote } = props
  const [answer, setAnswer] = useState(null)
  const sendVote = (answer) => {
    onVote(answer)
    setAnswer(null)
  }
  const handleChange = (event) => {
    setAnswer(event.target.value);
  };
  if (Object.keys(state.options).length < 2 || state.question === "") {
    return <NoVote />
  }
  return (
    <Box>
      <Typography variant='h4'>{state.question}</Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={answer}
          name="radio-buttons-group"
          onChange={handleChange}
        >
          {Object.keys(state.options).map((id) => (
            <FormControlLabel
              key={id}
              value={id}
              control={<Radio />}
              label={state.options[id].text} />
          ))}

        </RadioGroup>
      </FormControl>
      <Box mt={2} sx={{ textAlign: "right" }}>
        <Button variant='contained' onClick={() => sendVote(answer)} disabled={!answer}>Vote</Button>
      </Box>

    </Box>
  )
}
