angular.module("myProperApp").controller("dogController", dogController);
function dogController($http) {
  var vm = this;
  $http.get("https://dog.ceo/api/breeds/image/random").then(function (response) {
    vm.dog = response.data;
  });
}