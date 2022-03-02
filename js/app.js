const APIlink = 'https://imdb-api.com/en/API/Top250Movies/k_055x4wfj'

getData = () => {
  fetch(APIlink)
    .then((res)=> res.json())
    .then((data)=> {
      const reData = refactorData(data.items);
      console.log(reData);
      movieCard(reData);
  });
  
}

// Refacator data==========================================================
refactorData = (movies) => {
  let movieData = []

  movies.map((m) => {
    movieData.push({
        id: m.id,
        title: m.title,
        year: m.year,
        rank: m.rank,
        image: m.image,
        imDbRating: m.imDbRating,
        likes: 0,
        comments: '',
      });
  });
  return movieData;
};
// =========================================================================

// Create resusable movie card =============================================
movieCard = (reFacMovies) => {
  let movieCards = '';

  reFacMovies.map((m) => {
    movieCards += `<div class="movieCard">
    <img src="${m.image}" alt="${m.title}" />
    <div class="movieCardDetails">
      <h2>${m.title}</h2>
      <p>${m.year}</p>
      <p>IMDB Rating: <span>${m.imDbRating}</span></p>
      <div class="movieCardSocial">
        <a href="#"><i class="fas fa-heart"></i></a>
        <a href="#"><i class="fas fa-share-alt"></i></a>
        <a href="#"><i class="fas fa-comment"></i></a>
      </div>
    </div>
  </div>`;
  });

  console.log('movieCard', movieCards);

  document.querySelector('body').innerHTMl = movieCards;
  
};

// =========================================================================
getData();