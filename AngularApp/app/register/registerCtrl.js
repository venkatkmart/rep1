(function () {
    function registerCtrl($scope, lookupSvc,$http) {
        var states = [{
            "name": "Telangana",
            code: "TS",
            countryCode: "IN"
}, {
            "name": "Andhra Pradesh",
            code: "AP",
            countryCode: "IN"
}, {
            "name": "NewYork",
            code: "NY",
            countryCode: "US"
}, {
            "name": "Texas",
            code: "TX",
            countryCode: "US"
}];
        $scope.user = {};
        //$scope.location ="";
        $scope.register = function () {
            console.log($scope.user);
        };
        // $scope.countries = lookupSvc.getCountries();

        lookupSvc.getCountriesFromApi()
            .then(function (response) {
                //console.log(response);
                $scope.countries = response.data.countries;
            })
            .catch(function (errorResponse) {
                console.log(errorResponse);
            });

        $scope.loadStatesByCountry = function () {
            var countryCode = $scope.user.country.code;
            $scope.states = getStateByCountry(countryCode);
        };



        function getStateByCountry(code) {
            var stateList = _.where(states, {
                countryCode: code
            });
            return stateList;
        }

        /*google api integration*/

        $scope.getLocationFromMaps = function (data) {
            var location = data;
            $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
                    params: {
                        address: data,
                        sensor: false
                    }
                })
                .then(function (response) {
                    return response.data.results.map(function (item) {
                        return item.formatted_address;
                    });
                }).catch(function (response) {
                    console.log(response)
                }).finally(function (data) {
                    console.log(data);
                });
        };




        /*Date picker Code*/
        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        $scope.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.toggleMin = function () {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
        };

        $scope.toggleMin();

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.setDate = function (year, month, day) {
            $scope.dt = new Date(year, month, day);
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.altInputFormats = ['M!/d!/yyyy'];

        $scope.popup1 = {
            opened: false
        };


        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        $scope.events = [
            {
                date: tomorrow,
                status: 'full'
    },
            {
                date: afterTomorrow,
                status: 'partially'
    }
  ];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }

    }
    angular.module("register").controller("registerCtrl", registerCtrl);

})();
