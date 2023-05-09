const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const moiveBox = document.querySelector("#movie-box")
const getMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    showMovies(data)
}
getMovies(APIURL);


const showMovies = (data) => {
    moiveBox.innerHTML = "";
    data.results.forEach(
        (result) => {
            const imagePath = result.poster_path === null ? "img/image-missing.png" : IMGPATH + result.poster_path;
          
            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
                <img src="${imagePath}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${result.original_title}  </h2>
                        <span> ${result.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${result.overview}
                    </p>
                 </div>
            `
            moiveBox.appendChild(box)
        }
    )
}


document.querySelector("#search").addEventListener(
    "keyup",
    function (event) {
        if (event.target.value != "") {
            getMovies(SEARCHAPI + event.target.value)
        } else {
            getMovies(APIURL);
        }
    }
    )
    
    
    let a = document.querySelector("#horror");

    a.addEventListener("click", function () {
        var b = ["resident evil","Conjuring","evil"];
        for(i=0;i<b.length;i++){
        //   console.log(b[i]);
            let searchQuery = b[i];
            
            getMovies(SEARCHAPI + searchQuery);
            continue;
        }
    });

    const c = document.querySelector("#comedy");

    c.addEventListener("click", function () {
        let b = ["golmaal","comedy"];
        for(i=1;i<b.length;i++){
            const searchQuery = b[i];
            getMovies(SEARCHAPI + searchQuery);
        }
    });

    const e = document.querySelector("#romance");

    e.addEventListener("click", function () {
        let b = ["titanic","the hangover"];
        for(i=1;i<b.length;i++){
            const searchQuery = b[i];
            getMovies(SEARCHAPI + searchQuery);
        }
    });
   
    const d = document.querySelector("#anime");

    d.addEventListener("click", function () {
        let b = ["demon slayer","Naruto"];
        for(i=1;i<b.length;i++){
            const searchQuery = b[i];
            getMovies(SEARCHAPI + searchQuery);
        }
    });