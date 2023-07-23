async function getDataMarvel() {
    const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=7addbb5013b9c2324f05f770fa1cad8e&hash=dccd52e1d6cd94c615f9416607e0e255';
    const container = document.querySelector('#marvel-row');
    

    let contentHTML = '';

    const marvel = await fetch(urlAPI);
    const response = await marvel.json();

    Object.values(response.data.results).forEach(hero => {
        let urlHero = hero.urls[0].url;
        contentHTML += `
            <div class="container">
                <h3 class="title">${hero.name}</h3>
                <a href="${urlHero}" target="_blank">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                
            </div>`;
    });
    container.innerHTML = contentHTML;
}
getDataMarvel();

const search = document.querySelector('#search-input');
// let contentHTML = '';


search.addEventListener('keyup', () => {
    const inputText = search.value;
    console.log(inputText);
    // let searchHero = searchByName(inputText);
    // console.log(searchInput);
    // cleanView();
    // render (getDataMarvel);
     
});

// console.log(searchInput);

    // const searchByName = (hero) => {
    //     const filteredPersonMarvel = contentHTML.filter((element)=> {
    //         if(element.name(hero)) {
    //             return hero;
    //         }
    //     });
    //     return filteredPersonMarvel;
    // }
    







