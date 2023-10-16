import { Box, Grid, List, ListItem, Stack, Typography } from "@mui/material";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    icon: "/static/reviews/icons/AB.jpg",
    name: "Алексей Бодров",
    shortName: "АБ",
    photo: "/static/reviews/photos/AB1.jpg",
    review:
      "Воспользовался услугами апгрейда , ребята оперативно подобрали видеокарту 3060ti , все работает отлично , прайс тоже замечательный. Спасибо вам большое, 5⭐",
    date: "16 октября, 2023",
  },
  {
    icon: "/static/reviews/icons/NK.jpg",
    name: "Николай Картошников",
    shortName: "НК",
    photo: "/static/reviews/photos/NK1.jpg",
    review:
      "Заказал услугу чистка ПК и замена термопасты, сделали точно в срок, в моменте обсуждения деталей, я купил у них для себя новый корпус, они перекинули все детали, все работает и светится, буду у них делать скоро апгрейт))Спасибо большое!",
    date: "17 октября, 2023",
  },
  {
    icon: "/static/reviews/icons/AB.jpg",
    name: "Kventin Buratino",
    shortName: "KB",
    photo: "/static/backgrounds/background1.jpg",
    review: "You guys are great!",
    date: "1 января, 1970",
  },
];

export default ReviewSection = () => {
  return (
    <Box
      sx={{
        padding: 4,
        boxShadow:
          "inset 10px 0px 4em -4px #0d0d0d, inset 10px 0px 4em -4px #0d0d0d",
        backgroundImage: "linear-gradient(315deg, #191714 0%, #2234ae 74%)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Что думают наши клиенты
      </Typography>
      <Grid
        container
        wrap="wrap"
        sx={{
          justifyContent: "center",
          alignContent: "center",

          marginBottom: "200px",
        }}
        rowGap={5}
        columnGap={10}
      >
        {reviews.map((review, index) => (
          <Grid
            item
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "blue",
              border: 1,
              borderColor: "black",
            }}
          >
            {/* <Box
              sx={{
                backgroundColor: "#00ff00",
                width: "100px",
                height: "100px",
              }}
            ></Box> */}
            <ReviewCard reviewData={review} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
