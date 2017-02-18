var detect = require('./detect_customized');
var remove = require('lodash.remove');
var rp = require('request-promise');

var outputLabel = detect.detectLabel(__dirname + '/resources/Lego.jpeg').then(function(output){
    console.log("Full output" , output);
    console.log('Annotations : ' , output[1].responses[0].labelAnnotations);

    var annotations = output[1].responses[0].labelAnnotations;

    var usableItems = [];

     var query = '?query=';
    annotations.forEach(function(annotation){
        var description  = annotation.description;
        var score = annotation.score;

        if(parseFloat(score) > 0.65){
            usableItems.push(annotation);
            query = query + ' ' + description;
            query = query.replace(/ /g,"%20");
        }
    });


    var walmart_query_url = 'http://preso.prod-a.walmart.com/preso/search' + query;
    console.log('query' , walmart_query_url);
    rp(walmart_query_url)
        .then(function(htmlString){
          var result = JSON.parse(htmlString);
            console.log(result.items);
        })

});

// var outputLogos = detect.detectLogos(__dirname + '/resources/Lego.jpeg').then(function(output){
//     console.log(output);
// });


