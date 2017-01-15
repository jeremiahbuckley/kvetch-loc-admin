class LoginController {
  constructor($state, $log) {
    this.$state = $state;
    this.$log = $log;

    this.username = "";
    this.location = "";
    this.password = "";
  }

  loginClick() {
    if (this.loginAttempt) {
      this.loginAttempt({user: this.username, location: this.location, password: this.password});
    }
  }
}

LoginController.$inject = ['$state', '$log'];

export const login = {
  template: require('./login.html'),
  controller: LoginController
  // ,
  // bindings: {
  //   loginAttempt: '&'
  // }
};
