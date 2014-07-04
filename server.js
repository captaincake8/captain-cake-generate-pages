
var logger = require('log4js').getLogger('server');
var express = require('express');

var controllers = require('backend/controllers');

var app = express();

logger.info('hello');

app.post('/backend/pages/create', controllers.pages.create );

app.get('/', function (req, res) {

    res.end('Hi there!')
});
app.listen(3000, function () {
    logger.info(arguments);
    logger.info('Express server listening on port 3000');
//    logger.info('possible routes are : ' +JSON.stringify(app.routes.routes,{},4));
});
