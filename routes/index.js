/**
 * Created by Aaron on 2/1/14.
 */
/* from pluralsight videos */
app.config(function($routeProvider) {
    $routeProvider
        .when("/signin", {
            templateUrl : '/app/common/signin/signin.html',
            controller: 'signinController'
        })
        .when("/companies", {
            templateUrl : '/app/company/companies.html',
            controller: 'companiesController'
        })
        .when("/"/*"/dashboard"*/, {
            templateUrl : '/app/common/layouts/dashboard.html',
            controller: 'companiesController'
        });
/*        otherwise("/landing", {
            templateUrl : '/app/common/landing/landing.html',
            controller: 'landingController'
        });*/
/*        .when("/", {  *//* root: initial state, what the user should see first *//*
            templateUrl : '/app/common/landing/landing.html',
            controller: 'landingController'
        });*/
});



/* reference from google docs
app.config(['$routeProvider',
    function($routeProvider) {
    $routeProvider.
        when('/companies', {
            templateUrl: '/app/company/companies.html',
            controller: 'companiesController'
        }).
        when('/phones/:phoneId', {
            templateUrl: 'partials/phone-detail.html',
            controller: 'PhoneDetailCtrl'
        }).
        otherwise({
            redirectTo: '/phones'
        });
}]);*/
