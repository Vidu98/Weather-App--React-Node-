const path = require('node:path');
 const express = require('express');
 const weather = require('./utils/weather');
 const geo = require('./utils/geo');
 const hbs = require('hbs');

 const app = express();

 const partialsPath = path.join(__dirname,"../views/partials");

 app.set('view engine', 'hbs');
 hbs.registerPartials(partialsPath);

 const publicDirPath = path.join(__dirname,"../public")
 //console.log(__dirname)
 app.use(express.static(publicDirPath));

//  app.get('/',(req,res)=>{
//     res.render('index');
//  });

 app.get('/',(req,res)=>{
    res.render('index')
 });

 app.get('/help',(req,res)=>{
    res.render('help')
 });

 app.get('/about',(req,res)=>{
    res.render('about')
 });

 app.get('/weather',(req,res)=>{
        if(!req.query.address){
            res.send('address on found!')
        }

            geo(req.query.address)
            .then((data)=>{
                return weather(data.lat, data.lon);
            })
            .then((data)=>{
                res.send(data);
            })
            .catch((error)=>{
                res.send(error);
            })

        // res.send(req.query)
 });

 app.get('*',(req,res)=>{
    res.render('404')
 });



 app.listen(3000,()=>console.log('server is on port 3000'));

//  weather(13,-94)
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })


// geo("Gampaha")
//     .then((data)=>{
//         return weather(data.lat, data.lon);
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })




