
const express = require('express');
require('dotenv').config()
const app = express();

const Port = process.env.PORT
app.use(express.json());
app.use(express.urlencoded({extended:true}));
require('./routes/router')(app)

app.get('/',(req,res)=>{
    res.send('Application Work');
});

app.listen(Port,()=>{
    console.log('Server running on',Port);
});

