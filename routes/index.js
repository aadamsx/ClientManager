/**
 * Created by Aaron on 2/1/14.
 */
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/dashboard", {
            templateUrl : '/app/common/layouts/dashboard.html',
            controller: 'companiesController'
        })
        .when("/", {   /*root: initial state, what the user should see first*/
            templateUrl : '/app/common/landing/cover.html',
            controller: 'coverController'
        })
        .when("/signin", {
            templateUrl : '/app/common/signin/signin.html',
            controller: 'signinController'
        })
        .when("/contact", {
            templateUrl : '/app/common/contact/contact.html',
            controller: 'contactController'
        })
        .when("/companies/newCompany", {
            templateUrl : '/app/company/company-new.html',
            controller: 'companyNewController'
        })
        .when("/companies/:companyId", {
            templateUrl : '/app/company/company-detail.html',
            controller: 'companyDetailController'
        })
        .when("/companies", {
            templateUrl : '/app/company/companies.html',
            controller: 'companiesController'
        })
        .otherwise({ redirectTo: '/'});

        /*$locationProvider.html5Mode(true);*/

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
