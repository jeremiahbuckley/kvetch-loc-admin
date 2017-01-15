import angular from 'angular';

import {login} from './login.component.js';
// import {userSettings} from './user-settings.component.js';

export default angular.module('suggestions', [])
  .component('login', login)
  // .component('userSettings', userSettings)
  .name;
