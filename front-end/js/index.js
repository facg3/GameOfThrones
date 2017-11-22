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
// name, tv series, playedBy ... objects inside array ... return array of objects.
    var char = {
      name: urlObject.name,
      playedBy: urlObject.playedBy[0]
    }
    arrayOfCharacters.push(char);
    return arrayOfCharacters;
  },

// Sultan
  getCharacterDetails: function(charObject){
// span value
    return {
      name: charObject[0].title,
      birthdate: charObject[0].birthday,
      birthplace: charObject[0].birthplace,
      bio: charObject[0].description,
      image: charObject[0].image.thumb
    };
  },
};


var api1 = "https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/books/8";

gotFunctions.getResponse(api1, gotFunctions.getPovCharacters);
var result = gotFunctions.getPovCharacters();
var arrayOfCharacters = [];

result.forEach(function(url){
 url="https://cors-anywhere.herokuapp.com/"+url;
 let x = gotFunctions.getResponse(url, gotFunctions.makePovArray);
})

if (typeof module !== 'undefined') {
  module.exports = gotFunctions;
}
})();
