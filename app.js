const express = require('express');

const app = express();

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`App Started on port ${PORT}`);
});

app.get('/', async (req, res) => {
	res.send('index Sayfasi');
});
