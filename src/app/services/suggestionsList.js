export default class SuggestionsListService {
  constructor($resource) {
    this.$resource = $resource;
    // const res = $resource('http://localhost:8000/candidates/list', null,
    //   {getList: {method: 'POST', isArray: true}});
    // return res;
  }

  get() {
    return [
      {
        _id: 3,
        name: 'Theresa Mae Smithers',
        message: 'Turn the heat down, god dammit!',
        read: false,
        starred: false
      }, {
        _id: 2,
        name: 'Reginald Quinn',
        message: 'We\'d love to have more marmalade at breakfast. Those little packets go so fast!',
        read: true,
        starred: true
      }, {
        _id: 1,
        name: 'Phyllis Oswagio',
        message: 'Can you make it a little warmer? I hate having to wear all these sweaters!',
        read: true,
        starred: false
      }
    ];
  }
}

SuggestionsListService.$inject = ['$resource'];

