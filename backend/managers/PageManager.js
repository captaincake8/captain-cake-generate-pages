
var services = require('../services');
var logger  = require('log4js').getLogger('PageManager');

exports.createPage = function( page, callback ){
    logger.info('saving page');
    services.db.connect('pages', function( collection ){
        collection.insert(page, function(err){
            callback(err,page);
        });
    })
};