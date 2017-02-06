import angular from 'angular';
import routing from './home.route';
import homeComponent from './home.component';
import service from './home.service';

angular
  .module('home', [])
  .component('home', homeComponent)
  .factory('homeService', service)
  .config(routing);
