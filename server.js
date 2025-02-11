const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

// Server statiske filer fra public-mappen
app.use(express.static(path.join(__dirname, 'public')));

// Håndter rotendepunktet
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Håndter /kalender endepunktet
app.get('/kalender', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'kalender', 'index.html'));
});

// Start serveren
app.listen(port, () => {
    console.log(`Server kjører på http://localhost:${port}`);
}); 