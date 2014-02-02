app.controller('loginCtrl', function ($scope, notifier) {
    $scope.signin = function (name, password) {
        if (name === 'Aaron' && password === 'Adams') {
            notifier.notify('You have successfully signed in!');
            $scope.authenticated = true;
        } else {
            notifier.notify('Username/Password Combination incorrect');
        }
    };
});