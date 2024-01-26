const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/devoirs', (req, res) => {
  const devoir = req.body;

  if (!devoir.titre || !devoir.description || !devoir.dateLimite) {
    res.status(400).json({ error: 'Les détails sont incomplets'});
  }
  
  console.log('Devoir créé :', devoir);

  res.sendStatus(201);
});

app.get('/devoirs', (req, res) => {
  const devoirs = [];

  res.json(devoirs);
});

app.post('/devoirs/:id/reponses', (req, res) => {
  const devoirId = req.params.id;
  const reponse = req.body;

  console.log('Réponse ajoutée au devoir', devoirId, ':', reponse);

  res.sendStatus(201);
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`)
});