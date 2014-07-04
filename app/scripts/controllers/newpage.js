'use strict';

angular.module('generatePagesApp')
    .controller('NewPageCtrl', function ($scope, $log, Client ) {

        $scope.page = {
            'title': 'My Page',
            'options': [
                {},
                {},
                {},
                {}
            ]

        };

        $scope.submit = function(){
            Client.pageCreate( $scope.page );
        }

    });
