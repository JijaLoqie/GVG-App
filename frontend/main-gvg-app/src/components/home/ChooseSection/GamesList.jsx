import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import React, { useState } from "react"
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

export default function GamesList() {
  const [selectedGames, setSelectedGames] = useState([])

  const handleSelectGame = (index) => {
    if (selectedGames.includes(index)) {
      setSelectedGames(selectedGames.filter((gameIndex) => gameIndex !== index))
    } else {
      setSelectedGames([...selectedGames, index])
    }
  }
  return (
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
		height: "100%",
        border: 2,
        borderColor: "#000000",
        backgroundColor: "#313131",
        borderRight: "2px solid rgb(212, 212, 212)",
      }}
    >
      <ImageList
        cols={games.length / 3}
        sx={{
          padding: "20px",
        }}
        variant="normal"
      >
        {games.map((game, index) => (
          <ImageListItem
            key={game.img}
            onClick={() => handleSelectGame(index)}
            sx={{
              boxShadow: `0 0 2em ${
                selectedGames.includes(index) ? "red" : "black"
              }`,
              width: "125px",
              maxHeight: "125px",
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
              style={{ objectFit: "cover", height: "125px" }}
            />
            <ImageListItemBar position="bottom" title={game.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}
