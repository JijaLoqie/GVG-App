import { Typography } from '@mui/material';

const number = "+7 (495) 391-41-96"

export default function CustomTelephoneLink() {
	return (
      <Typography color="text.main" component="a" href="tel:9851460477">
        {number}
      </Typography>
  )
}
