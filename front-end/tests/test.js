var test = require('tape');
var index = require('../js/index.js');


// test('Make Characters Array', function(t) {
//   t.deepEqual(index({
//     name: "Character Name",
//     birthdate: 02/02/1995,
//     birthplace: "Palestine",
//     bio: "Something to say!",
//     image: "link to image"
//   }),  [{
//     name: "Character Name",
//     birthdate: 02/02/1995,
//     birthplace: "Palestine",
//     bio: "Something to say!",
//     image: "link to image"
//   }], "Make Characters Array Test Should Return An Array");
//   t.end();
// });
//
// test('Get Object Characters', function(t){
//   t.deepEqual(index.getPovCharacters(
//     {povCharacters: ["link"]}
//   ), ["https://cors-anywhere.herokuapp.com/link"], "Get Pov Characters Should Return Array of Strings");
//   t.end();
// })
//
// test("Make Character Object", function(t){
//   t.deepEqual(index.makePovObj({name:"Name", playedBy:["SomeOne"]}), {name:"Name", playedBy: "SomeOne"},
//     "Make Character Object should return an Object");
//   t.end();
// })
//
// test("Get Character Details", function(t){
//   t.deepEqual(index.getCharacterDetails([{
//     title: "Name",
//     birthday: 02/02/1995,
//     birthplace: "Palestine",
//     description: "Things about Name",
//     image: {thumb:"url"}
//   }]), {
//     name: "Name",
//     birthdate: 02/02/1995,
//     birthplace: "Palestine",
//     bio: "Things about Name",
//     image: "url"
//   }, "Get Character Details Should Return An Object");
//   t.end();
// })
