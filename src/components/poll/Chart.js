import React from 'react'
import {
  Box,
  Chip,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Box)(() => ({
  height: 350,
  width: 55,
  display: 'flex',
  paddingTop: 10,
  flexDirection: 'column',
}));
const BarWraper = styled(Box)(() => ({
  backgroundColor: '#eee',
  position: 'relative',
  flexDirection: 'row',
  display: 'flex'
}));
const Bar = styled(Box)(() => ({
  height: '50%',
  width: 30,
  bottom: 0,
  left: 25,
  position: "absolute",
  zIndex: 1

}));
const OptionText = styled(Box)(() => ({
  whiteSpace: 'nowrap',
  transform: 'rotate(-90deg)',
  transformOrigin: '0 0',
  bottom: -23,
  left: 0,
  position: "absolute",
  letterSpacing: '2px',
  textTransform: 'uppercase'

}));

export default function Vote(props) {
  const { state } = props
  const percentage = (partialValue) => (100 * partialValue) / state.totalVotes
  return (
    <Box >
      <Typography sx={{ marginBottom: '10px' }} variant='h4'>{state.question}</Typography>
      <Chip label={` Total Votes = ${state.totalVotes}`} />
      <Box mt={3} sx={{ display: 'flex', gap: "10px" }}>
        {Object.keys(state.options).map((id) => (
          <Item key={id}>
            <Box display="flex" justifyContent="center"><Chip label={state.options[id].votes} /></Box>
            <BarWraper my={2} display="flex" flexGrow={1}>
              <Box><OptionText flexGrow={0} display="flex" justifyContent="center">{state.options[id].text}</OptionText></Box>
              <Box><Bar sx={{ height: `${percentage(state.options[id].votes).toFixed(2)}%`, background: state.options[id].color }} /></Box>
            </BarWraper>
          </Item>
        ))}
      </Box>

    </Box>
  )
}
