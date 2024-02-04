import { Typography } from '@mui/material';

const number = "+7 (999) 893-31-61"

export default function CustomTelephoneLink() {
	return (
      <Typography color="text.main" component="a" href="tel:9998933161">
        {number}
      </Typography>
  )
}
