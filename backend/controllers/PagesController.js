

var logger = require('log4js').getLogger('PagesController');
var managers = require('../managers');

exports.create = function( req, res ){
    logger.info('creating page');
    var page = req.body;
    managers.pages.create( page , function( err , page ){
        if ( !!err ){
            res.send(500, err);
            return;
        }
        res.send(page);
    })};