import React, { useState } from "react"

import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  ImageListItemBar,
  Grid,
} from "@mui/material"
import { useNavigate } from "react-router-dom"

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
]

export default function ChooseSection() {
  const navigate = useNavigate()
  const [selectedGames, setSelectedGames] = useState([])

  const handleSelectGame = (index) => {
    if (selectedGames.includes(index)) {
      setSelectedGames(selectedGames.filter((gameIndex) => gameIndex !== index))
    } else {
      setSelectedGames([...selectedGames, index])
    }
  }

  return (
    <Grid
      columnGap={10}
      component="div"
      container
      sx={{
        backgroundColor: "#0d0d0d",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        md={12}
        sx={{
          padding: "10px 0",
        }}
        xs={12}
      >
        <Typography textAlign="center" variant="h4">
          Выберите игры
        </Typography>
        <Box
          component="div"
          id="gradient"
          style={{
            backgroundColor: "#2234ae",
            backgroundImage: "linear-gradient(315deg, #191714 0%, #2234ae 74%)",

            boxShadow:
              "inset 0px 10px 4em -4px #0d0d0d, inset 0px -10px 4em -4px #0d0d0d",
          }}
          sx={{
            border: 2,
            borderColor: "#000000",
            backgroundColor: "#313131",
          }}
        >
          <ImageList
            cols={games.length}
            gap={8}
            sx={{
              padding: "20px",
            }}
            variant="standard"
          >
            {games.map((game, index) => (
              <ImageListItem
                key={game.img}
                onClick={() => handleSelectGame(index)}
                sx={{
                  boxShadow: `0 0 2em ${
                    selectedGames.includes(index) ? "red" : "black"
                  }`,
                  width: "250px",
                  maxHeight: "444px",
                  "&:hover": {
                    md: {
                      //   border: "1px solid #ffffff",
                      color: "gray",
                      boxShadow: selectedGames.includes(index)
                        ? "0 0 2em orange"
                        : "0 0 1em #ffffff",
                    },
                  },
                }}
              >
                <img
                  alt={game.title}
                  loading="lazy"
                  src={`${game.img}`}
                  srcSet={`${game.img}`}
                  style={{ objectFit: "cover", height: "444px" }}
                />
                <ImageListItemBar position="bottom" title={game.title} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        {/* Box below is Visible, if games selected */}
        <Box
          onClick={() => navigate("/offers/constructor")}
          sx={{
            visibility: selectedGames.length > 0 ? "visible" : "hidden",
            margin: "10px",
            width: "50vw",
            backgroundColor: selectedGames.length > 0 ? "blue" : "#0d0d0d",
            color: selectedGames.length > 0 ? "#ffffff" : "#0d0d0d",
            borderRadius: "10px",
            marginInline: "auto",
            transition: "all 0.3s",
            "&:hover": {
              backgroundColor: "lightblue",
              boxShadow: "0 0 2em #ffffff",
              color: "blue",
              cursor: "pointer",
            },
          }}
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
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography textAlign="center" variant="h4">
            Мы анализируем требования к играм и подбираем для вас наиболее
            подходящие сборки
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
