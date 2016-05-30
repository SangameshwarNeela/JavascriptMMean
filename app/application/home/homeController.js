routerApp.controller('homeController', function ($scope, $http, $rootScope, $location) {
    console.log("inside home controller");
    $rootScope.showNotifications = true;
    console.log("I'm with name:" + $rootScope.loggedUser);
    console.log("I'm with ID:" + $rootScope.loggedUserId);
    $scope.count = 0;
    $scope.insNotification = false;
    $scope.appNotification = false;
    $scope.tsNotification = false;
    $scope.genNotification = false;
    $scope.genFLow = function () {
        console.log("gen div clicked");
        var putUrl = "http://localhost:9011/genDet/" + $rootScope.loggedUserId;
        var putData = {
            genPending: false,
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
            $scope.temp = "gen details updated";
            loadFunction();
            $("#modalButton").click();

        }, function myError(response) {
            $scope.temp = response.status;
        });
    }
    $scope.insuranceFLow = function () {
        console.log("insurence div clicked");
        $location.path("/insurance");

    }


    $scope.approvalsFLow = function () {
        console.log("approvals div clicked");
        $location.path("/approvals");

    }
    $scope.gotoClaims = function () {
        console.log("claims div clicked");
        $location.path("/claims");

    }
    var localCount = 0;

    $http({
        method: "GET",
        url: "http://localhost:9011/users/" + $rootScope.loggedUser,
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function mySucces(response) {
            console.log(response);
            //$scope.myWelcome = response.data[0].name;
            var usersLength = response.data.length;
            for (i = 0; i < usersLength; i++) {
                if ("true" == response.data[i].insurancePending) {
                    $scope.insNotification = true;
                    localCount = localCount + 1;
                }
                if ("true" == response.data[i].approvalsPending) {
                    $scope.appNotification = true;
                    localCount = localCount + 1;
                }
                if ("true" == response.data[i].timesheetPending) {
                    $scope.tsNotification = true;
                    localCount = localCount + 1;
                }
                if ("true" == response.data[i].genPending) {
                    $scope.genNotification = true;
                    localCount = localCount + 1;
                }

            }
            $scope.count = localCount;
        },


        function myError(response) {
            $scope.myWelcome = response;
        });


    var loadFunction = function () {
        var localCount = 0;
        $http({
            method: "GET",
            url: "http://localhost:9011/users/" + $rootScope.loggedUser,
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function mySucces(response) {
                console.log(response);
                //$scope.myWelcome = response.data[0].name;
                var usersLength = response.data.length;
                for (i = 0; i < usersLength; i++) {
                    if ("true" == response.data[i].insurancePending) {
                        $scope.insNotification = true;
                        localCount = localCount + 1;
                    }
                    if ("true" == response.data[i].approvalsPending) {
                        $scope.appNotification = true;
                        localCount = localCount + 1;
                    }
                    if ("true" == response.data[i].timesheetPending) {
                        $scope.tsNotification = true;
                        localCount = localCount + 1;
                    }
                    if ("true" == response.data[i].genPending) {
                        $scope.genNotification = true;
                        localCount = localCount + 1;
                    }

                }
                $scope.count = localCount;
            },


            function myError(response) {
                $scope.myWelcome = response;
            });

    }

});