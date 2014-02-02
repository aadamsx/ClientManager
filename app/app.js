'use strict';
var app = angular.module('clientModule', ['ngRoute', 'ngResource', 'ui.bootstrap', 'ngAnimate']);

// init to empty object
app.value('identity', {}); // provide a place to put the user's information

//app.config([
//    '$routeProvider', function($routeProvider) {
//        $routeProvider.when('/companies', {
//                controller: 'companyController',
//                templateUrl: '/app/company/company.html'
//            })
//            .otherwise({ redirectTo: '/' });
//    }
//]);
/*

app.service('toaster', ['$rootScope', function ($rootScope) {
    this.pop = function (type, title, body, timeout, bodyOutputType) {
        this.toast = {
            type: type,
            title: title,
            body: body,
            timeout: timeout,
            bodyOutputType: bodyOutputType
        };
        $rootScope.$broadcast('toaster-newToast');
    };
}]);


app.constant('toasterConfig', {
    'tap-to-dismiss': true,
    'newest-on-top': true,
    //'fade-in': 1000,            // done in css
    //'on-fade-in': undefined,    // not implemented
    //'fade-out': 1000,           // done in css
    // 'on-fade-out': undefined,  // not implemented
    //'extended-time-out': 1000,    // not implemented
    'time-out': 5000, // Set timeOut and extendedTimeout to 0 to make it sticky
    'icon-classes': {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
    },
    'body-output-type': '', // Options: '', 'trustedHtml', 'template'
    'body-template': 'toasterBodyTmpl.html',
    'icon-class': 'toast-info',
    'position-class': 'toast-top-right',
    'title-class': 'toast-title',
    'message-class': 'toast-message'
})
*/

/*
app.config(function ($routeProvider) {
    $routeProvider
        .when('/companies', {
            controller: 'companiesController',
            templateUrl: '/app/company/companies.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});*/


//$upida.baseUrl = "/api/";