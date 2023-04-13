import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LoginButton from "./LoginButton";
import UserNameField from "./UserNameField";
import PasswordValidation from "./PasswordValidation";

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 530,
          height: 300,
          marginLeft:50,
          marginRight: 50,
          marginTop: 20,
        },
      }}
    >
      <Paper elevation={3}>
      <UserNameField/>
      <PasswordValidation />
      <LoginButton />
      </Paper>
      
    </Box>
  );
}