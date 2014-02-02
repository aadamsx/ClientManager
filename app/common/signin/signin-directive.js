/**
 * Created by Aaron on 2/1/14.
 */
app.directive('signin', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/common/signin/signin.html',
        controller: 'signinController'
    };
});