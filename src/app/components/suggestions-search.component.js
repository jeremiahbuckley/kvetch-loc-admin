class SuggestionsSearchController {
  constructor($state, $log) {
    this.$state = $state;
    this.$log = $log;
  }

  onClick(filterType) {
    this.$log.log(filterType);
    if (this.onFilterChanged) {
      this.onFilterChanged({filter: filterType});
    }
  }
}

SuggestionsSearchController.$inject = ['$state', '$log'];

export const suggestionsSearch = {
  template: require('./suggestions-search.html'),
  controller: SuggestionsSearchController,
  bindings: {
    onFilterChanged: '&'
  }
};
