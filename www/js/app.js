// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'chart.js', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }

    if (window.ga) {
      window.ga.startTrackerWithId('UA-82430654-1');
      window.ga.trackView('Start application')
    }

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });
})


.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.sondages', {
    url: '/sondages',
    views: {
      'tab-sondages': {
        templateUrl: 'templates/tab-sondages.html',
        controller: 'sondagesCtrl'
      }
    }
  })


  .state('tab.enquetes', {
    url: '/enquetes',
    views: {
      'tab-enquetes': {
        templateUrl: 'templates/tab-enquetes.html',
        controller: 'enquetesCtrl'
      }
    }
  })

  .state('tab.sequences', {
    url: '/sequences/:enquete',
    views: {
      'tab-enquetes': {
        templateUrl: 'templates/tab-sequences.html',
        controller: 'sequencesCtrl'
      }
    }
  })

  .state('tab.questions', {
    url: '/questions/:enquete',
    params : {
      enquete: null,
      sequence: null
    },
    views: {
      'tab-enquetes': {
        templateUrl: 'templates/tab-questions.html',
        controller: 'questionsCtrl'
      }
    }
  })
  .state('tab.questions2', {
    url: '/questions2/:sondage',
    views: {
      'tab-sondages': {
        templateUrl: 'templates/tab-questions.html',
        controller: 'questions2Ctrl'
      }
    }
  })
  .state('tab.reponses', {
    url: '/reponses/:enquete',
    params : {
      enquete: null,
      sequence: null
    },
    views: {
      'tab-enquetes': {
        templateUrl: 'templates/tab-reponses.html',
        controller: 'reponsesCtrl'
      }
    }
  })
  .state('tab.reponses2', {
    url: '/reponses2/:sondage',
    views: {
      'tab-sondages': {
        templateUrl: 'templates/tab-reponses.html',
        controller: 'reponses2Ctrl'
      }
    }
  })
  .state('tab.reponses3', {
    url: '/reponses3/:quizz',
    views: {
      'tab-quizz': {
        templateUrl: 'templates/tab-quizzReponses.html',
        controller: 'reponses3Ctrl'
      }
    }
  })
  .state('tab.questions3', {
    url: '/questions3/:quizz',
    views: {
      'tab-quizz': {
        templateUrl: 'templates/tab-quizzQuestions.html',
        controller: 'questions3Ctrl'
      }
    }
  })
  .state('tab.quizz', {
    url: '/quizz',
    views: {
      'tab-quizz': {
        templateUrl: 'templates/tab-quizz.html',
        controller: 'quizzCtrl'

      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');
  $ionicConfigProvider.tabs.position('bottom'); // other values: top

});
