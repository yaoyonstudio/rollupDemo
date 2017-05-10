export default {
  bindings: {
    data: '<',
    search: '&'
  },
  controller: ['$state', function ($state) {
    this.title = 'hello'
    this.href = () => {
      $state.go('home')
    }
  }],
  controllerAs: 'vm',
  template: '' +
    '<div class="testCom">' +
      '<p>{{ vm.title }}</p>' +
      '<p>This is a test component</p>' +
      '<button ng-click="vm.href()">Go Home</button>' +
    '</div>'
}
