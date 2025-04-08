var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3001;

// Statikus fájlok kiszolgálása a public mappából
app.use(express.static(path.join(__dirname, 'public')));

// data.json kiszolgálása
app.get('/api/patients', function(req, res) {
  res.sendFile(path.join(__dirname, 'data.json'));
});

// Szerver indítása
app.listen(port, function() {
  console.log(`Szerver fut a http://localhost:${port}`);
});
