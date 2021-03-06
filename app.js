const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const app = express();
const cadastro = require("./routes/cadastro");
const swaggerDocs = require("./swagger.json");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/docs-api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

mongoose
  .connect(
    "mongodb+srv://monara:$gW8iwdJqDVt973@cluster0.pbphd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Tô conectado com o Mongo");
  })
  .catch((erro) => {
    console.log("Não consegui me conectar com o Mongo" + erro);
  });

app.use(express.static(path.join(__dirname + "/public")));

app.use("/", cadastro);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`servidor rodando na porta http://localhost:${PORT}`);
});
