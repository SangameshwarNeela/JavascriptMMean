routerApp.controller('usecaseController', function ($scope, $http) {
    console.log("inside usecase controller");

    var existingUser = false;

    $scope.onSubmit = function () {


        /** add new user
        var name = "";
        var password = "";
        var postData = {
            name: $scope.name,
            password: $scope.password
        };
        $http({
            method: "POST",
            url: "http://localhost:9011/users",
            dataType: 'json',
            data: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function mySucces(response) {
            console.log(response);
            $scope.myWelcome = "log in credentials created";
        }, function myError(response) {
            $scope.myWelcome = response.status;
        }); **/


        /** validate login user
        
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
                    }

                }
            }
            if (existingUser) {
                $scope.myWelcome = "Your are an existing user";

            } else {
                $scope.myWelcome = "Your do not exist as per our records";

            }

        }, function myError(response) {
            $scope.myWelcome = response;
        }); **/
    }
});