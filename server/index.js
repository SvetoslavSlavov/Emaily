const express = require('express');
const app = express();

// Route handler with express
app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

app.listen(5000);
