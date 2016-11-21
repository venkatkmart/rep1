(
    function () {
        function productFact($q, $http) {

            return {
                counter: function () {

                    var dfd = $q.defer();
                    setTimeout(function () {
                        dfd.resolve(1000000);
                    }, 5000);

                    return dfd.promise;

                },
                getProductsFromApi: function () {
                    var dfd = $q.defer();
                    $http.get("app/api/vehicles.json")
                        .then(function (res) {
                            dfd.resolve(res);
                        })
                        .catch(function (err) {
                            dfd.reject(err);
                        });

                    return dfd.promise;
                }
            };
        }


        angular.module("product")
            .factory("productFact", ["$q", "$http", productFact]);

    })();
