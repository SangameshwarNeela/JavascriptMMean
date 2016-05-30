routerApp.controller('insuranceController', function ($scope, $http, $rootScope) {
    console.log("inside insurence controller");
    $rootScope.showNotifications = true;
    $scope.temp;
    $scope.onSubmit = function () {
        var putUrl = "http://localhost:9011/users/" + $rootScope.loggedUserId;
        var putData = {
            insurancePending: false,
        };
        $http({
            method: "PUT",
            url: putUrl,
            dataType: 'json',
            data: JSON.stringify(putData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function mySucces(response) {
            console.log(response);
            $scope.temp = "insurance details updated";
        }, function myError(response) {
            $scope.temp = response.status;
        });
    }

});