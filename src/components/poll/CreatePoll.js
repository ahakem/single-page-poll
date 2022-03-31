import React, { useRef } from 'react'
import {
  InputAdornment,
  IconButton,
  Box,
  TextField,
  Typography,
  Paper,
  Chip,
  Button
} from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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
  const passOption = () => {
    onAddOption(OptionRef.current.value)
    OptionRef.current.value = null
  }

  return (
    <>
      <TextField
        label="Question"
        value={state.question}
        onChange={onQuestionChange}
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
        <Paper elevation={8}>
          <Box p={2} mt={2}>
            <TextField
              fullWidth
              label="Add Option"
              inputRef={OptionRef}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={passOption}
                      onMouseDown={passOption}
                      edge="end"
                    >
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

          </Box>
        </Paper>
      }
      <Box mt={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Chip label={`${Object.keys(state.options).length}/10 possible Answers`} />
        <Button variant='outlined' onClick={onResetData}>Reset</Button>
      </Box>
    </>
  )
}
