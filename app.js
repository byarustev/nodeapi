const express = require('express');
app = express();
const port=9000;
const bodyParser = require('body-parser');
const indexRoute = require('./routes/index');
app.use(bodyParser.json());
app.use(indexRoute);
//middle ware
// app.use(function(req,res,next){
//     next();
// });


app.listen(port,function(err){
    if (err) console.error(err);
    console.log(`App running on port ${port}`)
});

