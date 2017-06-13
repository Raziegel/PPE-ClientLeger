angular.module('starter.services', [])

  .factory('sondages', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var sondages = [{
      id: 1,
      title: 'Sondage 1',
      color: '#375a95',
      BColor: '#A4BA64',
      description: '<b>Film 1 !</b> Votre avis sur ce nouvel incontournable '
    }, {
      id: 2,
      title: 'Enquète 1',
      color: '#375a95',
      BColor: '#A4BA64',
      description: '<b>ProduiX !</b> Votre avis sur ce nouvel incontournable '
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
        img: '../img/icons/fb.svg',
        title: 'Enquète 1',
        count: 56,
        color: '#375a95',
        BColor: '#A4BA64',
        sequences: [{
          id: 1,
          title: 'sequence 1',
          color: '#375a95',
          BColor: '#A4BA64',
          description: '<b>Film 1 !</b> Votre avis sur ce nouvel incontournable '
        }, {
          id: 2,
          title: 'Enquète 1',
          color: '#375a95',
          BColor: '#A4BA64',
          description: '<b>ProduiX !</b> Votre avis sur ce nouvel incontournable '
        }],
        description: '<b>ProduiX !</b> Votre avis sur ce nouvel incontournable '
      }, {
        img: '../img/icons/youtube.svg',
        title: 'Youtube',
        count: 10,
        color: '#e52215',
        BColor: '#A4BA64',

        description: '<b>Jay Garic</b> has commented on your proile <i class="italic thin">"How should I <b>buy</b> your app"</i>'
      }, {
        img: '../img/icons/twitter.svg',
        title: 'Twitter',
        count: 78,
        color: '#2196f3',
        BColor: '#FF9900',
        url: 'https://twitter.com/deshatom',

        description: '<b>NodeSphere and 6 others</b> liked your Retweet <span class="small thin"> Nov <b>9</b></span>'
      },

      {
        img: '../img/icons/snapsondage.svg',
        title: 'Snapsondage',
        count: 2,
        color: '#2196f3',
        BColor: '#A4BA64',
        description: 'You have few messages from <b>Snapsondage<b> 12 min ago'
      }, {
        img: '../img/icons/linkedin.svg',
        title: 'LinkedIn',
        count: 65,
        color: '#2285b6',
        description: '<b>12</b> jobs may interest based on your <b>profile</b> - Overview'
      }, {
        img: '../img/icons/pinterest.svg',
        title: 'Pinterest',
        count: 345,
        color: '#bd0a1c',
        url: 'https://www.pinterest.com/deshatom/',

        description: '<b>Sarah Knight</b>, <b>Lisa Fox</b> and <b>48</b> other Pinned your pin <span class="small thin"><b>2</b> days ago</span>'
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
      title: 'Quizz 1',
      color: '#375a95',
      BColor: '#A4BA64',
      description: '<b>Film 1 !</b> Votre avis sur ce nouvel incontournable '
    }, {
      id: 2,
      title: 'Sondage 1',
      color: '#375a95',
      BColor: '#A4BA64',
      description: '<b>Film 1 !</b> Votre avis sur ce nouvel incontournable '
    }, ];

    return {
      all: function() {
        console.log("quizz")
        return quizz;
      },
    };
  })


  .factory('sequences', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var sequences = [{
      id: 1,
      enqueteid: 1,
      title: 'séquence 1',
      color: '#375a95',
      BColor: '#A4BA64',
      description: '<b>Film 1 !</b> Votre avis sur ce nouvel incontournable ',
      questions: [{
        id: 1,
        intitule: "Quel est le sens de l'existence?",
        Reponses: [
          {
          id: 1,
          texte: "Ahahah",
        }, {
          id: 2,
          texte: "D, la réponse D",
        }, {
          id: 3,
          texte: "Go Vegan!"
        }, {
          id: 4,
          texte: "42"
        }]
      }, {
        id: 2,
        intitule: "2Quel est le sens de l'existence?",
        Reponses: [{
          id: 1,
          texte: "Ahahah",
        }, {
          id: 2,
          texte: "D, la réponse D",
        }, {
          id: 3,
          texte: "Go Vegan!"
        }, {
          id: 4,
          texte: "42"
        }]
      }]
    }, {
      id: 2,
      enqueteid: 1,
      title: 'Enquète 1',
      color: '#375a95',
      BColor: '#A4BA64',
      description: '<b>ProduiX !</b> Votre avis sur ce nouvel incontournable ',
      questions: [{
        id: 1,
        intitule: "Quel est le sens de l'existence?",
        Reponses: [{
          id: 1,
          texte: "Ahahah",
        }, {
          id: 2,
          texte: "D, la réponse D",
        }, {
          id: 3,
          texte: "Go Vegan!"
        }, {
          id: 4,
          texte: "42"
        }]
      }, {
        id: 2,
        intitule: "Quel est le sens de l'existence?",
        Reponses: [{
          id: 1,
          texte: "Ahahah",
        }, {
          id: 2,
          texte: "D, la réponse D",
        }, {
          id: 3,
          texte: "Go Vegan!"
        }, {
          id: 4,
          texte: "42"
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
      Reponses: [{
        id: 1,
        texte: "Ahahah",
      }, {
        id: 2,
        texte: "D, la réponse D",
      }, {
        id: 3,
        texte: "Go Vegan!"
      }, {
        id: 4,
        texte: "42"
      }]
    }, {
      id: 2,
      enqueteid: 1,
      sequenceid: 2,
      intitule: "Quel est le sens de l'existence?",
      Reponses: [{
        id: 1,
        texte: "Ahahah",
      }, {
        id: 2,
        texte: "D, la réponse D",
      }, {
        id: 3,
        texte: "Go Vegan!"
      }, {
        id: 4,
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
