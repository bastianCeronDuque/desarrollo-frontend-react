import React, { useState, useEffect } from "react";
import {
  Link,
  Button,
  TextField,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@mui/material/Modal";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import slider3 from "../assets/slider/photo-3.avif";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const barraLinks = [
    { label: "Cosas para hacer", href: "#servicios" },
    { label: "Comer/Beber", href: "#servicios" },
    { label: "Eventos", href: "#servicios" },
    { label: "Planifica tu visita!", href: "#servicios" },
  ];
  const barraLinksSuperior = [
    { label: "Reuniones", href: "#servicios" },
    { label: "Viajes de comercio o negocios", href: "#servicios" },
    { label: "Miembros", href: "#servicios" },
    { label: "Prensa", href: "#servicios" },
    { label: "Deportes", href: "#servicios" },
  ];
  /**
   * Función para alternar el estado del Drawer
   * @param {boolean} open - Estado del Drawer
   */
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    const ultimaVista = localStorage.getItem("ultimaVista");
    const hoy = new Date().toDateString();
    if (!ultimaVista || ultimaVista !== hoy) {
      setModalOpen(true);
      localStorage.setItem("ultimaVista", "true");
      
    }
    const temporizador = setTimeout(() => {
      setModalOpen(true);
    }, 10000);
    if (!isMobile) {
      setModalOpen(true);
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return (
      () => clearTimeout(temporizador),
      window.removeEventListener("scroll", handleScroll)
    );
  }, [isMobile]);
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(10px",
          transition: "box-shadow 0.3s",
          boxShadow: scrolled ? "0 4px 12px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            backgroundColor: "#466E82",
            width: "100vw",
            height: "40px",
            flexFlow: "row wrap",
            justifyContent: "center",
            "& > a": {
              color: "#fff",
              fontSize: "17px",
              lineHeight: 1.35,
              fontWeight: 700,
              letterSpacing: "0.3px",
              paddingRight: "22px",
              paddingLeft: "22px",
              textDecoration: "none",
              transition: "color 1.5s",
              paddingTop: "7px",
              cursor: "pointer",
              textTransform: "uppercase",
              "&:hover": {
                backgroundColor: "#7d3269",
                transition: "background-color 0.9s",
              },
            },
          }}
        >
          {/* Links para barra superior */}
          {barraLinksSuperior.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </Box>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,

              "& > a": {
                marginRight: 2,
                color: "text.primary",
                textDecoration: "none",
                transition: "color 0.3s",
                "&:hover": { color: "#7d3269" },
              },
            }}
          >
            <Avatar
              alt="Logo"
              src="./logotipo/logotipo.png"
              sx={{ width: 62, height: 62, marginRight: 2 }}
            />
            {/* Título del encabezado */}
            <Typography variant="h6" color="text.primary">
              Chol-Chol
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              flexGrow: 1,
              alignItems: "center",
              gap: "16px",
              fontSize: "21px",
              position: "relative",
              height: "100%",
              "&>a": {
                color: "text.primary",
                textDecoration: "none",
                transition: "color 0.3s",
                position: "relative",
                padding: "8px 0",
                "&:hover": {
                  color: "#7d3269",
                  transition: "color 0.5s",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#7d3269",
                  transform: "scaleX(0)",
                  transition: "transform 0.5s ease-in-out",
                },
                "&:hover::after": {
                  transform: "scaleX(1)",
                },
              },
            }}
          >
            {/*Inicio ciclo para enlaces de navegación */}
            {barraLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
            {/*Fin ciclo para enlaces de navegación */}
            {isMobile ? (
              // ✅ Floating Button en móvil
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 2,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    position: "fixed",
                    bottom: 10,
                    right: 10,
                    borderRadius: "50px",
                    textTransform: "none",
                    zIndex: 1300,
                  }}
                  onClick={() => setModalOpen(true)}
                >
                  Reserva
                </Button>
              </Box>
            ) : (
              // ✅ Botón normal en desktop
              <Button
                variant="contained"
                color="primary"
                sx={{
                  textTransform: "none",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  color: "#3f51b5",
                  border: "2px solid #3f51b5",
                }}
                onClick={() => setModalOpen(true)}
              >
                Reserva tu estancia
              </Button>
            )}
          </Box>
          {/* Botón para abrir el menú en dispositivos pequeños */}
          <IconButton
            color="Black"
            edge="end"
            aria-label="Abrir menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Drawer para navegación en dispositivos pequeños */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        transitionDuration={300}
      >
        <List>
          {[...barraLinksSuperior, ...barraLinks].map((link) => (
            <ListItem key={link.label} button component="a" href={link.href}>
              <ListItemText primary={link.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <AnimatePresence>
        {modalOpen && (
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Card
                variant="outlined"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  borderRadius: 3,
                }}
              >
                <CardOverflow>
                  <AspectRatio ratio="2">
                    <img src={slider3} loading="lazy" alt="" />
                  </AspectRatio>
                </CardOverflow>
                <CardContent>
                  <Typography
                    id="modal-title"
                    variant="h6"
                    component={"h2"}
                    gutterBottom
                  >
                    Suscribete al newsletter de Chol-Chol
                  </Typography>
                </CardContent>
                <TextField fullWidth label="Nombre" margin="normal" />
                <TextField fullWidth label="Email" margin="normal" />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={() => {
                    alert("Gracias por suscribirte!");
                    setModalOpen(false);
                  }}
                >
                  Suscribirse
                </Button>
                <CardOverflow
                  variant="soft"
                  sx={{ bgcolor: "background.level1" }}
                >
                  <Divider inset="context" />
                  <CardContent orientation="horizontal">
                    <Typography
                      level="body-xs"
                      sx={{ fontWeight: "md", color: "text.secondary" }}
                    >
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Si, quiero recibir informacion sobre Chol-Chol"
                      />
                    </Typography>
                  </CardContent>
                </CardOverflow>
              </Card>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
