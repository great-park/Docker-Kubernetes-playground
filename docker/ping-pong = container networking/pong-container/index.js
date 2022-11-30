const express = require('express');
const path = require('path');
const log4js = require('log4js');

log4js.configure(path.join(__dirname, 'log4js.json'));
const logger = require('log4js').getLogger('logTest');
const app = express();

const port = 5001;

app.listen(port, () => {
    logger.info(`Server Is Running At Port ${port}`);
});


app.get('/', (req, res) => {
    res.send('[receiver_pong] Hello, I am "pong" container!!! \n');
});

app.get('/pong', async(req, res) => {
    try {
        logger.info(`------>[receiver_pong] 신호 받았습니다. \n`)
        res.send('------>[recevier_pong] Hi Hi Hi \n');
    } catch (error) {
        logger.info(error);
        res.send(error);
    }
});