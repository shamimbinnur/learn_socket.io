const express = require('express');
const app = express();
const PORT = 5000;

// Static files
app.use(express.static('public'))


const server = app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})

