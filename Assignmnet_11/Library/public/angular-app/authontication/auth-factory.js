angular.module("myJobApp").factory("AuthFactory", AuthFactory);
function AuthFactory() {
  return { auth: auth };
  var auth = { ifLoggedId: false };
}
