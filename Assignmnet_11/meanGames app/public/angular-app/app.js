// is going to hold application module and route
angular.module("meanGames", ["ngRoute"], "angular-jwt").config(config).run(run);

function config($routeProvider, $httpProvider,$locationProvider){
  $httpProvider.interceptors.push("AuthInterceptor");
    $routeProvider

    .when("/", {
      templateUrl: "angular-app/welcome/welcome.html",
      access: { restricted: false },
    })

    .when("/games", {
        templateUrl: "angular-app/game-list/games.html",
        controller : "GamesController",
        controllerAs: "vm"
    })
        .when("/game/:id", {
            templateUrl: "angular-app/game-display/game.html",
            controller : "GameController",
            controllerAs: "vm"
    })

      .when("/delete/game/:id", {
        templateUrl: "angular-app/game-delete/game-delete.html",
        controller : "DeleteGameController",
        controllerAs: "vm"
})
.when("/register", {
    templateUrl: "angular-app/register/register.html",
    controller: "RegisterController",
    controllerAs:"vm"
})
.otherwise({ redirectTo: "/" });
}
function run($rootScope, $location, $window, AuthFactory) {
    $rootScope.$on(
      "$routeChangeStart",
      function (event, nextRoute, currentRoute) {
        if (
          nextRoute.access !== undefined &&
          nextRoute.access.restricted &&
          !$window.sessionStorage.token &&
          !AuthFactory.isLoggedIn
        ) {
          event.preventDefault();
          $location.path("/"); 
        }
      }
    );
  }
  