import angular from "angular";

var angularPocApp = angular.module("angularPocApp", []);

angularPocApp.controller("AngularPocController", [
  "$scope",
  ($scope) => {
    $scope.cars = [
      { model: "X", manufacter: "Tesla", color: "White" },
      { model: "Prius", manufacter: "Toyota", color: "Red" },
      { model: "RAM", manufacter: "Ford", color: "Black" },
    ];
  },
]);
