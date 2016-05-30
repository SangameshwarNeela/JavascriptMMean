routerApp.controller('loginController', function ($scope, $http, $rootScope, $location) {
    console.log("inside login controller");
    $scope.myWelcome;
    var existingUser = false;
    $scope.onSubmit = function () {

        $http({
            method: "GET",
            url: "http://localhost:9011/users",
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function mySucces(response) {
            console.log(response);
            //$scope.myWelcome = response.data[0].name;
            var usersLength = response.data.length;
            for (i = 0; i < usersLength; i++) {
                if ($scope.name == response.data[i].name) {
                    console.log("existing user name");
                    if ($scope.password == response.data[i].password) {
                        console.log("existing password");
                        existingUser = true;
                        $rootScope.loggedUserId = response.data[i]._id;
                    }
                }
            }
            if (existingUser) {
                //$scope.myWelcome = "Your are an existing user";
                $rootScope.loggedUser = $scope.name;
                console.log("logged in as :" + $rootScope.loggedUser);
                $location.path("/home");

            } else {
                $scope.myWelcome = "Your do not exist as per our records";

            }

        }, function myError(response) {
            $scope.myWelcome = response;
        });
    }
});