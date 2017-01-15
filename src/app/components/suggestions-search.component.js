class SuggestionsSearchController {
  constructor($state, $log) {
    this.$state = $state;
    this.$log = $log;
    this.filterOnRead = true;
    this.filterOnStarred = true;

    this.textReadDisabled = "Show Read Suggestions";
    this.textReadEnabled = "Read Suggestions Shown";
    this.textStarredDisabled = "Show Starred Suggestions";
    this.textStarredEnabled = "Starred Suggestions Shown";

    this.setFilterButtonText();
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

    this.setFilterButtonText();

    if (this.onFilterChanged) {
      this.onFilterChanged({filter: filterType, value: val});
    }
  }

  setFilterButtonText() {
    if (this.filterOnRead) {
      this.readText = this.textReadEnabled;
    } else {
      this.readText = this.textReadDisabled;
    }

    if (this.filterOnStarred) {
      this.starredText = this.textStarredEnabled;
    } else {
      this.starredText = this.textStarredDisabled;
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
