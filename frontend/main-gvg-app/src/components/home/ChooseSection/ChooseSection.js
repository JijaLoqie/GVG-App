import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  ImageListItemBar,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
        backgroundColor: "#0d0d0d",
        height: "100vh",
        justifyContent: "center",
      }}
      component={"div"}
      columnGap={10}
    >
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          padding: "10px 0",
          boxShadow: "0 0 1em 1em #0d0d0d",
          zIndex: "100",
        }}
      >
        <Typography variant="h4" textAlign={"center"}>
          Выберите игры
        </Typography>
        <Box
          component={"div"}
          style={{
            boxShadow:
              "inset 0px 52px 4em -40px blue, inset 0px -52px 4em -40px blue",
            //   "inset 0px 22px 2em -20px blue, inset 0px -22px 2em -20px blue",
          }}
          sx={{
            border: 2,
            borderColor: "#000000",
            backgroundColor: "#313131",
          }}
        >
          <ImageList
            sx={{
              padding: "20px",
            }}
            variant="standard"
            cols={games.length}
            gap={8}
          >
            {games.map((game, index) => (
              <ImageListItem
                sx={{
                  boxShadow: `0 0 2em ${
                    selectedGames.includes(index) ? "red" : "black"
                  }`,
                  width: "200px",
                  "&:hover": {
                    md: {
                      border: "1px solid #ffffff",
                      color: "gray",
                      boxShadow: "0 0 2em #ffffff",
                    },
                  },
                }}
                key={game.img}
                onClick={() => handleSelectGame(index)}
              >
                <img
                  srcSet={`${game.img}`}
                  src={`${game.img}`}
                  alt={game.title}
                  loading="lazy"
                />
                <ImageListItemBar position="bottom" title={game.title} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        {selectedGames.length > 0 && (
          <Box
            sx={{
              borderRadius: "10px",
              backgroundColor: "gray",
              marginInline: "auto",
              "&:hover": {
                border: "1px solid #ffffff",
                backgroundColor: "lightblue",
                boxShadow: "0 0 2em #ffffff",
                color: "blue",
                cursor: "pointer",
              },
            }}
            onClick={() => navigate("/offers/constructor")}
          >
            <Typography
              sx={{
                textAlign: "center",
                padding: "10px",
              }}
            >
              Посмотреть лучшие компьютеры для этих игр
            </Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};
