import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const fuenteVideos = [
  "https://videos.pexels.com/video-files/27118848/12078068_2560_1440_60fps.mp4",
  "https://videos.pexels.com/video-files/5790147/5790147-hd_1920_1080_30fps.mp4",
  "https://videos.pexels.com/video-files/2330708/2330708-uhd_2560_1440_24fps.mp4",
];

const Hero = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef(null);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const handleEnded = () => {
      setFade(true);
      setTimeout(() => {
        const nextIndex = (videoIndex + 1) % fuenteVideos.length;
        setVideoIndex(nextIndex);
        setFade(false);
      }, 1000);
    };

    video?.addEventListener("ended", handleEnded);
    return () => video?.removeEventListener("ended", handleEnded);
  }, [videoIndex]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play().catch((err) => {
        console.error("Error al reproducir el video:", err);
      });
    }
  }, [videoIndex]);
  return (
    <Box sx={{ position: "relative", height: "90vh", overflow: "hidden" }}>
      <video
        ref={videoRef}
        src={fuenteVideos[videoIndex]}
        autoPlay
        muted
        preload="metadata"
        playsInline
        style={{
          position: "absolute",
          display:"flex",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 1s ease-in-out",
          opacity: fade ? 0 : 1,
          zIndex: -1,
        }}
      />
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
