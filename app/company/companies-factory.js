/**
 * Created by Aaron on 1/31/14.
 */
'use strict';

// company service: resource
app.factory("companiesFactory", function($resource, $q, $timeout) {
    var resource = $resource('http://localhost:3117/api/companies/:id', { id: '@id' });
    return {
        getCompany: function(companyId) {
            var deferred = $q.defer();
            $timeout(function() {
                resource.get({id: companyId},
                    function(company) {
                        deferred.resolve(company);
                    },
                    function(response) {
                        deferred.reject(response);
                    });

            }, 3000);
            return deferred.promise;
        },
        saveCompany: function(company) {
            var deferred = $q.defer();
            event.id = 1;
            resource.save(company,
                function(response) {
                    deferred.resolve(response);
                },
                function(response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        },
        getCompanies: function() {
            return resource.query();
        }
    };
});