angular.module('starter.services', [])

  .factory('sondages', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var sondages = [{
      id: 1,
      title: 'Satisfaction Renault Clio',
      color: '#375a95',
      BColor: '#A4BA64',
      description: 'Partager nous votre avis sur ce classique de Renault',
      questions: [{
        id: 1,
        intitule: "Roulez vous souvent avec votre voiture?",
        Reponses: [
          {
          id: 1,
          count: 90,
          texte: "Tous les jours",
        }, {
          id: 2,
          count: 20,
          texte: "Une fois par semaine",
        }, {
          id: 3,
          count: 5,
          texte: "En periode de vacances"
        }, {
          id: 4,
          count: 0,
          texte: "En periode estivale uniquement"
        }]
      }, {
        id: 3,
        intitule: " Quel age a votre voiture?",
        Reponses: [
          {
          id: 1,
          count: 70,
          texte: "5-10 ans",
        }, {
          id: 2,
          count: 20,
          texte: "3-5 ans",
        }, {
          id: 3,
          count: 5,
          texte: "- de 2 ans"
        }, {
          id: 4,
          count: 0,
          texte: "Ne se prononce pas"
        }]
      }]
    }];

    return {
      all: function() {
        return sondages;
      },
      remove: function(sondage) {
        sondages.splice(sondages.indexOf(sondage), 1);
      },
      get: function(sondageId) {
        for (var i = 0; i < sondages.length; i++) {
          if (sondages[i].id === parseInt(sondageId)) {
            return sondages[i];
          }
        }
        return null;
      }
    };
  })

  .factory('enquetes', function() {

    var enquetes = [{
        id: 1,
        title: 'Legislatives 2017',
        color: '#375a95',
        BColor: '#A4BA64',
        sequences: [{
          id: 1,
          title: 'Tour 1',
          color: '#375a95',
          BColor: '#A4BA64',
          description: 'Vos intentions de vote pour le premier tour'
        }, {
          id: 2,
          title: 'Tour 2',
          color: '#375a95',
          BColor: '#A4BA64',
          description: 'Vos intentions de vote pour le deuxieme tour'
        }],
        description: "Commandée par l'INSEE"
      }, {
        id: 2,
        title: 'Urbanisme Nantes',
        count: 10,
        color: '#e52215',
        BColor: '#A4BA64',
        sequences: [{
          id: 1,
          title: 'Le chateau',
          color: '#375a95',
          BColor: '#A4BA64',
          description: 'Votre avis sur le chateau des Ducs de Bretagne'
        },{
          id: 2,
          title: "Le miroir d'eau",
          color: '#375a95',
          BColor: '#A4BA64',
          description: 'Votre avis sur cette nouvelle infrastructure'
        }],
        description: 'Commandée par la ville de Nantes'
      },
    ];

    return {
      all: function() {
        return enquetes;
      },
      get: function(enqueteId) {
        for (var i = 0; i < enquetes.length; i++) {
          if (enquetes[i].id === parseInt(enqueteId)) {
            return enquetes[i];
          }
        }
        return null;
      },
      getsequence: function(enqueteId) {
        for (var i = 0; i < enquetes.length; i++) {
          if (enquetes[i].id === parseInt(enqueteId)) {
            return enquetes[i];
          }
        }
        return null;
      }
    };
  })


  .factory('quizz', function() {
    var quizz = [{
      id: 1,
      title: 'Youtube',
      image: '../img/icons/youtube.svg',
      color: '#375a95',
      BColor: '#A4BA64',questions: [{
        id: 1,
        intitule: "A quelle fréquence utiliser vous Youtube",
        Reponses: [
          {
          id: 1,
          count: 20,
          texte: "Plusieurs fois par jour",
        }, {
          id: 2,
          count: 5,
          texte: "1 a 2 fois par jour",
        }, {
          id: 3,
          count: 2,
          texte: "Moins d'une fois par semiane"
        }, {
          id: 4,
          count: 0,
          texte: "Jamais"
        }]
      }, {
        id: 2,
        intitule: "Etes vous satisfait de ce qu'apporte Youtube?",
        Reponses: [
          {
          id: 1,
          count: 18,
          texte: "Tres satisfait",
        }, {
          id: 2,
          count: 7,
          texte: "Moyennement satisfait",
        }, {
          id: 3,
          count: 2,
          texte: "Peu satisfait"
        }, {
          id: 4,
          count: 0,
          texte: "Pas du tout satisfait"
        }]
      }],
      description: 'Partager nous votre experience Youtube'

    }, {
      id: 2,
      title: 'Twitter',
      image: '../img/icons/twitter.svg',
      color: '#375a95',
      questions: [{
        id: 1,
        intitule: "Consultez vous frequemment Twitter?",
        Reponses: [
          {
          id: 1,
          count: 35,
          texte: "Des que j'en ai la possibilite",
        }, {
          id: 2,
          count: 16,
          texte: "2 a 3 fois par jour",
        }, {
          id: 3,
          count: 0,
          texte: "Hebdomadairement"
        }, {
          id: 4,
          count:1,
          texte: "Jamais"
        }]
      }, {
        id: 2,
        intitule: "Vous sentez vous plus proches des personnes auxquelles vous etes abonne?",
        Reponses: [
          {
          id: 1,
          count: 15,
          texte: "Oui",
        }, {
          id: 2,
          count: 15,
          texte: "Non",
        }, {
          id: 3,
          count: 2,
          texte: "Tres proche"
        }, {
          id: 4,
          count: 3,
          texte: "Ne se prononce pas"
        }]
      }],
      BColor: '#A4BA64',
      description: 'Tweet!'
    }, ];

    return {
      all: function() {

        return quizz;
      },get: function(quizzid) {
        for (var i = 0; i < quizz.length; i++) {
          if (quizz[i].id === parseInt(quizzid)) {
            return quizz[i];
          }
        }
        return null;
      }
    };
  })


  .factory('sequences', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var sequences = [{
      id: 1,
      enqueteid: 1,
      title: 'Tour 1',
      color: '#375a95',
      BColor: '#A4BA64',
      description: 'Vos intentions de vote pour le premier tour',
      questions: [{
        id: 1,
        intitule: "Parmi ces partis candidats, lequel vous interesse le plus?",
        Reponses: [
          {
          id: 1,
          count: 5,
          texte: "En marche",
        }, {
          id: 2,
          count: 5,
          texte: "France Insoumise",
        }, {
          id: 3,
          count: 5,
          texte: "Front National"
        }, {
          id: 4,
          count: 5,
          texte: "Modem"
        }]
      }, {
        id: 2,
        intitule: "Vous sentez vous represente(e) par les partis presents?",
        Reponses: [
          {
          id: 1,
          count: 5,
          texte: "Oui",
        }, {
          id: 2,
          count: 5,
          texte: "Non",
        }, {
          id: 3,
          count: 5,
          texte: "Partiellement"
        }, {
          id: 4,
          count: 5,
          texte: "Ne se prononce pas"
        }]
      }]
    },
    {
      id: 2,
      enqueteid: 1,
      title: 'Tour 2',
      color: '#375a95',
      BColor: '#A4BA64',
      description: 'Vos intentions de vote pour le second tour',
      questions: [{
        id: 1,
        intitule: "Parmi ces partis candidats, lequel vous interesse le plus?",
        Reponses: [
          {
          id: 1,
          count: 5,
          texte: "En marche",
        }, {
          id: 2,
          count: 5,
          texte: "France Insoumise",
        }, {
          id: 3,
          count: 5,
          texte: "Front National"
        }, {
          id: 4,
          count: 5,
          texte: "Modem"
        }]
      }, {
        id: 2,
        intitule: "Vous sentez vous represente(e) par les partis presents?",
        Reponses: [
          {
          id: 1,
          count: 5,
          texte: "Oui",
        }, {
          id: 2,
          count: 5,
          texte: "Non",
        }, {
          id: 3,
          count: 5,
          texte: "Partiellement"
        }, {
          id: 4,
          count: 5,
          texte: "Ne se prononce pas"
        }]
      }]
    }, {
      id: 3,
      enqueteid: 2,
      title: 'Le chateau',
      color: '#375a95',
      BColor: '#A4BA64',
      description: 'Votre avis sur le chateau des Ducs de Bretagne',
      questions: [{
        id: 1,
        intitule: "A quelle frequence allez vous au chateau?",
        Reponses: [
          {
          id: 1,
          count: 5,
          texte: "1 fois par an",
        }, {
          id: 2,
          count: 5,
          texte: "1 fois par mois",
        }, {
          id: 3,
          count: 5,
          texte: "1 fois par semaine"
        }, {
          id: 4,
          count: 5,
          texte: "Pendant les vacances"
        }]
      }, {
        id: 2,
        intitule: "Que pensez vous de son integration aux evenements urbains?",
        Reponses: [
          {
          id: 1,
          count: 5,
          texte: "Bien integre",
        }, {
          id: 2,
          count: 5,
          texte: "Moyennement integre",
        }, {
          id: 3,
          count: 5,
          texte: "Ces evenements denaturent le chateau"
        }, {
          id: 4,
          count: 5,
          texte: "Ne se prononce pas"
        }]
      }]
    }];

    return {
      all: function() {
        return sequences;
      },
      remove: function(sequence) {
        sequences.splice(sequences.indexOf(sequence), 1);
      },
      get: function(sequenceId, enqueteID) {
        for (var i = 0; i < sequences.length; i++) {
          if (sequences[i].id === parseInt(sequenceId) && sequences[i].enqueteid === parseInt(enqueteID)) {
            return sequences[i];
          }
        }
        return null;
      }
    };
  })

  .factory('questions', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var questions = [{
      id: 1,
      enqueteid: 1,
      sequenceid: 1,
      intitule: "Quel est le sens de l'existence?",
      Reponses: [
        {
        id: 1,
        count: 5,
        texte: "Ahahah",
      }, {
        id: 2,
        count: 5,
        texte: "D, la réponse D",
      }, {
        id: 3,
        count: 5,
        texte: "Go Vegan!"
      }, {
        id: 4,
        count: 5,
        texte: "42"
      }]
    }, {
      id: 2,
      enqueteid: 1,
      sequenceid: 2,
      intitule: "Quel est le sens de l'existence?",
      Reponses: [
        {
        id: 1,
        count: 5,
        texte: "Ahahah",
      }, {
        id: 2,
        count: 5,
        texte: "D, la réponse D",
      }, {
        id: 3,
        count: 5,
        texte: "Go Vegan!"
      }, {
        id: 4,
        count: 5,
        texte: "42"
      }]
    }];

    return {
      all: function() {
        return questions;
      },
      remove: function(sequence) {
        questions.splice(questions.indexOf(sequence), 1);
      },
      get: function(enqueteId, sequenceID) {
        for (var i = 0; i < questions.length; i++) {
          if (questions[i].enqueteid === parseInt(enqueteId) && questions[i].sequenceid === parseInt(sequenceID)) {
            return questions[i];
          }
        }
        return null;
      }
    };
  });
