
app.controller('companyCtrl', function ($scope, companyFactory, toster) {
    $scope.status;
    /*$scope.compaines;*/
    $scope.orders;

    companyFactory.getCompanies();

    function getCompany() {
        companyFactory.getCompany()
            .success(function (comp) {
                console.log(comp);
                $scope.compaines = comp;
            })
            .error(function (error) {
                $scope.status = 'Unable to load company data: ' + error.message;
            });
    };
    
    $scope.updateCompany = function (id) {
        var cust;
        for (var i = 0; i < $scope.companies.length; i++) {
            var currComp = $scope.customers[i];
            if (currComp.ID === id) {
                cust = currComp;
                break;
            }
        }

        companyFactory.updateCompany(comp)
            .success(function () {
                $scope.status = 'Updated Company! Refreshing company list.';
            })
            .error(function (error) {
                $scope.status = 'Unable to update company: ' + error.message;
            });
    };

    $scope.insertCompany = function () {
        //Fake company data
        var cust = {
            ID: 10,
            FirstName: 'JoJo',
            LastName: 'Pikidily'
        };
        companyFactory.insertCompany(comp)
            .success(function () {
                $scope.status = 'Inserted Company! Refreshing company list.';
                $scope.companies.push(comp);
            }).
            error(function (error) {
                $scope.status = 'Unable to insert company: ' + error.message;
            });
    };

    $scope.deleteCompany = function (id) {
        companyFactory.deleteCompany(id)
        .success(function () {
            $scope.status = 'Deleted Company! Refreshing company list.';
            for (var i = 0; i < $scope.compaines.length; i++) {
                var comp = $scope.companies[i];
                if (comp.ID === id) {
                    $scope.companies.splice(i, 1);
                    break;
                }
            }
            $scope.orders = null;
        })
        .error(function (error) {
            $scope.status = 'Unable to delete company: ' + error.message;
        });
    };

    $scope.getCustomerOrders = function (id) {
        companyFactory.getOrders(id)
        .success(function (orders) {
            $scope.status = 'Retrieved orders!';
            $scope.orders = orders;
        })
        .error(function (error) {
            $scope.status = 'Error retrieving customers! ' + error.message;
        });
    };
});