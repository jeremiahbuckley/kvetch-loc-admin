import angular from 'angular';

import {suggestionsList} from './suggestions-list.component.js';
import {suggestionsSearch} from './suggestions-search.component.js';

export default angular.module('suggestions', [])
  .component('suggestionsList', suggestionsList)
  .component('suggestionsSearch', suggestionsSearch)
  .name;
