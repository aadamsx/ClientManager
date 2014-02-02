app.factory('companyFactory', function ($http) {
    var urlBase = 'http://localhost:3117/api/companies';
    var companySvc = {};

    companySvc.getCompanies = function () {
        return $http.get(urlBase);
    };

    companySvc.getCompany = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    companySvc.insertCompany = function (company) {
        return $http.post(urlBase, company);
    };

    companySvc.updateCompany = function (company) {
        return $http.put(urlBase + '/' + company.ID, company);
    };

    companySvc.deleteCompany = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    companySvc.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };


    return companySvc;

});

