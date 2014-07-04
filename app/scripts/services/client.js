'use strict';

angular.module('generatePagesApp')
  .service('Client', function Client( $http, $log  ) {

        this.pageCreate = function( page ){
            $log.info('create page');
            return $http.post('/backend/pages/create', page);
        }

  });
