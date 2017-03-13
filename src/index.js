import vendors from 'vendor';
import 'bootstrap/dist/css/bootstrap.css';
import  statesModule from 'states/states.moudle';

function appConfig($stateProvider, $urlRouterProvider, $httpProvider) {
   $urlRouterProvider.otherwise('/');

}

angular.module('app.starter', [
    'ui.router',
    'ui.bootstrap',
    statesModule.name,
]).config(appConfig)

angular.bootstrap(document, ['app.starter']);
