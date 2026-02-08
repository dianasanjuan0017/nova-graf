const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

const homeRoutes = require("./routes/home.routes");
app.use("/api/home", homeRoutes);

const catalogRoutes = require("./routes/catalog.routes");
app.use("/api/catalog", catalogRoutes);

const productRoutes = require("./routes/product.routes");
app.use("/api/products", productRoutes);


app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
