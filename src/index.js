// using fetch

//TO GET - GET REQUEST

// fetch("https://api.punkapi.com/v2/beers")
//   .then((response) => response.json())
//   .then((data) => console.log(data))

// fetch("https://my-burger-api.herokuapp.com/burgers")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

function getData() {
  fetch("https://my-burger-api-herokuapp.com/burgers")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const name = data[0].name;
      console.log(name);
    });
}

getData();
