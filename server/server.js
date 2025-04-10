// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Permite que las solicitudes de otros puertos se realicen
app.use(express.json()); // Para poder analizar los datos JSON en el cuerpo de las solicitudes

// Rutas de autenticación
app.post('/api/auth/register', (req, res) => {
  const { email, password } = req.body;

  // Verificación simple (agrega validación más robusta según lo necesites)
  if (!email || !password) {
    return res.status(400).json({ message: 'El correo electrónico y la contraseña son obligatorios.' });
  }

  // Simulamos una respuesta exitosa
  return res.status(201).json({ message: 'Usuario registrado correctamente' });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'El correo electrónico y la contraseña son obligatorios.' });
  }

  // Aquí debes verificar las credenciales con tu base de datos y devolver un token JWT si es válido.
  return res.status(200).json({ message: 'Inicio de sesión exitoso', token: 'fake-jwt-token' });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
