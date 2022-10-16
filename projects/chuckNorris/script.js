// document.getElementById("new-joke-button").addEventListener("click", function newJoke(e) {
//   e.preventDefault();
//   console.log("hit here");
  
//   let query = document.getElementById("search");
//   let urlNewJoke = "https://api.chucknorris.io/jokes/search?query=" + query;
  
//   fetch(urlNewJoke)
//     .then(function(response) {
      
//       if (response.status != 200) {
//       updateJoke("Try another search!");
//       }
      
//       return response.json();
//     }).then(function(json) {
//       console.log(json);
      
//       updateJoke(json.value);
//     });
// });

document.getElementById("random").addEventListener("click", function newJoke(e) {
  e.preventDefault();
  console.log("hit here");
  
  let urlRandomJoke = "https://api.chucknorris.io/jokes/random";
  
  fetch(urlRandomJoke)
    .then(function(response) {
      
      if (response.status != 200) {
       updateJoke("Try another search!");
      }
      
      return response.json();
    }).then(function(json) {
      console.log(json);
      
      updateJoke(json.value);
    });
});


function updateJoke(info) {
  
  document.getElementById('joke').textContent = info;
}

function toUpperCaseWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

let urlImage = "html";

let urlCategories = "https://api.chucknorris.io/jokes/categories";

fetch(urlCategories)
  .then(function(response) {
    
    if (response.status != 200) {
        return {text: "Error calling the API service: " + response.statusText};
      }
      return response.json();
      
    }).then(function(json) {
      console.log(json);
      
      let categories = document.getElementById("categories");
      
      for (let i=0; i < json.length; i++) {
        let category = json[i];
        let text = document.createTextNode(toUpperCaseWord(category));
        let newButton = document.createElement("button");
        let anchorTag = document.createElement("a");
        anchorTag.appendChild(text);
        anchorTag.addEventListener("click", function onClick(event) {
          console.log(category);
          let url = "https://api.chucknorris.io/jokes/random?category="
          + category;
          
          fetch(url)
            .then(function(response) {
              
              if (response.status != 200) {
                updateJoke("Try another category!");
                // return json.value = "Error calling the API service: " + response.statusText;
              }
              
              return response.json();
            }).then(function(json) {
              console.log(json);
              
              updateJoke(json.value);
              
            });
        }); 
        
        newButton.setAttribute("id", category);
        newButton.type = "submit";
        newButton.appendChild(anchorTag);
        
        categories.appendChild(newButton);
      }
  });