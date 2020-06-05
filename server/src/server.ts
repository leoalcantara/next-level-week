import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Lista de usuários");

  response.json(["joao", "maria", "jose"]);
});

app.listen(3333);
