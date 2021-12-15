import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircleLoader() {
  return (
    <Box sx={{ display: 'flex',aligItems:"center",justifyContent:"center",padding:2 }}>
      <CircularProgress />
    </Box>
  );
}
