import React from 'react';
import BuildsList from '../../offers/BuildsPage/BuildsList';
import { Box, Typography } from '@mui/material';

export default function BuildsSection() {
	return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "24px",
        boxShadow: "0 0 1em 1em #0d0d0d",
        zIndex: "100",
      }}
    >
      <Typography textAlign="center" variant="h3">
        Наши лучшие сборки
      </Typography>
      <BuildsList />
    </Box>
  )
}