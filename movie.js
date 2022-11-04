//Opening Loader Screen
$('#shadow').css('display', 'none')
let loading = document.createElement('div')
loading.id = 'loading'
loading.classList = 'display'
document.body.append(loading)
setTimeout(function () {
    loading.remove()
    $('#shadow').css('display', 'block')
}, 2000)
//Get Method
let array = []
function getHandler() {
    array = []
    fetch('https://little-thundering-jump.glitch.me/movies')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            $('.row').empty();
            $('#movies').empty()
            data.forEach(x => {

                array.push(x)
                let html = "";
                html += `<div id=${x.id} class="col-3 mb-3 text-light"><p>Title: ${x.title}</p><p>Rating: ${x.rating}</p><p>Genre: ${x.genre}</p>`;
                html += `<button id=${x.id}>x</button></div>`;

                $('.row').append(html);
                let html2 = "";
                html2 += `<option id=${x.id}>${x.title} - ${x.rating} - ${x.genre}</option>`;
                $('#movies').append(html2)


            })

            setButtons()
        })

        .catch(err => console.log(err))



}
getHandler()


let gifURL;
let count = 0;
function getCarousel() {
    fetch('https://little-thundering-jump.glitch.me/movies')
        .then(res => res.json())
        .then(data => {
            data.forEach(pull => {
                let title = pull.title
                let id = pull.id
                fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GIF_KEY}&q=${title}&limit=25&offset=0&rating=g&lang=en`, {
                    mode: "cors",
                    dataType: "jsonp",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                })
                    .then(response => response.json())
                    .then(json => {
                        gifURL = json.data[0].images.original.url;

                        generateHTML(gifURL)
                    })
            })
        })
        .catch(error => console.error(error));
    setTimeout(function () {
    }, 2000)
}
getCarousel()
function generateHTML(gifURL){
    if (count === 0) {
        let html = ``;
        html += `<div class="carousel-item active">
       <img src=${gifURL} id="caro" class="d-block w-100" alt="...">
   </div>`;
        $("#newOutPut").append(html);
        count++
    } else {
        let html = ``;
        html += `<div class="carousel-item">
       <img src=${gifURL} class="d-block w-100" alt="...">
   </div>`;
        $("#newOutPut").append(html);
        count++
    }
}

// Post Method

function postHandler(t, r, g) {
    fetch('https://little-thundering-jump.glitch.me/movies', {
        method: 'POST',
        body: JSON.stringify({
            title: t,
            rating: r,
            genre: g
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            getHandler()
            getCarousel()
        });
}

$('#submit').click(function (e) {
    console.log(this);
    let t = document.getElementById('inputTitle').value;
    let r = document.getElementById('inputeRating').value;
    let g = document.getElementById('inputGenre').value;
    postHandler(t, r, g)
})


// Delete Method

function deleteHandler(id) {
    fetch('https://little-thundering-jump.glitch.me/movies/' + id, {
        method: 'DELETE',
    }).then(res => {
        getHandler();

    })
}
//Adding event listeners to dle
function setButtons() {

    let xBtn = document.querySelectorAll('button')
    xBtn.forEach(x => {
        x.addEventListener('click', function (e) {

            deleteHandler(this.id)
        })
    })
}
// adding event listeners to generate forms/button pulling data from events to populate PATCH METHOD
let dropDwnBox = document.querySelector('#movies')
dropDwnBox.addEventListener('change', function (e){
    let findTitle = document.querySelector("select").value.split("-")[0];
    let findRating = document.querySelector("select").value.split("-")[1];
    let findGenre = document.querySelector('select').value.split('-')[2];
    let getId = $(this).children(":selected").attr("id")
    $("#new-forms").empty()
    html = ""
    html += `<label for="newTitle">
           Title: <input type="text" name="newTitle" id="newTitle" value="${findTitle}">
       </label>
       <label for="newGenre">
        Genre: <input type="text" name="genre" id="newGenre" value="${findGenre}">
       </label>
       <label for="newRating">
           Rating: <input type="text" name="newRating" id="newRating" value=${findRating}>
       </label>
       <label for="newSubmit">
           <input type="button" name="submit" id="newSubmit" value="Edit">
       </label>`
    $("#new-forms").append(html);
    let editBtn = document.querySelector('#newSubmit')
    editBtn.addEventListener('click', function(e){
        let xTitle = document.querySelector('#newTitle').value
        let xRating = document.querySelector('#newRating').value
        let xGenre = document.querySelector('#newGenre').value

        editPatch(xTitle, xRating, getId, xGenre)
    })
})

// PATCH METHOD
function editPatch(title, rating, id, genre) {
    $('#new-forms').empty()
    fetch(`https://little-thundering-jump.glitch.me/movies/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            title: title,
            rating: rating,
            genre: genre

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => getHandler())
        .catch(err => console.log(err))

}


//Search Movies
function search_Movie() {
    let input = document.getElementById('search').value;
    input = input.toLowerCase();
    let filteredMovies = [];
    array.forEach(function(movie) {
        if (movie.title.toLowerCase().includes(input)) {
            filteredMovies.push(movie);
        }
    });
    $('.row').innerHTML = renderMovies(filteredMovies);
    setButtons()
}

let searchBar = document.querySelector('#search');
searchBar.addEventListener('keyup', search_Movie);

function renderMovie(movie) {

    let html = "";
    html += `<div id=${movie.id} class="col-3 mb-3 bg-dark text-light"><p>Title: ${movie.title}</p><p>Rating: ${movie.rating}</p><p>Genre: ${movie.genre}</p>`;
    html += `<button id=${movie.id}>x</button></div>`;
    return html
}

function renderMovies(movies) {
    $('.row').empty()
    let html = '';
    for (let i = 0; i < movies.length; i++) {
        html += renderMovie(movies[i]);
    }
    $('.row').append(html)
}


let range = document.getElementById('ratings')
range.addEventListener('change', function (e) {

    search_Range(this.value)

})

function search_Range(range) {

    if (range === 'all') {
        getHandler()
    }
    else {
        let filteredMovies = [];
        array.forEach(function(movie) {
            if (movie.rating === range) {
                filteredMovies.push(movie);
            }
        });
        $('.row').innerHTML = renderMovies(filteredMovies);
        setButtons()
    }
}

function search_Genre() {
    let input = document.getElementById('searchGenre').value;
    input = input.toLowerCase();
    let filteredMovies = [];
    array.forEach(function(movie) {
        if (movie.genre.toLowerCase().includes(input)) {
            filteredMovies.push(movie);
        }
    });
    $('.row').innerHTML = renderMovies(filteredMovies);
    setButtons()
}

let genreSearch = document.querySelector('#searchGenre');
genreSearch.addEventListener('keyup', search_Genre);


let hide = document.getElementById('hide');
hide.addEventListener('click', function (e) {
    e.preventDefault();
    let unhide = document.querySelectorAll('#unhide');
    unhide.forEach(x => {
        $(x).toggleClass('none')
        $('#ratings').toggleClass('none')
    })

})