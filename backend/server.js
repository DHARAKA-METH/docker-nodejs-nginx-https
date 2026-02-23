const express = require('express');
const path = require('path');
const app = express();

const appName = process.env.APP_NAME || 'MySimpleServer';
const PORT = 3000;

app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '../index.html'))
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request served by ${appName}!`);

});

app.listen(PORT, () => {
    console.log(`${appName} is running on port ${PORT}`);
});