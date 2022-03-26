const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const initRoutes = require("./routes/web");

app.use(function(req, res, next) {
    console.log(req.method + " " + req.url + " - " + req.ip);
    next();
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));
initRoutes(app);

app.listen(port, function() {
    console.log('listening on http://localhost:' + port);
});