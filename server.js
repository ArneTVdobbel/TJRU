const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

// Server statiske filer fra public-mappen
app.use(express.static(path.join(__dirname, 'public')));

// Håndter rotendepunktet
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'splash.html'));
});

// Håndter /kalender endepunktet
app.get('/kalender', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'kalender', 'index.html'));
});

// Håndter klikk1 og klikk2
app.get('/kalender/klikk1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'kalender', 'klikk1.html'));
});

app.get('/kalender/klikk2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'kalender', 'klikk2.html'));
});

// Start serveren
app.listen(port, () => {
    console.log(`Server kjører på http://localhost:${port}`);
}); 