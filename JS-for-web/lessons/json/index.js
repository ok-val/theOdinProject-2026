async function populate() {
    // We are not going obtain the JSON via a native API called Fetch
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroes = await reponse.json();

    // populateHeader(superHeroes);
    // populateHeroes(superHeroes);
    
}

function populateHeader() {

}

function populateHeroes() {
    
}