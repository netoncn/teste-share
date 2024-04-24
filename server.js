const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();

app.use(cors()); // Habilita CORS para todas as rotas

app.get('/fetch-pdf', (req, res) => {
  // URL do arquivo PDF que você quer compartilhar
  const pdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  // Define o cabeçalho de Content-Type como application/pdf
  res.setHeader('Content-Type', 'application/pdf');

  // Utiliza o pacote 'request' para fazer o download do PDF e enviar como resposta
  request.get(pdfUrl).pipe(res);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});