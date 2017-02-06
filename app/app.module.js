import angular from 'angular';
import uirouter from 'angular-ui-router';
import home from './home/home.module';

require('./main.scss');

angular.module('app', [
  uirouter,
  'home'
]);
