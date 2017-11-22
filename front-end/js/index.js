(()=>{
var gotFunctions = {
// Marwa:
  fetch: function(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4){
        if(xhr.status == 200){
          callback(null, JSON.parse(xhr.responseText));
        } else {
          callback("Error!! "+url);
        }
      }
    }

    xhr.open("GET", url, true);
    xhr.send();
},

// Sultan
  getResponse: function(url, callback){
    gotFunctions.fetch(url, (error, response)=>{
      if(error){
        console.log(error);
      } else {
        callback(response);
      }
    })
  },

// Ismail
  getPovCharacters: function(objectOfBooks){
    // povCharacters from each book , return an array contains all urls
    // don't repeat urls
    objectOfBooks = ["https://anapioficeandfire.com/api/characters/148",
    "https://anapioficeandfire.com/api/characters/148",
    "https://anapioficeandfire.com/api/characters/148",
    "https://anapioficeandfire.com/api/characters/148"]
    return objectOfBooks;
  },

// Yasmin
  makePovArray: function(urlObject){
    console.log(urlObject);
// name, tv series, playedBy ... objects inside array ... return array of objects.
    var arrayOfCharacters = [];
    arrayOfCharacters.push({name: urlObject.name, playedBy: urlObject.playedBy[0]})
    console.log(arrayOfCharacters);
    return arrayOfCharacters;
  },

// Sultan
  getCharacterDetails: function(spanValue){
// span value
  },
};


var api1 = "https://anapioficeandfire.com/api/books"
var api2 = "http://www.theimdbapi.org/api/find/person?name=" + ""

gotFunctions.getResponse(api1, gotFunctions.getPovCharacters);
var result = gotFunctions.getPovCharacters();

result.forEach(function(url){
  url="https://cors-anywhere.herokuapp.com/"+url
 let x = gotFunctions.getResponse(url, gotFunctions.makePovArray);
})

if (typeof module !== 'undefined') {
  module.exports = gotFunctions;
}
})();
