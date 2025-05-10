import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Paper,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Margin } from "@mui/icons-material";
import { motion } from "framer-motion";

const Form = () => {
  // Estados para gestionar los valores de los campos del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [pais, setPais] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [terminos, setTerminos] = useState(false);

  // Estados para gestionar los errores de validación
  const [errores, setErrores] = useState({
    nombre: "",
    email: "",
    pais: "",
    terminos: "",
  });
  //Estados para  gestionar mensaje
  const [exito, setExito] = useState(false);
  // Función para manejar los cambios en los campos de texto
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "nombre":
        setNombre(value);
        setErrores((prev) => ({
          ...prev,
          nombre: value.trim() ? "" : "El nombre es requerido",
        }));
        break;
      case "email":
        setEmail(value);
        setErrores((prev) => ({
          ...prev,
          email: !value.trim()
            ? "El email es requerido"
            : !/\S+@\S+\.\S+/.test(value)
            ? "El formato del email no es valido"
            : "",
        }));
        break;
      case "descripcion":
        setDescripcion(value);
        break;
      default:
        break;
    }
  };
  //Funcion para desabilitar el boton de formulario invalido
  const condicionFormularioValido = () => {
    return nombre.trim() && /\S+@\S+\.\S+/.test(email) && pais && terminos;
  };
  // Función para manejar el cambio en el select
  const handlePaisChange = (event) => {
    setPais(event.target.value);
  };

  // Función para manejar el cambio en el checkbox de términos
  const handleTerminosChange = (event) => {
    setTerminos(event.target.checked);
  };

  // Función para validar el formulario
  const validarFormulario = () => {
    let nuevosErrores = { nombre: "", email: "", pais: "", terminos: "" };
    let esValido = true;

    if (!nombre.trim()) {
      nuevosErrores.nombre = "El nombre es requerido";
      esValido = false;
    }

    if (!email.trim()) {
      nuevosErrores.email = "El email es requerido";
      esValido = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      nuevosErrores.email = "El formato del email no es válido";
      esValido = false;
    }

    if (!pais) {
      nuevosErrores.pais = "Selecciona un país";
      esValido = false;
    }

    if (!terminos) {
      nuevosErrores.terminos = "Debes aceptar los términos y condiciones";
      esValido = false;
    }

    setErrores(nuevosErrores);
    return esValido;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validarFormulario()) {
      console.log("Formulario enviado:", {
        nombre,
        email,
        pais,
        descripcion,
        terminos,
      });
      //Aqui muestra el mensaje de exito
      setExito(true);
      setTimeout(() => setExito(false), 3000); //se ocultara en 3segundos
      //Esto es para resetear los valores del formulario
      setNombre("");
      setEmail("");
      setPais("");
      setDescripcion("");
      setTerminos(false);
      setErrores({ nombre: "", email: "", pais: "", terminos: "" });
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      {exito && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ marginBottom: 20, color: "green", textAlign: "center" }}
        >😊✅ Formulario enviado con éxito!</motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ width: "100%", maxWidth: 500 }}
      >
        <Paper elevation={3} sx={{ p: 4 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} direction="column" maxWidth={500}>
              <Grid>
                <Typography variant="h4">Formulario de Registro</Typography>
                <TextField
                  fullWidth
                  label="Nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleChange}
                  error={!!errores.nombre}
                  helperText={errores.nombre}
                />
              </Grid>
              <Grid>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                  error={!!errores.email}
                  helperText={errores.email}
                />
              </Grid>
              <Grid>
                <FormControl fullWidth error={!!errores.pais}>
                  <InputLabel id="pais-label">País</InputLabel>
                  <Select
                    labelId="pais-label"
                    id="pais"
                    name="pais"
                    value={pais}
                    label="País"
                    onChange={handlePaisChange}
                  >
                    <MenuItem value="">Seleccionar</MenuItem>
                    <MenuItem value="chile">Chile</MenuItem>
                    <MenuItem value="argentina">Argentina</MenuItem>
                    <MenuItem value="peru">Perú</MenuItem>
                  </Select>
                  {errores.pais && (
                    <FormHelperText>{errores.pais}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid>
                <TextField
                  fullWidth
                  label="Descripción (Opcional)"
                  name="descripcion"
                  multiline
                  rows={4}
                  value={descripcion}
                  onChange={handleChange}
                />
              </Grid>
              <Grid>
                <FormControl error={!!errores.terminos}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={terminos}
                          onChange={handleTerminosChange}
                          name="terminos"
                        />
                      }
                      label="Acepto los términos y condiciones"
                    />

                    {errores.terminos && (
                      <FormHelperText>{errores.terminos}</FormHelperText>
                    )}
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={!condicionFormularioValido()}
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Form;
