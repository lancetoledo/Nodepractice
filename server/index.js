// require uses common js modules (system in node for sharing code between different codes) 
// Node js doesnt have support for traditional such as, import express from 'express'
const express = require("express");
const app =  express()

app.get('/', (rec,res)=> {
    res.send({hi:'there'})
})

const PORT = process.env.PORT || 5001

app.listen(5001);