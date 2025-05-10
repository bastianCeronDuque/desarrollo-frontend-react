import React from 'react';
import { Box, Typography } from '@mui/material';

// Componente Footer: Representa el pie de página de la aplicación
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', py: 2, textAlign: 'center' }}>
      {/* Texto del pie de página */}
      <Typography variant="body2">
        © 2025 Chol-Chol. Todos los derechos reservados. Powered by BCStudio
      </Typography>
    </Box>
  );
};

export default Footer; // Exporta el componente Footer
