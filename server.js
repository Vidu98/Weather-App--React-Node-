const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send('hello from express');
});

app.get('/api',(req,res)=>{
    res.send('from api');
});

app.get('/help',(req,res)=>{
    res.send('from help');
});

app.get('*',(req,res)=>{
    res.send('Page not found');
});

