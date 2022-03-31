import React from 'react'
import {
  Box,
  Chip,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: '#eee',
  // padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  height: 300,
  width: '100%',
  position: 'relative',
  display:'flex',
  justifyContent:'center',
  paddingTop:10,
}));
const Bar = styled(Box)(({ theme }) => ({
  backgroundColor: '#f00',
  color: theme.palette.text.secondary,
  height: '50%',
  width: '100%',
  bottom: 0,
  position: "absolute"

}));

export default function Vote(props) {
  const { state } = props
  const percentage = (partialValue) => (100 * partialValue) / state.totalVotes
  return (
    <Box >
      <Chip label={` Total Votes = ${state.totalVotes}`} />
      <Box mt={3} sx={{ display: 'flex', gap: "10px" }}>
        {Object.keys(state.options).map((id) => (
          <Item>
            <Chip label={state.options[id].votes} />
            <Bar sx={{ height: `${percentage(state.options[id].votes).toFixed(2)}%`, background: state.options[id].color }} ></Bar>
          </Item>
        ))}

        {/* <ul>
        {Object.keys(state.options).map((id) => (
          <li key={id}>
            {state.options[id].text} - {state.options[id].votes} - {percentage(state.options[id].votes).toFixed(2)}
          </li>

        ))}
      </ul> */}

      </Box>
      
    </Box>
  )
}
