app.directive('navBar', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/common/navigation/nav-bar.html',
        controller: 'navbarController'
    };
});