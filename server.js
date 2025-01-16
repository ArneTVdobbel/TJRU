const express = require('express');
const app = express();
const port = 3000;

// Legg til logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.static('public'));

// Håndter 404
app.use((req, res) => {
    console.log('404:', req.url);
    res.status(404).send('Ikke funnet');
});

// Håndter feil
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Noe gikk galt!');
});

app.listen(port, () => {
    console.log(`Server kjører på http://localhost:${port}`);
}); 