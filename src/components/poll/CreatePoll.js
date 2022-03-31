import React, { useRef } from 'react'
import {
  InputAdornment,
  IconButton,
  Box,
  TextField,
  Typography,
  Chip,
  Button
} from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddOption from './AddOption';
export default function CreatePoll(props) {
  const {
    onQuestionChange,
    onOptionChange,
    onAddOption,
    onDeleteOption,
    state,
    onResetData
  } = props


  return (
    <>
      <TextField
        label="Question"
        value={state.question}
        onChange={onQuestionChange}
        helperText={`${state.question.length}/80`}
        disabled={state.question.length === 80}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <QuestionMarkIcon />
            </InputAdornment>
          ),
        }}
      />
      <Box mt={2}>
        <Typography> Answers</Typography>
        {Object.keys(state.options).map((id) => (
          <Box key={id} mt={2}>
            <TextField
              value={state.options[id].text}
              onChange={(e) => onOptionChange(e, id)}
              fullWidth
              helperText={`${state.options[id].text.length}/80`}
              disabled={state.options[id].text.length === 80}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => { onDeleteOption(id) }}
                      onMouseDown={() => { onDeleteOption(id) }}
                      edge="end"
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        ))
        }
      </Box>
      {Object.keys(state.options).length < 10 &&
        <AddOption onAddOption={onAddOption} />
      }
      <Box mt={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Chip label={`${Object.keys(state.options).length}/10 possible Answers`} />
        <Button variant='outlined' onClick={onResetData}>Reset</Button>
      </Box>
    </>
  )
}
