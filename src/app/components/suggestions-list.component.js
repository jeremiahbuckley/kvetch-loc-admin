class SuggestionsListController {
  constructor($state, $log, SuggestionsList) {
    this.$state = $state;
    this.$log = $log;
    this.suggestions = SuggestionsList.get();
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
}

SuggestionsListController.$inject = ['$state', '$log', 'SuggestionsList'];

export const suggestionsList = {
  template: require('./suggestions-list.html'),
  controller: SuggestionsListController
};
