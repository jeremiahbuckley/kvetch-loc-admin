class SuggestionsListController {
  constructor($state, $log) {
    this.$state = $state;
    this.$log = $log;
    this.suggestions = [
      {
        _id: 3,
        name: 'Tessa Smithers',
        message: 'Turn the heat down, god dammit!',
        read: false,
        todo: false
      }, {
        _id: 2,
        name: 'Reginald Quinn',
        message: 'We\'d love to have more marmalade at breakfast. Those little packets go so fast!',
        read: true,
        todo: true
      }, {
        _id: 1,
        name: 'Phyllis Oswagio',
        message: 'Can you make it a little warmer? I hate having to wear all these sweaters!',
        read: true,
        todo: false
      }
    ];
  }
}

SuggestionsListController.$inject = ['$state', '$log'];

export const suggestionsList = {
  template: require('./suggestions-list.html'),
  controller: SuggestionsListController
};
