const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('thank you for calling me');
})

app.listen(4000, () => console.log('listening port 3000'));