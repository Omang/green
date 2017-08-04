(function(){
    angular.module("WEBLAB",['ui.router', 'ngFileUpload', 'chart.js'])
                 .config(config).run(run);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider){
                  $urlRouterProvider.otherwise('/');
                  $stateProvider.state('home', {
                      url: '/',
                      templateUrl: 'weblab/home/home.html',
                      controller: 'homeController',
                      controllerAs: 'hc'
                  });
      // $urlRouterProvider.html5Mode(true);
    }
}())