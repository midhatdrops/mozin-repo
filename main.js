/* eslint-disable linebreak-style */
const http = require('http');
const express = require('express');

const app = express();

const baseDir = `${__dirname}/build/`;
app.use(express.static(`${baseDir}`));
app.get('/', (req, res) => res.send('index.html', { root: baseDir }));

const port = 80;
app.listen(port);
