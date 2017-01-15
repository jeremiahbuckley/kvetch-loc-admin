'use strict';

'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import SuggestionsListService from './services/suggestionsList.js';

export default angular.module('core.shared', [uirouter, ngResource])
  .service('SuggestionsList', SuggestionsListService)
  .name;
