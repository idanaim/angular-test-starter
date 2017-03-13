/**
 * Created by idannaim on 8/11/15.
 */
import { homeController } from './home/homeController';
//current controller

function adminConfig($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "states/home/home.html",
      controller: 'homeController',
      controllerAs: 'Home'
    })
}

export default angular.module('states.module', [
  'ui.router'
])
  .config(adminConfig)
  .controller('homeController', homeController)