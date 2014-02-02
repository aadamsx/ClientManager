app.directive('login', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/common/login/login.html',
        controller: 'loginCtrl'
    };
});