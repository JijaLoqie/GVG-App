import { Box, Stack, Typography } from "@mui/material";
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
    <Box sx={{ padding: 4, height: "80vh" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
        }}
      >
        Что думают наши клиенты
      </Typography>
      <Stack
        direction="row"
        spacing={8}
        sx={{
          justifyContent: "center",
          marginTop: "20px",
          width: "100%",
          marginRight: 4,
        }}
      >
        {reviews.map((review, index) => (
          <ReviewCard key={index} reviewData={review} />
        ))}
      </Stack>
    </Box>
  );
};
