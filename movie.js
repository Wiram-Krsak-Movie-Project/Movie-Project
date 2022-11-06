(function () {
    'use strict'

//Opening Loader Screen
$('#shadow').css('display', 'none');
let loading = document.createElement('div');
loading.id = 'loading';
loading.classList = 'display';
document.body.append(loading);
setTimeout(function () {
    loading.remove();
    $('#shadow').css('display', 'block');
}, 5000);

//Get Method
let array = [];
function getHandler() {
    array = [];
    fetch('https://little-thundering-jump.glitch.me/movies')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            $('#locations').empty();
            $('#movies').empty();
            data.forEach(x => {
                array.push(x);

                //seperator for postposter
                fetch(`http://www.omdbapi.com/?t=${x.title}&apikey=df2cac18`)
                    .then(res => res.json())
                    .then(data => {
                        let html = `<div class="col-6 col-md-3"><img id="myImg${x.id}" src="${data.Poster}" alt="Movie: ${data.Title} <br> Genre: ${x.genre} <br> Rating: ${x.rating}">
                                    <div id="myModal${x.id}" class="modal">
                                      <span class="close" id="${x.id}2">&times;</span>
                                      <img class="modal-content" id="img${x.id}">
                                      <div id="caption${x.id}"></div>
                                    </div>`
                        html += `<button id=${x.id} class="w-100 mb-2 custom text-white" onclick="deleteHandler(this.id)">x</button></div>`;
                        $('#locations').append(html);
                        let html2 = "";
                        html2 += `<option id=${x.id}>${x.title} - ${x.rating} - ${x.genre}</option>`;
                        $('#movies').append(html2);

                        // Get the modal by its correct id Seperator
                        var modal = document.getElementById(`myModal${x.id}`);

                        // Get the image and insert it inside the modal - use its "alt" text as a caption get image its correct id
                        var img = document.getElementById(`myImg${x.id}`);
                        var modalImg = document.getElementById(`img${x.id}`);
                        var captionText = document.getElementById(`caption${x.id}`);
                        $(captionText).css({
                            'margin': 'auto',
                            'display': 'block',
                            'width': '80%',
                            'max-width': '700px',
                            'text-align': 'center',
                             'color': '#ccc',
                             'padding': '10px 0',
                             'height': '150px',
                        });
                        $(img).css({
                            'border-radius': '5px',
                            'cursor': 'pointer',
                            'transition': '0.3s',
                            'aspect-ratio': '153/217',
                            'max-width': '100%',
                            'max-height': '100%'
                        });
                        img.onclick = function(){
                            modal.style.display = "block";
                            modalImg.src = this.src;
                            captionText.innerHTML = this.alt;
                        }

                        // Get the <span> element that closes the modal  with an icremented id not class
                        var span = document.getElementById(`${x.id}2`);

                        // When the user clicks on <span> (x), close the modal
                        span.onclick = function() {
                            modal.style.display = "none";
                        }
                    })
                    .catch(err => console.log(err));
            })
        })
        .catch(err => console.log(err));
}
getHandler();

// made carousel to render gifs of movies within array
let gifURL;
let count = 0;
function getCarousel() {
    fetch('https://little-thundering-jump.glitch.me/movies')
        .then(res => res.json())
        .then(data => {
            data.forEach(pull => {
                let title = pull.title;
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
                        generateHTML(gifURL);
                    });
            });
        })
        .catch(error => console.error(error));
    setTimeout(function () {
    }, 2000);
}
getCarousel();

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
        count++
        $("#newOutPut").append(html);
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
            getHandler();
            $("#newOutPut").empty();
            count = 0;
            getCarousel();
        });
}

$('#submit').click(function (e) {
    console.log(this);
    let t = document.getElementById('inputTitle').value;
    let r = document.getElementById('inputeRating').value;
    let g = document.getElementById('inputGenre').value;
    postHandler(t, r, g);
})

// Delete Method
function deleteHandler(id) {
    fetch('https://little-thundering-jump.glitch.me/movies/' + id, {
        method: 'DELETE',
    }).then(res => {
        console.log(res);
        getHandler();
        $("#newOutPut").empty();
        count = 0;
        getCarousel();
    });
}

//Adding event listeners to dle
function setButtons() {
    let xBtn = document.querySelectorAll('button');
    xBtn.forEach(x => {
        x.addEventListener('click', function (e) {
          e.preventDefault();
        });
    });
}

// adding event listeners to generate forms/button pulling data from events to populate PATCH METHOD
let dropDwnBox = document.querySelector('#movies');
dropDwnBox.addEventListener('change', function (e){
    let findTitle = document.querySelector("select").value.split("-")[0];
    let findRating = document.querySelector("select").value.split("-")[1];
    let findGenre = document.querySelector('select').value.split('-')[2];
    let getId = $(this).children(":selected").attr("id");
    $("#new-forms").empty();
    let html = ""
    html += `<label for="newTitle" class="text-white">
            Title: <input type="text" name="newTitle" id="newTitle" value="${findTitle}">
            </label>
            <br>
            <label for="newGenre" class="text-white">
            Genre: <input type="text" name="genre" id="newGenre" value="${findGenre}">
            </label>
            <br>
            <label for="newRating" class="text-white">
            Rating: <input type="text" name="newRating" id="newRating" value=${findRating}>
            </label>
            <br>
            <label for="newSubmit">
            <input type="button" name="submit" id="newSubmit" class="custom text-white" value="Submit">
            </label>`
    $("#new-forms").append(html);
    let editBtn = document.querySelector('#newSubmit');
    editBtn.addEventListener('click', function(e){
        let xTitle = document.querySelector('#newTitle').value;
        let xRating = document.querySelector('#newRating').value;
        let xGenre = document.querySelector('#newGenre').value;
        editPatch(xTitle, xRating, getId, xGenre);
    });
});

// PATCH METHOD
function editPatch(title, rating, id, genre) {
    $('#new-forms').empty();
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
        .catch(err => console.log(err));
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
    $('#locations').innerHTML = renderMovies(filteredMovies);
    $('#locations').contents().filter(function(){
        return this.nodeType === 3;
    }).remove();
    setButtons();
}

let searchBar = document.querySelector('#search');
searchBar.addEventListener('keyup', search_Movie);

function renderMovie(movie) {
    let html = "";
    fetch(`http://www.omdbapi.com/?t=${movie.title}&apikey=df2cac18`)
        .then(res => res.json())
        .then(data => {
            let html = `<div class="col-6 col-md-3"><img id="myImg${movie.id}" src="${data.Poster}" alt="Movie: ${data.Title} <br> Genre: ${movie.genre} <br> Rating: ${movie.rating}">
                        <div id="myModal${movie.id}" class="modal">
                        <span class="close" id="${movie.id}2">&times;</span>
                        <img class="modal-content" id="img${movie.id}">
                        <div id="caption${movie.id}"></div>
                        </div>`
            html += `<button id=${movie.id} class="w-100 mb-2 custom text-white" onclick="deleteHandler(this.id)">x</button></div>`;
            $('#locations').append(html);

            var modal = document.getElementById(`myModal${movie.id}`);
            var img = document.getElementById(`myImg${movie.id}`);
            var modalImg = document.getElementById(`img${movie.id}`);
            var captionText = document.getElementById(`caption${movie.id}`);
            $(captionText).css({
                'margin': 'auto',
                'display': 'block',
                'width': '80%',
                'max-width': '700px',
                'text-align': 'center',
                'color': '#ccc',
                'padding': '10px 0',
                'height': '150px'
            });
            $(img).css({
                'border-radius': '5px',
                'cursor': 'pointer',
                'transition': '0.3s',
                'aspect-ratio': '153/217',
                'max-width': '100%',
                'max-height': '100%'
            });
            img.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
            var span = document.getElementById(`${movie.id}2`);
            span.onclick = function() {
                modal.style.display = "none";
            }
            return html;
});
}

function renderMovies(movies) {
    $('#locations').empty();
    let html = '';
    for (let i = 0; i < movies.length; i++) {
        html += renderMovie(movies[i]);
    }
    $('#locations').append(html);
}

let range = document.getElementById('ratings');
range.addEventListener('change', function (e) {
    search_Range(this.value);
})

function search_Range(range) {
    if (range === 'all') {
        getHandler();
    }
    else {
        let filteredMovies = [];
        array.forEach(function(movie) {
            if (movie.rating === range) {
                filteredMovies.push(movie);
            }
        });
        $('#locations').innerHTML = renderMovies(filteredMovies);
        $('#locations').contents().filter(function(){
            return this.nodeType === 3;
        }).remove();
        setButtons();
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
    $('#locations').innerHTML = renderMovies(filteredMovies);
    $('#locations').contents().filter(function(){
        return this.nodeType === 3;
    }).remove();
    setButtons();
}

let genreSearch = document.querySelector('#searchGenre');
genreSearch.addEventListener('keyup', search_Genre);

//Event listener for the add button to display content
let hide = document.getElementById('hide');
hide.addEventListener('click', function (e) {
    e.preventDefault();
    let unhide = document.querySelectorAll('.unhide');
    unhide.forEach(x => {
        $(x).toggleClass('none')
        $('#ratings').toggleClass('none')
    });
});

//Event listener for the edit button to display content
let hidden = document.getElementById('hide1');
hidden.addEventListener('click', function (e) {
    e.preventDefault();
    let unhide = document.querySelectorAll('.unhide1');
    unhide.forEach(x => {
        $(x).toggleClass('none')
    });
});

//Event listener for the search button to display content
let addHidden = document.getElementById('hide2');
addHidden.addEventListener('click', function (e) {
    e.preventDefault();
    let unhide = document.querySelectorAll('.unhide2');
    unhide.forEach(x => {
        $(x).toggleClass('none');
    });
});



setButtons();
})()