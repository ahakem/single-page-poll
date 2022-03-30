import React, { useState, useRef } from 'react'
import CreatePoll from './CreatePoll'
import usePoll from '../../hooks/usePoll'
import Vote from './Vote'
import Chart from './Chart'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  height:'100%',
  width:'100%'
}));
export default function Poll() {
  const {
    onQuestionChange,
    onOptionChange,
    onAddOption,
    onDeleteOption,
    state,
    onResetData,
    onVote
  } = usePoll()
  return (
    <Box mt={4} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Item>
            <CreatePoll
              onQuestionChange={onQuestionChange}
              onOptionChange={onOptionChange}
              onAddOption={onAddOption}
              onDeleteOption={onDeleteOption}
              state={state}
              onResetData={onResetData}
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <Vote
            onVote={onVote}
            state={state} />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
          <Chart state={state} />
          </Item>
        </Grid>
  
        
      </Grid>
    </Box>
  )
}
