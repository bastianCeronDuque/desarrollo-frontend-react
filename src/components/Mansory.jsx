import React from "react";
import { motion } from "framer-motion";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  useTheme,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import slider1 from "../assets/slider/photo-1.avif";
import slider2 from "../assets/slider/photo-2.avif";
import slider3 from "../assets/slider/photo-3.avif";
import slider4 from "../assets/slider/photo-4.avif";
// Datos de ejemplo (reemplaza con tus imágenes de Chol-Chol)
const itemData = [
  {
    img: slider1,
    title: "Paisaje de Chol-Chol",
    author: "@turismo_chile",
    cols: 1,
  },
  {
    img: slider2,
    title: "Cultura Mapuche",
    author: "@artesania_araucania",
    cols: 1,
  },
  {
    img: slider3,
    title: "Iglesia de Chol-Chol",
    author: "@patrimonio_chile",
    cols: 1,
  },
  {
    img: slider4,
    title: "Mercado Artesanal",
    author: "@comunidad_local",
    cols: 1,
  },
  {
    img: slider1,
    title: "Gastronomía Local",
    author: "@sabores_chilenos",
    cols: 1,
  },
  {
    img: slider3,
    title: "Iglesia de Chol-Chol",
    author: "@patrimonio_chile",
    cols: 1,
  },
  {
    img: slider3,
    title: "Iglesia de Chol-Chol",
    author: "@patrimonio_chile",
    cols: 1,
  },
  {
    img: slider3,
    title: "Iglesia de Chol-Chol",
    author: "@patrimonio_chile",
    cols: 1,
  },
];

const Mansory = () => {
  const theme = useTheme();

  return (
    <motion.div id="mansory" initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration:1}} 
      style={{ 
        padding: "20px", backgroundColor: theme.palette.background.default 
      }}>
      <ImageList variant="masonry" cols={3} gap={16}>
        {itemData.map((item, index) => (
          <ImageListItem key={index} cols={item.cols || 1}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{ borderRadius: "8px", width: "100%" }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <>
                  <IconButton sx={{ color: "white" }}>
                    <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <ShareIcon />
                  </IconButton>
                </>
              }
              sx={{
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
                background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, transparent 100%)",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </motion.div>
  );
};

export default Mansory;