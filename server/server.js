const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = 3000;

// serves the static files
app.use(express.static(path.join(__dirname, '../client')));

// get IP address route
app.get('/ipaddress', (req, res, next) => {
    try {
        const ip = fs.readFileSync(path.join(__dirname,'../ip.txt'), 'utf8');
        res.locals.ip = ip;
    } catch (err) {
        console.log(err);
    }
    return next();
},
(req, res) => {
    return res.json(res.locals.ip);
});

// health route
app.get('/health', (req, res) => res.sendStatus(200));

// serves the index.html
app.use('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, () => {
    console.log(`Demo app is listing on port ${port}`);
});