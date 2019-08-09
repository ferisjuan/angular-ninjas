import '../styles/styles.css';
import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import appConfig from './app.config';
import DirectoryController from './app.directory.controller.js';
import randomNinja from './app.random-ninja.directive.js';
import ContactController from './app.contact.controller.js';

export default angular
  .module('app', ['ngRoute', 'ngAnimate'])
  .config(['$routeProvider', '$locationProvider', appConfig])
  .directive('randomNinja', [randomNinja])
  .controller('DirectoryController', DirectoryController)
  .controller('ContactController', ContactController);
