app.directive('sideBar', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/common/navigation/sidebar/side-bar.html',
        controller: 'sideBarController'
    };
});