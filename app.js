const express = require("express");
const app=express()
const routerHeroes=require('./routes/heroes')
const routerMain=require('./routes/main');


app.listen(3030, () => console.log('Server running in 3030 port'));

app.use('/heroes',routerHeroes)
app.use('/',routerMain)