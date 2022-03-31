import React from 'react'
import {
  Box,
  Alert
} from '@mui/material';
export default function NoVote() {

  return (
    <Box>
      <Alert severity="info">No valid vote yet, you have to write a question and to two options.</Alert>
    </Box>
  )
}
