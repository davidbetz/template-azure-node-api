"use strict"

const express = require("express")

const app = express()
const server = require('http').Server(app)

app.set('port', (process.env.PORT || 8193))

app.get("/api/samples", (req, res, next) => {
    res.status(200).json({
        a: 1,
        b: 2
    })
})

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
})

const start = Date.now()
server.listen(app.get('port'), function () {
    console.log('app running on port', app.get('port'))
    let duration = Date.now() - start
    console.log("server startup time", duration)
})