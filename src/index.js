import Fastify from "fastify";

const app = Fastify();

app.listen({ port: 3000 }, function (error, adress) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  console.log("Servidor rodando na porta =>", adress);
});
