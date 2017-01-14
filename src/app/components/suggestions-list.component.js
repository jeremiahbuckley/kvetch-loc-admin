class SuggestionsListController {
  constructor($state, $log) {
    this.$state = $state;
    this.$log = $log;
  }
}

SuggestionsListController.$inject = ['$state', '$log'];

export const suggestionsList = {
  template: require('./suggestions-list.html'),
  controller: SuggestionsListController
};
