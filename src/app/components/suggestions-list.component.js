class SuggestionsListController {
  constructor($state, $log, SuggestionsList) {
    this.$state = $state;
    this.$log = $log;
    this.masterSuggestionsList = SuggestionsList.get();
    this.suggestions = this.masterSuggestionsList;
    this.filterOnRead = true;
    this.filterOnStarred = false;
  }

  itemRead(id) {
    this.suggestions.forEach(item => {
      if (item._id === id) {
        item.read = !item.read;
      }
    });
  }

  starItem(id) {
    this.suggestions.forEach(item => {
      if (item._id === id) {
        item.starred = !item.starred;
      }
    });
  }

  onFilterChanged(filter, value) {
    const newList = [];
    if (filter === 'starred') {
      this.filterOnStarred = value;
    } else if (filter === 'read') {
      this.filterOnRead = value;
    } else {
      this.$log.log('incorrect filter value.');
    }
    this.masterSuggestionsList.forEach(item => {
      if ((this.filterOnStarred || !item.starred) &&
        (this.filterOnRead || !item.read)) {
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
