import { Box, Typography, Button, Container } from "@mui/material";

const Hero = () => {
  return (
    <Box sx={{ position: "relative", height: "90vh", overflow: "hidden" }}>
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline //esto nos ayuda para visualizacion en dispositivos mobiles
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          display: "flex",
        }}
      >
        {/* <source src="https://videos.pexels.com/video-files/31950589/13612594_1920_1080_60fps.mp4" type="video/mp4" /> */}
        {
          <source
            src="https://videos.pexels.com/video-files/2330708/2330708-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        }
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Contenido superpuesto */}
      <Container
        maxWidth="lg"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
          Descubre Chol-Chol
        </Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Cultura mapuche, paisajes y tradición en el sur de Chile.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            const flechaAbajo = document.getElementById("mansory");
            flechaAbajo?.scrollIntoView({ behavior: "smooth" });
          }}
          sx={{
            bgcolor: "#3f50b5",
            fontSize: "1.2rem",
            fontWeight: "bold",
            "&:hover": { bgcolor: "#7d3269" },
            alignSelf: "center",
          }}
        >
          Explorar
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
