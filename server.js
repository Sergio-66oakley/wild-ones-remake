const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Wild Ones Remake</title>
      </head>

      <body style="font-family:Arial;text-align:center;padding:40px">
        <h1>Wild Ones Remake</h1>
        <h2>Beta 0.1</h2>

        <p>Servidor funcionando correctamente.</p>

        <p>Monedas: <strong>999999</strong></p>
        <p>Galletas: <strong>999999</strong></p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
