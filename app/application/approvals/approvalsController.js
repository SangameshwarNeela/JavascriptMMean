routerApp.controller('approvalsController', function ($scope, $http, $rootScope) {
    console.log("inside approvals controller");

    $scope.approveIt = function (e) {
        //var getthevalue = $(e).attr('id');
        console.log("value of x:" + e);
        console.log("submitted");

    };
    $http({
        method: "GET",
        url: "http://localhost:9011/approvals/" + $rootScope.loggedUser,
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function mySucces(response) {
            console.log(response);
            //$scope.myWelcome = response.data[0].name;
            console.log(response.data);
            $scope.records = response.data;
            var usersLength = response.data.length;
        },
        function myError(response) {
            $scope.myWelcome = response;
        });
});