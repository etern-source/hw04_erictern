import express from 'express';

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', async(req, res) => {

   let url = 'https://en.wikipedia.org/api/rest_v1/page/summary/Systems_development_life_cycle';
   let response = await fetch(url);
   let data = await response.json();

   console.log(data);
   res.render('index', {extract: data.extract});
});

app.get('/layers', (req, res) => {
   res.render('layers');
});

app.get('/implementation', (req, res) => {
   res.render('implementation');
});

app.get('/sources', (req, res) => {
   res.render('sources');
});

app.listen(3000, () => {
   console.log('server started');
});
