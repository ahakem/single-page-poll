import React from 'react'
import CreatePoll from './CreatePoll'
import usePoll from '../../hooks/usePoll'
import Vote from './Vote'
import Chart from './Chart'

import { styled } from '@mui/material/styles';
import {Box, Paper, Grid} from '@mui/material';
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
        <Grid item xs={12} sm={12} md={6} lg={3}>
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
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Item>
            <Vote
            onVote={onVote}
            state={state} />
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Item>
          <Chart state={state} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}
