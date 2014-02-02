/**
 * Created by Aaron on 1/31/14.
 */
app.directive('dashboard', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/common/layouts/dashboard.html',
        controller: 'dashboardController'
/*        scope: {
            companies: '=data' // [shortcut way of doing the assignment of data to company ...
            //data: '='             ... creates a scope variable called company]
        }*/
    }
});