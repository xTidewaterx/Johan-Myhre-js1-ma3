//question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=48430cb7379f4988807c7e1baad1945b";
const gamesContainer = document.querySelector (".games")


async function  getRawgApi () {

  const response = await fetch(url);

  const results = await response.json();


  
  gamesContainer.innerHTML= "";

  for (let i= 0; i < 8; i++) {
    console.log(results.results[i].name , results.results[i].rating,results.results[i].name, results.results[i].tags );



    
  gamesContainer.innerHTML += `<div class="games">${results.results[i].name}</div>`;
  gamesContainer.innerHTML += `<div class="games">${results.results[i].rating}</div>`;
  gamesContainer.innerHTML += `<div class="games">${results.results[i].tags[0].id}</div>`;
  
 

 
  }
  

}




getRawgApi();



try {
 getRawgApi();
  console.log("success")
}
catch(error) {console.log("error occurred", error);
}