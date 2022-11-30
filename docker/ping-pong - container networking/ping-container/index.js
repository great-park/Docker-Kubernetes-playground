const express = require('express');
const axios = require('axios');
const path = require('path');
const log4js = require('log4js');

log4js.configure(path.join(__dirname, 'log4js.json'));
const logger = require('log4js').getLogger('logTest');
const app = express();

const port = 5000;

app.listen(port, () => {
    logger.info(`Server Is Running At Port ${port}`);
});

app.get('/', (req, res) => {
    res.send('[sender_ping] Hello, I am "ping" container!!! \n');
});

app.get('/ping' , async (req, res) => {
    try {
        logger.info('[sender_ping] ping 신호 보냅니다 ---ping---> \n');
        await axios.get('http://172.20.0.3:5001/pong');
        res.send('[sender_ping]---ping---> Hi Hi Hi \n');
    } catch (error) {
        logger.info(error);
        res.send(error);
    }
});