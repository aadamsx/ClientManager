/**
 * Created by Aaron on 2/1/14.
 */
app.directive('landing', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/common/landing/landing.html',
        controller: 'coverPageController'
    };
});