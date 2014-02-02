app.directive('companies', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/company/companies.html',
        controller: 'companiesController',
        scope: {
            companies: '=data' // [shortcut way of doing the assignment of data to company ...
            //data: '='             ... creates a scope variable called company]
        }
    }
});