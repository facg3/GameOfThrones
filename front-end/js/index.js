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
    var result = [];
    objectOfBooks.povCharacters.forEach(function(item){
      result.push("https://cors-anywhere.herokuapp.com/"+item);
      gotFunctions.getResponse("https://cors-anywhere.herokuapp.com/"+item, gotFunctions.makePovArray);
    });
  },

// Yasmin
  makePovArray: function(urlObject){
// name, tv series, playedBy ... objects inside array ... return array of objects.
    var char = {
      name: urlObject.name,
      playedBy: urlObject.playedBy[0]
    }
    if(char.playedBy){
      displayPovArray(char);
      gotFunctions.getResponse("http://www.theimdbapi.org/api/find/person?name="+char.playedBy, gotFunctions.getCharacterDetails);
    }
  },

// Sultan
  getCharacterDetails: function(charObject){
// span value
    if(charObject){
      var charDetails = {
        name: charObject[0].title,
        birthdate: charObject[0].birthday,
        birthplace: charObject[0].birthplace,
        bio: charObject[0].description,
        image: charObject[0].image.thumb
      };
    }
  },
};


var api1 = "https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/books/8";


var arrayOfCharacters = [];

if (typeof module !== 'undefined') {
  module.exports = gotFunctions;
}



document.querySelector(".button").addEventListener('click', function(){
  gotFunctions.getResponse(api1, gotFunctions.getPovCharacters);
})
