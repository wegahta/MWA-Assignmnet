angular.module("myJobApp", ["ngRoute", "angular-jwt"]).config(config).run(run);
console.log("are you here")
 function config($routeProvider, $httpProvider, $locationProvider){
     $httpProvider.interceptors.push("AuthInterceptor");
     console.log("are you here my app");
     $routeProvider

  
     .when("/", {
         templateUrl:"angular-app/wellcome/wellcome.html",
         access:{restricted: false},
         
     })
   .when("jobs",{
        templateUrl: angular-app/job-list/jobs

   })

     .when("/job/:id", {
        templateUrl:"angular-app/job-display/job.html",
        controller:"JobControllers",
        controllerAs: "vm"
     })
    .when("/delet/job/:id",{
        templateUrl: "angular-app/job-delet/job-delet.html",
        controller: "JobDeletController",
        controllerAs: "vm"
    })
    .when("/profile", {
        templateUrl: "angular-app/profile/profile.html",
        controllerAs: "vm",
        access: { restricted: true },
      })
      .when("/register", {
        templateUrl: "angular-app/register/register.html",
        controller: "RegisterController",
        controllerAs: "vm",
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
  