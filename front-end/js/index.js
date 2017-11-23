function createCharNode(char){
  var actorsContainer = document.querySelector(".actors");
  var divNode = document.createElement("div");
  var spanNode1 = document.createElement("span");
  var spanNode2 = document.createElement("span");
  var aNode = document.createElement("a");
  var buttonNode = document.createElement("button");
  divNode.className = "actor1";
  spanNode1.innerText = char.name;
  spanNode1.className = "got-name";
  spanNode2.innerText = char.playedBy;
  spanNode2.className = "real-name";
  buttonNode.innerText = "Details";
  buttonNode.className = "b";
  aNode.href = "#h";
  aNode.appendChild(buttonNode);
  divNode.appendChild(spanNode1);
  divNode.appendChild(document.createElement("br"));
  divNode.appendChild(spanNode2);
  divNode.appendChild(document.createElement("br"));
  divNode.appendChild(aNode);
  actorsContainer.appendChild(divNode);
};

function makeCharArray(charDetails){
  charDetailsArray.push(charDetails);
  return charDetailsArray;
}

function createDetailsNode(charDetailsArray, realName){
  charDetailsArray.forEach(function(element){
      if(realName===element.name){
        var nameIndex = charDetailsArray.indexOf(element);
        var detailsContainer = document.querySelector(".bottom-part");
        detailsContainer.innerHTML = "";
        var mainDiv = document.createElement("div");
        mainDiv.className = "details";
        var personDiv = document.createElement("div");
        personDiv.className = "person";
        var bioDiv = document.createElement("div");
        bioDiv.className = "bio";
        var personImg = document.createElement("img");
        personImg.className = "per";
        personImg.src = charDetailsArray[nameIndex].image;
        personImg.alt =  "An image of: " + charDetailsArray[nameIndex].name;
        var personName = document.createElement("h2");
        personName.innerText = charDetailsArray[nameIndex].name;
        var personBD = document.createElement("h4");
        personBD.innerText = charDetailsArray[nameIndex].birthdate;
        var personBP = document.createElement("h4");
        personBP.innerText = charDetailsArray[nameIndex].birthplace;
        var personBio = document.createElement("p");
        personBio.innerText = charDetailsArray[nameIndex].bio;
        bioDiv.appendChild(personName);
        bioDiv.appendChild(personBD);
        bioDiv.appendChild(personBP);
        bioDiv.appendChild(personBio);
        personDiv.appendChild(personImg);
        mainDiv.appendChild(personDiv);
        mainDiv.appendChild(bioDiv);
        detailsContainer.appendChild(mainDiv);
      }
  })
}

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
    var result = [];
    objectOfBooks.povCharacters.forEach(function(item){
      result.push("https://cors-anywhere.herokuapp.com/"+item);
      gotFunctions.getResponse("https://cors-anywhere.herokuapp.com/"+item, gotFunctions.makePovObj);
    });
    return result;
  },

  // Yasmin
  makePovObj: function(urlObject){
    if(urlObject.playedBy[0]){
      var char = {
        name: urlObject.name,
        playedBy: urlObject.playedBy[0]
      }
      createCharNode(char);
      gotFunctions.getResponse("http://www.theimdbapi.org/api/find/person?name="+char.playedBy, gotFunctions.getCharacterDetails);
      return char;
    }
  },

  // Sultan
  getCharacterDetails: function(charObject){
    if(charObject){
      var charDetails = {
        name: charObject[0].title,
        birthdate: charObject[0].birthday,
        birthplace: charObject[0].birthplace,
        bio: charObject[0].description,
        image: charObject[0].image.thumb
      };
      makeCharArray(charDetails);
      return charDetails;
    }
    },
};


var api1 = "https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/books/8";
var charDetailsArray = [];

if (document.addEventListener){
    document.addEventListener('click',yourHandler,false);
}
else{
    document.attachEvent('onclick',yourHandler);
}
function yourHandler(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.className==="b")
    {
      createDetailsNode(charDetailsArray, target.parentNode.parentNode.querySelector(".real-name").innerText);
    }
}

document.querySelector(".button").addEventListener('click', function(){
  gotFunctions.getResponse(api1, gotFunctions.getPovCharacters);
})

if (typeof module !== 'undefined') {
  // module.exports = gotFunctions
  //module.exports = makeCharArray
}
