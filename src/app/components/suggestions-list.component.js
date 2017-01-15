class SuggestionsListController {
  constructor($state, $log, SuggestionsList) {
    this.$state = $state;
    this.$log = $log;
    this.masterSuggestionsList = SuggestionsList.get();
    this.suggestions = this.masterSuggestionsList;
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
        item.todo = !item.todo;
      }
    });
  }

  onFilterChanged(filter) {
    let newList = [];
    if (filter === 'starred') {
      this.masterSuggestionsList.forEach(item => {
        if (item.starred) {
          newList.push(item);
        }
      });
    } else if (filter === 'read') {
      this.masterSuggestionsList.forEach(item => {
        if (item.read) {
          newList.push(item);
        }
      });
    } else {
      newList = this.masterSuggestionsList;
    }
    this.suggestions = newList;
  }
}

SuggestionsListController.$inject = ['$state', '$log', 'SuggestionsList'];

export const suggestionsList = {
  template: require('./suggestions-list.html'),
  controller: SuggestionsListController
};
