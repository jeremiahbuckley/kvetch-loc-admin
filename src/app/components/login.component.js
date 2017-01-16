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
