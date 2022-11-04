// $(window).on('load', function () {
//     $('.container').css('display', 'none')
//     displayLoading()
// })
//
// // selecting dom element
// let textTitle = document.querySelector("#inputTitle");
// let textRating = document.querySelector('#inputRating');
//
// const btn = document.querySelector("#submitInput");
//
// // adding event listener to button
// btn.addEventListener("click", function (e) {
//     e.preventDefault()
//     postHandler()
//     displayLoading()
//     console.log(this);
// });
//
// // selecting loading div
// const loader = document.querySelector("#loading");
//
// // showing loading
// function displayLoading() {
//     loader.classList.add("display");
//     // to stop loading after some time
//     setTimeout(() => {
//         loader.classList.remove("display");
//         $('.container').css('display', 'block')
//         getHandler()
//     }, 2000);
// }
//
// // hiding loading
// function hideLoading() {
//     loader.classList.remove("display");
// }
//
// // url
// var url = 'https://little-thundering-jump.glitch.me/movies'
//
// function getHandler() {
//     fetch(url)
//         .then(response => response.json())
//         .then(json => {
//             hideLoading()
//             $("#showOutput").empty()
//             json.forEach(function (unit) {
//                 mTitle = unit.title;
//                 mRating = unit.rating;
//                 let html = ``;
//                 html += `<div class="card" style="width: 18rem;">`;
//                 html += `<button id=${unit.id} type="button" class="btn-close" aria-label="Close"></button>`
//                 html += `<video controls loop width="100%" autoplay muted><source src="assets/giphy360p.mp4" type="video/mp4">Your browser does not support the video tag.</video>`;
//                 html += `<div class="card-body">`;
//                 html += `<h5 id=${unit.id} class="card-title">Title: ${mTitle}</h5>`;
//                 html += `<p class="card-text">Rating: ${mRating}</p>`;
//                 html += `<p class="card-text">Genre</p>`;
//                 html += `</div>`;
//                 html += `</div>`;
//                 console.log(html);
//                 $("#showOutput").append(html);
//
//                 // html += `<div id="carouselExampleCaptions newOutPut" className="carousel slide" data-bs-ride="false">`
//                 // html += `<button id=${unit.id} type="button" class="btn-close" aria-label="Close"></button>`
//                 // html += `<div class="carousel-indicators">`;
//                 // html += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`;
//                 // html += `</div>`;
//                 // html += `<div class="carousel-inner">`;
//                 // html += `<div class="carousel-item active">`;
//                 // html += `<video controls loop class="d-block w-100" autoplay muted><source src="assets/giphy360p.mp4" type="video/mp4">Your browser does not support the video tag.</video>`;
//                 // html += `<div class="carousel-caption d-none d-md-block">`;
//                 // html += `<h5 id=${unit.id}>Title: ${mTitle}</h5>`;
//                 // html += `<div class="form-check form-check-inline">`
//                 // html += `<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">`
//                 // html += `<label class="form-check-label" for="inlineRadio1">1</label>`
//                 // html += `</div>`
//                 // html += `<div class="form-check form-check-inline">`
//                 // html += `<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">`
//                 // html += `<label class="form-check-label" for="inlineRadio2">2</label>`
//                 // html += `</div>`
//                 // html += `<div class="form-check form-check-inline">`
//                 // html += `<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">`
//                 // html += `<label class="form-check-label" for="inlineRadio3">3</label>`
//                 // html += `</div>`
//                 // html += `<div class="form-check form-check-inline">`
//                 // html += `<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">`
//                 // html += `<label class="form-check-label" for="inlineRadio2">4</label>`
//                 // html += `</div>`
//                 // html += `<div class="form-check form-check-inline">`
//                 // html += `<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">`
//                 // html += `<label class="form-check-label" for="inlineRadio3">5</label>`
//                 // html += `</div>`;
//                 // html += `<p>Genre</p>`;
//                 // html += `</div>`;
//                 // html += `</div>`;
//                 // html += `</div>`;
//                 // html += `<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
//                 //         data-bs-slide="prev">`;
//                 // html += `<span class="carousel-control-prev-icon" aria-hidden="true"></span>`;
//                 // html += `<span class="visually-hidden">Previous</span>`;
//                 // html += `</button>`;
//                 // html += `<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">`;
//                 // html += `<span class="carousel-control-next-icon" aria-hidden="true"></span>`;
//                 // html += `<span class="visually-hidden">Next</span>`;
//                 // html += `</button>`;
//                 // html += `</div>`
//                 // $(".newOutPut").append(html);
//             })
//         })
//     setTimeout(function () {
//         let removeXBtn = document.querySelectorAll("button")
//         console.log(removeXBtn);
//         removeXBtn.forEach(function(x){
//             x.addEventListener("click", function(e){
//                 e.preventDefault()
//                 deleteThis(this.id)
//             })
//         })
//     },1500)
// }
//
// // creating url format
// function buildURL(inputData) {
//     return `${url}${inputData}`;
// }
//
// //Get Method
// fetch('https://little-thundering-jump.glitch.me/movies')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//
// // Post Method
// function postHandler() {
//     let postTitle = document.querySelector('#inputTitle').value
//     let postRating = document.querySelector('#inputRating').value
//     if (postRating === "" || postTitle === "") {
//     } else {
//     fetch('https://little-thundering-jump.glitch.me/movies', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: postTitle,
//         rating: postRating
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
//     })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
//     }
// }
//
// // Delete Method
// function deleteThis (id) {
//     fetch('https://little-thundering-jump.glitch.me/movies/' + id, {
//         method: 'DELETE',
//     }).then(res => console.log(res.status))
//     getHandler()
// }

//Patch Method
// fetch('https://little-thundering-jump.glitch.me/movies/4', {
//     method: 'PATCH',
//     body: JSON.stringify({
//         title: 'foo',
//         rating: 5
//
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

//PUT Method
// fetch('https://little-thundering-jump.glitch.me/movies/4', {
//     method: 'PUT',
//     body: JSON.stringify({
//         title: 'Movie#?3',
//         rating: 5
//
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));



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
                html += `<div id=${x.id} class="col-3 mb-3 bg-dark text-light"><p>Title: ${x.title}</p><p>Rating: ${x.rating}</p><p>Genre: ${x.genre}</p>`;
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
                        console.log(gifURL)
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
        .then((json) => getHandler());
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




// setTimeout(function () {
//     fetch('http://www.omdbapi.com/?t=alien&apikey=df2cac18&')
//         .then((response) => response.json())
//         .then((json) => {
//             console.log(json)
//             // let test = document.getElementById('3')
//
//             // test.style.backgroundImage = `url('${json.Poster}')`;
//             // $(test).css({'background-size': 'cover',
//             //
//             //     'background-repeat': 'no-repeat',
//             //
//             // 'background-position': 'center'
//             // })
//
//
//         });
// }, 5000)

let hide = document.getElementById('hide');
hide.addEventListener('click', function (e) {
    e.preventDefault();
    let unhide = document.querySelectorAll('#unhide');
    unhide.forEach(x => {
        $(x).toggleClass('none')
        $('#ratings').toggleClass('none')
    })

})




// //PUT Method
//
//
// // fetch('https://little-thundering-jump.glitch.me/movies/4', {
// //     method: 'PUT',
// //     body: JSON.stringify({
// //         title: 'Movie#?3',
// //         rating: 5
// //
// //     }),
// //     headers: {
// //         'Content-type': 'application/json; charset=UTF-8',
// //     },
// // })
// //     .then((response) => response.json())
// //     .then((json) => console.log(json));