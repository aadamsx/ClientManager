'use strict';
// company controller: resource
app.controller("companyDetailController",
    function($scope, companiesFactory, $routeParams) {
        // controller's constructor:
        $scope.sortorder = 'name';
        /*$scope.companies = companiesFactory.getCompanies();*/
        $scope.company = companiesFactory.getCompany($routeParams.companyId);
    });
