const express = require('express');
const path = require('path');

app.use('/', require(path.join(__basepath,'routes','web')));