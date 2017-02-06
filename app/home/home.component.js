import homeHtml from './home-tpl.html';

let exampleComponent = {
  template: homeHtml,
  controllerAs: 'home',
  controller: function(homeService) {
    const vm = this;
    vm.title = homeService.title();
  }

}

export default exampleComponent;
