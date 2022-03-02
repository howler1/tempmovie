const APIlink = 'https://imdb-api.com/en/API/Top250Movies/k_055x4wfj'

getData = () => {
  fetch(APIlink)
    .then((res)=> res.json())
    .then((data)=> {
      const rawData = data.items;
      console.log(rawData)
  });
  
}

getData();

