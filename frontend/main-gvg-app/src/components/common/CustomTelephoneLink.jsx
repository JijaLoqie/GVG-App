import React from 'react';

import { ThemeProvider, Typography } from '@mui/material';
import useCheckCurrentTheme from './hooks/useCheckCurrentTheme';

const number = "+7 (495) 391-41-96"
export default function CustomTelephoneLink({sx}) {
	const currentTheme = useCheckCurrentTheme()
	return (
    <ThemeProvider theme={currentTheme}>
      <Typography color="secondary.main" component="a" href="tel:9851460477">
        {number}
      </Typography>
    </ThemeProvider>
  )
}