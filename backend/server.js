const express = require('express');
const app = express();

app.use(express.json());

const userRoutes = require("./routes/user.routes");

app.use("/api/users", userRoutes);

app.get('/', (req, res) => {
  res.send('Backend Nova Graf activo');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
