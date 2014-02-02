/**
 * Created by Aaron on 1/31/14.
 */
// company controller: http
/*app.controller("companiesController", function($scope, companiesFactory) {
 // controller's constructor:
 var result = companiesFactory.database();

 // http get returns a promise ...
 result.success(function(data) {
 $scope.companies = data;
 });
 });*/

// company controller: resource
app.controller("companiesController", function($scope, companiesFactory) {
    // controller's constructor:
    $scope.companies = companiesFactory.database.query({}, isArray = true);
    var DB = $scope.companies;

    $scope.addCompany = function() {
        var companyName = $scope.newCompanyName;
        var companyDesc = $scope.newCompanyDesc;
        var newCompany = new companiesFactory.database({name : companyName, description: companyDesc});
        newCompany.$save();
    }
});