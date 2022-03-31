import React, { useState } from 'react'
import {
  InputAdornment,
  IconButton,
  Box,
  TextField,
  Paper,
} from '@mui/material';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export default function AddOption(props) {
  const {
    onAddOption,
  } = props
  const [value, setValue] = useState("")
  const onHandleChange = (e) => {
    setValue(e.target.value)
  }
  const passOption = () => {
    onAddOption(value)
    setValue("")
  }

  return (
    <Paper elevation={8}>
      <Box p={2} mt={2}>
        <TextField
          fullWidth
          value={value}
          onChange={onHandleChange}
          label="Add Option"
          helperText={`${value.length}/80`}
          disabled={value.length === 80}
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

  )
}
