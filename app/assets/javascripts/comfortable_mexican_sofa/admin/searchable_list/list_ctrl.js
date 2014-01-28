angular.module("SearchableList", []).controller("ListCtrl", ["$scope", function ($scope) {
  $scope.init = function (name) {
    this.name = name;
  }

  $scope.matchSearch = function () {
    var pattern = this.pattern || "";
    return this.name.indexOf(pattern.toLowerCase()) >= 0;
  }
}]);