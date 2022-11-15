import express from "express";
import bodyParser from "body-parser";
import addRoutes from "./src/routes/productRoutes.js";
const app = express();
const PORT = 4000;
// Setup body-parser
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}...`);
  addRoutes(app);
});
