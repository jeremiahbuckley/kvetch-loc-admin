import angular from 'angular';

import {suggestionsList} from './suggestions-list.component.js';

export default angular.module('suggestions', [])
  .component('suggestionsList', suggestionsList)
  .name;
