routerApp.controller('claimsController', function ($scope, $http, $rootScope, $location) {
    console.log("inside claims controller");
    $scope.myWelcome;
    $scope.pendingCount;
    $scope.approvedCount;
    var localPendingCounter = 0;
    var localApprovedCounter = 0;
    $scope.onSubmit = function () {
        var name = "";
        var password = "";
        var claimsData = {
            submitter: "sangameshwar",
            status: "Submitted",
            claimNumber: $scope.claimNo,
            submittedTo: $scope.assigned,
            claimType: $scope.type,
            cost: $scope.cost
        };
        $http({
            method: "POST",
            url: "http://localhost:9011/claims",
            dataType: 'json',
            data: JSON.stringify(claimsData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function mySucces(response) {
            console.log(response);
            $scope.myWelcome = "Claim created";
            localPendingCounter = localPendingCounter + 1;
            $scope.pendingCount = localPendingCounter;
        }, function myError(response) {
            $scope.myWelcome = response.status;
        });

    }

    $http({
        method: "GET",
        url: "http://localhost:9011/claims/" + $rootScope.loggedUser,
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function mySucces(response) {
            console.log(response);
            //$scope.myWelcome = response.data[0].name;
            var usersLength = response.data.length;
            for (i = 0; i < usersLength; i++) {
                if ("Submitted" == response.data[i].status) {
                    localPendingCounter = localPendingCounter + 1;
                }
                if ("Approved" == response.data[i].status) {
                    localApprovedCounter = localApprovedCounter + 1;
                }
            }
            $scope.pendingCount = localPendingCounter;
            $scope.approvedCount = localApprovedCounter;
        },


        function myError(response) {
            $scope.myWelcome = response;
        });

});