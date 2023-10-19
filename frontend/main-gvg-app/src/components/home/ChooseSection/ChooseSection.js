import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  ImageListItemBar,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
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

// just script for gradient
//   useEffect(() => {
//     var colors = new Array(
//       [62, 35, 255],
//       [60, 255, 60],
//       [255, 35, 98],
//       [45, 175, 230],
//       [255, 0, 255],
//       [255, 128, 0]
//     );

//     var step = 0;
//     //color table indices for:
//     // current color left
//     // next color left
//     // current color right
//     // next color right
//     var colorIndices = [0, 1, 2, 3];

//     //transition speed
//     var gradientSpeed = 0.002;

//     function updateGradient() {
//       if ($ === undefined) return;

//       var c0_0 = colors[colorIndices[0]];
//       var c0_1 = colors[colorIndices[1]];
//       var c1_0 = colors[colorIndices[2]];
//       var c1_1 = colors[colorIndices[3]];

//       var istep = 1 - step;
//       var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
//       var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
//       var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
//       var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

//       var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
//       var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
//       var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
//       var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

//       $("#gradient")
//         .css({
//           background:
//             "-webkit-gradient(linear, left top, right top, from(" +
//             color1 +
//             "), to(" +
//             color2 +
//             "))",
//         })
//         .css({
//           background:
//             "-moz-linear-gradient(left, " +
//             color1 +
//             " 0%, " +
//             color2 +
//             " 100%)",
//         });

//       step += gradientSpeed;
//       if (step >= 1) {
//         step %= 1;
//         colorIndices[0] = colorIndices[1];
//         colorIndices[2] = colorIndices[3];

//         //pick two new target color indices
//         //do not pick the same as the current one
//         colorIndices[1] =
//           (colorIndices[1] +
//             Math.floor(1 + Math.random() * (colors.length - 1))) %
//           colors.length;
//         colorIndices[3] =
//           (colorIndices[3] +
//             Math.floor(1 + Math.random() * (colors.length - 1))) %
//           colors.length;
//       }
//     }

//     setInterval(updateGradient, 10);
//   }, []);
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#0d0d0d",
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
          id={"gradient"}
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
                key={game.img}
                onClick={() => handleSelectGame(index)}
              >
                <img
                  srcSet={`${game.img}`}
                  src={`${game.img}`}
                  alt={game.title}
                  loading="lazy"
                  style={{ objectFit: "cover", height: "444px" }}
                />
                <ImageListItemBar position="bottom" title={game.title} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        {/* Box below is Visible, if games selected */}
        <Box
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
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography variant="h4" textAlign="center">
            Мы анализируем требования к играм и подбираем для вас наиболее
            подходящие сборки
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
