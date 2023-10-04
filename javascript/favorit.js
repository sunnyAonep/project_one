let movies1 = []
const storageVal =localStorage.getItem("movies")
 if(storageVal !== null){
 movies1 = JSON.parse(storageVal);
 }

 console.log(movies1);

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
      myfavorit.innerHTML +=`
      <div>
      <h1 id="title">${data.title}</h1>
      <img src="http://image.tmdb.org/t/p/w500${data.poster_path}" id="posterImg">
      <div>`
      })     
      .catch(err => console.error(err));
    }

    for(let i = 0 ; i<movies1.length ; i++){
        getIdByUser(movies1[i].id)
    }
    function ButtonRemove() {
      if(removeBtn){
        if(confirm('if you really want to remove all press ok')){
          localStorage.removeItem("movies" , JSON.stringify(movies1))
           window.location = ''
        }
        return
   }
      } 
