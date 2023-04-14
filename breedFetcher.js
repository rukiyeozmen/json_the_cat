const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, function(error, response, body) {
    const data = JSON.parse(body);
    const breed = data[0];
    if (error) {
      console.log("ERROR: ", error);
      return;
    }
    if (breed) {
      console.log(breed.description);
    } else {
      console.log("Breed not found");
    }

  });
};

module.exports = { fetchBreedDescription };