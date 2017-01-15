class SuggestionsSearchController {
  constructor($state, $log) {
    this.$state = $state;
    this.$log = $log;
    this.filterOnRead = true;
    this.filterOnStarred = false;
  }

  onClick(filterType) {
    this.$log.log(filterType);

    let val = false;
    if (filterType === 'read') {
      val = !this.filterOnRead;
      this.filterOnRead = !this.filterOnRead;
    } else if (filterType === 'starred') {
      val = !this.filterOnStarred;
      this.filterOnStarred = !this.filterOnStarred;
    } else {
      this.$log.log('incorrect filter value.');
    }
    if (this.onFilterChanged) {
      this.onFilterChanged({filter: filterType, value: val});
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
