class LoginController {
  constructor($window, $state, $log) {
    this.$state = $state;
    this.$log = $log;
    this.$window = $window;

    this.username = "";
    this.location = "";
    this.password = "";
  }

  loginClick() {
    if (this.loginAttempt) {
      this.loginAttempt({user: this.username, location: this.location, password: this.password});
    }

    // https://auth0.com/blog/angularjs-authentication-with-cookies-vs-token/

    // $http
    //   .post('/authenticate', $scope.user)
    //   .success(function (data, status, headers, config) {
    //     $window.sessionStorage.token = data.token;
    //     $scope.message = 'Welcome';
    //   })
    //   .error(function (data, status, headers, config) {
    //     // Erase the token if the user fails to log in
    //     delete $window.sessionStorage.token;

    //     // Handle login errors here
    //     $scope.message = 'Error: Invalid user or password';
    //   });

    this.$window.sessionStorage.token = 'data.token';

    this.$window.location.href = '/suggestions';
  }
}

LoginController.$inject = ['$window', '$state', '$log'];

export const login = {
  template: require('./login.html'),
  controller: LoginController
  // ,
  // bindings: {
  //   loginAttempt: '&'
  // }
};
