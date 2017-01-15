class SuggestionsListController {
  constructor($state, $log, SuggestionsList) {
    this.$state = $state;
    this.$log = $log;
    this.masterSuggestionsList = SuggestionsList.get();
    this.suggestions = this.masterSuggestionsList;
    this.viewReadSuggestions = true;
    this.viewStarredSuggestions = false;

    this.applyFilter();
  }

  itemRead(id) {
    this.suggestions.forEach(item => {
      if (item._id === id) {
        item.read = !item.read;
      }
    });
    this.applyFilter();
  }

  starItem(id) {
    this.suggestions.forEach(item => {
      if (item._id === id) {
        item.starred = !item.starred;
      }
    });
    this.applyFilter();
  }

  onFilterChanged(filter, value) {
    if (filter === 'starred') {
      this.viewStarredSuggestions = value;
    } else if (filter === 'read') {
      this.viewReadSuggestions = value;
    } else {
      this.$log.log('incorrect filter value.');
    }
    this.applyFilter();
  }

  applyFilter() {
    const newList = [];
    this.masterSuggestionsList.forEach(item => {
      if ((this.viewStarredSuggestions && item.starred) ||
        (this.viewReadSuggestions && item.read) ||
        (!item.starred && !item.read)) {
        newList.push(item);
      }
    });

    this.suggestions = newList;
  }
}

SuggestionsListController.$inject = ['$state', '$log', 'SuggestionsList'];

export const suggestionsList = {
  template: require('./suggestions-list.html'),
  controller: SuggestionsListController
};
