/**
 * Created by Aaron on 1/31/14.
 */
// company service: http
/*app.factory("companiesFactory", function($http) {
 var data = function() {
 return $http.get("http://localhost:3117/api/companies");
 };

 return {
 database: data // make a property
 };
 });*/

// company service: resource
app.factory("companiesFactory", function($resource) {
    return {
        database: $resource("http://localhost:3117/api/companies") // make a property
    };
});