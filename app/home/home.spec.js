import home from './home.module';

describe('Controller: Home', function() {
  let $controller;

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject(function(_$controller_) {
    console.log(_$controller_);
    $controller = _$controller_;
  }));

  it('Should HomeCtrl must be defined', function () {
    expect($controller).toBeDefined();
  });


  it('name is initialized to World', function() {
    let ctrl = $controller('home');
    expect(ctrl.name).toBe('home');
  });
});
