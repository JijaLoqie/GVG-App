import * as React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import { red } from "@mui/material/colors"

export default function ReviewCard({ reviewData }) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{ width: 345, height: "auto", boxShadow: "0 0 2em black" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {reviewData.shortName}
          </Avatar>
        }
        title={reviewData.name}
        subheader={reviewData.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={reviewData.photo}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {reviewData.review}
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  )
}
