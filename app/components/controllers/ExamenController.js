
'use strict';

angular.module('ExamenApp.home', ['ngRoute'])
    .config(['$routeProvider',function($routeprovider){
        $routeprovider.when('/', {
            controller: 'ExamenController',
            templateUrl: 'components/views/examenView.html'
        });
    }])
    .controller('ExamenController', ['$scope', function($scope) {

        this.message = "Hello Home!";

        $scope.periodo = {};
        $scope.periodo.nombre = "Oscar"

    }]);