  function getIdByUser(id){ 
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjNjNzViMWI2ZDUwMGNkMjgzZjU0MmU4ZTFlZDJkYSIsInN1YiI6IjVjMDNiNDQwMGUwYTI2NDg2YTA2ZjYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pj6auQlw-VfPG6PenA6MbujH_SQk3Xr3LmD6H9WdH04'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then(response => response.json())
      .then(data => {
      console.log(data)
      userSingelMovie.innerHTML =""
      userSingelMovie.innerHTML +=`
      <div id="card">
        <h1 id="title">${data.title}</h1>
        <div id="trailer"></div>
        <h2 id= "release_date">${data.release_date}</h2>
        <p id="overview">${data.overview}</p>
        <p class="runtime">${data.runtime} minutes</p>
        <div id="actors"><h4>actors:</h4><div>
        </div>
      `
      const csrdDiv = document.getElementById('card')
        for(let i = 0 ; i < data.genres.length ;i++){ 
          csrdDiv.innerHTML +=`<span> ${data.genres[i].name} </span>`
      }
      csrdDiv.innerHTML +=` 
      <br>
      <img src="http://image.tmdb.org/t/p/w500${data.poster_path}" id="posterImg">`

      fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
        .then(response => response.json())
        .then(data => {
          let namesOfActors = document.getElementById("actors")
          for(let i =0 ; i<data.cast.length ;i++){ 
            namesOfActors.innerHTML +=`
          <p>${data.cast[i].name}</p>`
        }
          console.log(data)})
        .catch(err => console.error(err));
 
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(data => {
          let trailerOfMovie = document.getElementById("trailer")
          trailerOfMovie.innerHTML += `
          <iframe src="https://www.youtube-nocookie.com/embed/${data.results[0].key}?si=4ZJBUdvHa240g8LV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen id="trailerVid"></iframe>`
          console.log(data)})
        .catch(err => console.error(err));
        
       })

     
      .catch(err => console.error(err));
    }
    btnId.addEventListener('click' , (e) =>{
      e.preventDefault();
      let idVul = imgsId.value;
      getIdByUser(idVul)
    })
