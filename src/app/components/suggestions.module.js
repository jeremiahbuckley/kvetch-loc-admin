import angular from 'angular';

import {suggestionsList} from './suggestions-list.component.js';
// import {voterAdd} from './voter-add.component.js';

export default angular.module('suggestions', [])
  .component('suggestionsList', suggestionsList)
  // .component('voterAdd', voterAdd)
  .name;
