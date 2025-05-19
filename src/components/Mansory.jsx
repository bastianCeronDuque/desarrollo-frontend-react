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
import slider1 from "../assets/img/banner-circulacion-25.jpg";
import slider2 from "../assets/img/img-sabores-chilenos.jpeg";
import slider3 from "../assets/img/img-bote.jpeg";
import slider4 from "../assets/img/img-mercado.jpeg";
import slider5 from "../assets/img/img-pinones.jpeg";
import slider6 from "../assets/img/img-iglesia.jpeg";
import slider7 from "../assets/img/img-acondicionamiento.jpg";
import slider8 from "../assets/img/img-municipalidad-cielo.png";
import slider9 from "../assets/img/img-ciudad-cielo.jpg";
// Datos de ejemplo (reemplaza con tus imágenes de Chol-Chol)
const itemData = [
  {
    img: slider1,
    title: "Paga aqui tu permiso de circulacion",
    author: "@chol-chol.cl",
    cols: 1,
  },
  {
    img: slider5,
    title: "Cultura Mapuche",
    author: "@comida_araucania",
    cols: 1,
  },
  {
    img: slider3,
    title: "Paisaje de Chol-Chol",
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
    img: slider2,
    title: "Gastronomía Local",
    author: "@sabores_chilenos",
    cols: 1,
  },
  {
    img: slider6,
    title: "Iglesia de Chol-Chol",
    author: "@patrimonio_chile",
    cols: 1,
  },
  {
    img: slider7,
    title: "Acondicionamiento fisico",
    author: "@Accion",
    cols: 1,
  },
  {
    img: slider8,
    title: "Municipalidad de Chol-Chol",
    author: "@patrimonio_chile",
    cols: 1,
  },
  {
    img: slider9,
    title: "Ciudad de Chol-Chol",
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