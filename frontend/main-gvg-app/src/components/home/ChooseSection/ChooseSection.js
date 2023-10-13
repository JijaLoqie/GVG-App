import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  ImageListItemBar,
  Grid,
} from "@mui/material";
import { useState } from "react";

const games = [
  {
    img: "/static/games/dota2.jpg",
    title: "Dota 2",
    author: "swabdesign",
  },
  {
    img: "/static/games/worldoftanks.jpg",
    title: "World of tanks",
    author: "Pavel Nekoranec",
  },

  {
    img: "/static/games/warface.jpg",
    title: "Warface",
    author: "Jen P.",
  },
  {
    img: "/static/games/fortnite.png",
    title: "Fortnite",
    author: "Taylor Simpson",
  },
  {
    img: "/static/games/escapefromtarkov.jpg",
    title: "Escape From Tarkov",
    author: "Hutomo Abrianto",
  },
  {
    img: "/static/games/pubg.jpg",
    title: "PUBG",
    author: "Christian Mackie",
  },
  {
    img: "/static/games/rust.jpg",
    title: "Rust",
    author: "Ben Kolde",
  },
  {
    img: "/static/games/cyberpank.jpg",
    title: "Cyberpunk 2077",
    author: "Philipp Berndt",
  },
  {
    img: "/static/games/csgo.jpg",
    title: "CS:GO",
    author: "Charles Deluvio",
  },
  {
    img: "/static/games/apexlegend.webp",
    title: "Apex Legend",
    author: "Fi Bell",
  },
  {
    img: "/static/games/overwatch2.jpeg",
    title: "Overwatch",
    author: "Douglas Sheppard",
  },
  {
    img: "/static/games/minecraft.webp",
    title: "Minecraft",
    author: "Darren Richardson",
  },
];
const builds = [
  {
    img: "/static/builds/build1.jpg",
    title: "Супер компьютер",
    author: "swabdesign",
  },
  {
    img: "/static/builds/build2.jpg",
    title: "Компьютер клана Акацки",
    author: "swabdesign",
  },
  {
    img: "/static/builds/build3.jpg",
    title: "Сорткар зверь",
    author: "swabdesign",
  },
];

export default ChooseSection = () => {
  const [selectedGames, setSelectedGames] = useState([]);

  const handleSelectGame = (index) => {
    if (selectedGames.includes(index)) {
      setSelectedGames(
        selectedGames.filter((gameIndex) => gameIndex !== index)
      );
    } else {
      setSelectedGames([...selectedGames, index]);
    }
  };
  return (
    <Grid
      container
      sx={{
        padding: { md: 4, xs: "0" },
        height: "100vh",
        justifyContent: "center",
      }}
      columnGap={10}
    >
      <Grid item xs={12} md={5}>
        <Typography variant="h4" textAlign={"center"}>
          Выберите игры
        </Typography>
        <Box
          sx={{
            height: { xs: "400px", md: "80vh" },
            // overflow: { xs: "auto", md: "hidden" },
			overflow: "auto",
            border: { xs: 2, md: 0 },
            borderColor: "#ffffff",
          }}
        >
          <ImageList variant="masonry" cols={3} gap={8}>
            {games.map((game, index) => (
              <ImageListItem
                sx={{
                  border: selectedGames.includes(index) ? 3 : 0,
                  borderColor: "#ff0000",
                }}
                key={game.img}
                onClick={() => handleSelectGame(index)}
              >
                <img
                  srcSet={`${game.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${game.img}?w=248&fit=crop&auto=format`}
                  alt={game.title}
                  loading="lazy"
                />
                <ImageListItemBar position="below" title={game.title} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography variant="h4" textAlign={"center"}>
          Мы подбираем лучшее
        </Typography>
        <ImageList variant="masonry" cols={3} gap={8}>
          {builds.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar position="below" title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
};
