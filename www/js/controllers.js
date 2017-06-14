angular.module('starter.controllers', [])

  .controller('DashCtrl', function($scope) {

    // --------------------- Pie Chart Configuration -----------------------------
    $scope.pieLabels = ["FB", "Twitter", "Instagram"];
    $scope.pieData = [500, 500, 600];

    // --------------------- Line Chart Configuration ----------------------------
    $scope.lineSeries = ['Active', 'Inactive'];
    $scope.lineLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
    $scope.lineData = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

    // --------------------- animation for green color .badge-notification icon---
    anime({
      targets: ['.badge-notify'],
      scale: [1.2, 1],
      delay: 1800,
      duration: 2000,
    });

    // --------------------- animation for blue  color .badge --------------------
    anime({
      targets: ['.badge'],
      rotate: {
        value: 720,
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuad'
      },
      direction: 'normal'
    });

  })

  .controller('sondagesCtrl', function($scope, sondages) {
    $scope.items = sondages.all();
    $scope.remove = function(sondage) {
      sondages.remove(sondage);
    };
  })



  .controller('sondageDetailCtrl', function($scope, sondages, $stateParams) {
    $scope.sondage = sondages.get($stateParams.sondageId);
  })

  .controller('enquetesCtrl', function($scope, enquetes, $stateParams) {
    $scope.items = enquetes.all();
  })
  .controller('sequenceActionCtrl', function($state, $scope, sequences, $stateParams) {
    $scope.questions = function(enqueteID, sequenceID) {
     $state.go('tab.questions', {
       enquete: enqueteID,
      sequence: sequenceID
    });
      console.log("detail ok");
    };
  })

  .controller('quizzCtrl', function($scope, quizz, $stateParams) {
    $scope.items = quizz.all();
  })

  .controller('sequencesCtrl', function($scope, enquetes, $stateParams) {

    $scope.items = enquetes.get($stateParams.enquete);

  })
  .controller('questionsCtrl', function($scope, sequences, $stateParams) {

    $scope.items = sequences.get($stateParams.enquete, $stateParams.sequence);

  })
  .controller('questionsActCtrl', function($scope, sequences, $stateParams) {

    var tab = [ ];
    var longueurTab= 0;

    $scope.Selection = function(idquestion, valeurReponse, vara){
      tab[idquestion - 1] = valeurReponse;
      console.log(vara);
      longueurTab = vara;
      console.log(tab);
    };

    $scope.Soummission = function() {
    // verif si toutes les cases ont été cochées
      if (tab.length === longueurTab) {
        console.log("ok");
        // TODO JSON + renvoi vers la pages d'enquetes
      }else {
        console.log("ko");
        //TODO afficher une popup
      }
  };
});
