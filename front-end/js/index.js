var gotFunctions = {
// Marwa:
  fetch: (function(url, callback){

  })(),

// Sultan
  getResponse: (function(url, callback){
    // fetch(url, (err, result)=>{
    //   if(err){
    //     alert(err);
    //   } else {
    //     callback(result);
    //   }
  })(),

// Ismail
  getPovCharacters: (function(response){
    // povCharacters from each book , return an array contains all urls
    // don't repeat urls
  })(),

// Yasmin
  makePovArray: (function(array){
// name, tv series, playedBy ... objects inside array ... return array of objects.
  })(),

// Sultan
  getCharacterDetails: (function(array){
// span value
  })(),
};

var api1 = "https://anapioficeandfire.com/api/books"
var api2 = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + ""
// getResponse(api1, getPovCharacters)

});

if (typeof module !== 'undefined') {
  module.exports = gotFunctions;
}
