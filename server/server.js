'use strict';

import express from 'express';

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html'

express()
    .use((req, res) => {
        req.originalUrl.startsWith("/assets")
            ? res.sendFile(req.originalUrl.replace('/assets/', ''), { root: './dist/assets' })
            : req.originalUrl.split('.')[1] != undefined
                ? res.sendFile(req.originalUrl, { root: './dist' })
                : res.sendFile(INDEX, { root: './dist' })
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`));