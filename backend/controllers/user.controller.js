const User = require("../models/user.model");

const registerUser = (req, res) => {

  const {
    name,
    lastNameP,
    lastNameM,
    username,
    birthDate,
    address,
    phone,
    email,
    password,
    confirmPassword
  } = req.body;

  if (
    !name ||
    !lastNameP ||
    !lastNameM ||
    !username ||
    !birthDate ||
    !address ||
    !phone ||
    !email ||
    !password ||
    !confirmPassword
  ) {
    return res.status(400).json({
      message: "Todos los campos son obligatorios"
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Las contraseñas no coinciden"
    });
  }

  const newUser = new User(
    name,
    lastNameP,
    lastNameM,
    username,
    birthDate,
    address,
    phone,
    email,
    password
  );

  return res.status(200).json({
    message: "Usuario registrado correctamente",
    user: newUser
  });
};

// 🔐 LOGIN
const loginUser = (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Correo y contraseña obligatorios"
    });
  }

  // Simulación de validación
  if (email === "admin@gmail.com" && password === "123456") {
    return res.status(200).json({
      message: "Inicio de sesión exitoso",
      role: "admin"
    });
  }

  return res.status(401).json({
    message: "Credenciales incorrectas"
  });

};

module.exports = { registerUser, loginUser };
