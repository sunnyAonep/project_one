  let movies1 = []
  const storageVal =localStorage.getItem("movies")
  console.log(JSON.parse(storageVal));
  if(storageVal !== null){
    movies1 = JSON.parse(storageVal);
  }
   
   function movieByName(name ){ 
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjNjNzViMWI2ZDUwMGNkMjgzZjU0MmU4ZTFlZDJkYSIsInN1YiI6IjVjMDNiNDQwMGUwYTI2NDg2YTA2ZjYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pj6auQlw-VfPG6PenA6MbujH_SQk3Xr3LmD6H9WdH04'
      }
    };
    fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(data => {
      console.log(data)
      if(data.total_results > 0){ 
        inputContain.innerHTML =''
      for (let i = 0; i < data.results.length; i++) {
        const movies = data.results[i];
        container.innerHTML += `
        <div id = img>
        <img src = "http://image.tmdb.org/t/p/w500${data.results[i].poster_path}">
        <div class="dropdown">
        <button class="infobtn">info</button>
        <div class="dropdown-content">
        <p>name of move:${data.results[i].title}</p>
        <p>vote: ${data.results[i].vote_average}/10</p>
        <p>release date : ${data.results[i].release_date}</p>
        <p>sells : $${data.results[i].popularity} million </p>
        <button onclick = "addEventListenerToButton(${data.results[i].id});">like</button>
        </div>
        </div>
        <div>
       `}}
    })
      .catch(err => console.error(err));
    }
    movieNameSubmit.addEventListener('click' , (e)=>{
      e.preventDefault();
      const movieNameInput = movieName.value;
      if (movieNameInput == "") {
        alert("try again put a name of movie")
      }else{
        movieByName(movieNameInput)
      }
    })
    function addEventListenerToButton(id) {
      let movisObject = {id}
      movies1.push(movisObject)
      console.log(movies1);
     localStorage.setItem("movies" , JSON.stringify(movies1))
  } 