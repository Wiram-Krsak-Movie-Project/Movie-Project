$(window).on('load', function () {
    $('.container').css('display', 'none')
    displayLoading()
})

// selecting dom element
let textTitle = document.querySelector("#inputTitle");
let textRating = document.querySelector('#inputRating');

const btn = document.querySelector("#submitInput");

// adding event listener to button
btn.addEventListener("click", function (e) {
    e.preventDefault()
    postHandler()
    displayLoading()
    console.log(this);
});

// selecting loading div
const loader = document.querySelector("#loading");

// showing loading
function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
        $('.container').css('display', 'block')
        getHandler()
    }, 2000);
}

// hiding loading
function hideLoading() {
    loader.classList.remove("display");
}

// url
var url = 'https://little-thundering-jump.glitch.me/movies'

function getHandler() {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            hideLoading()
            $("#showOutput").empty()
            json.forEach(function (unit) {
                mTitle = unit.title;
                mRating = unit.rating;
                let html = ``;
                // html += `<div class="card" style="width: 18rem;">`;
                // html += `<button id=${unit.id} type="button" class="btn-close" aria-label="Close"></button>`
                // html += `<video controls loop width="100%" autoplay muted><source src="assets/giphy360p.mp4" type="video/mp4">Your browser does not support the video tag.</video>`;
                // html += `<div class="card-body">`;
                // html += `<h5 id=${unit.id} class="card-title">Title: ${mTitle}</h5>`;
                // html += `<p class="card-text">Rating: ${mRating}</p>`;
                // html += `<p class="card-text">Genre</p>`;
                // html += `</div>`;
                // html += `</div>`;
                // console.log(html);
                // $("#showOutput").append(html);

                html += `<div id="carouselExampleCaptions newOutPut" className="carousel slide" data-bs-ride="false">`
                html += `<button id=${unit.id} type="button" class="btn-close" aria-label="Close"></button>`
                html += `<div class="carousel-indicators">`;
                html += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`;
                html += `</div>`;
                html += `<div class="carousel-inner">`;
                html += `<div class="carousel-item active">`;
                html += `<video controls loop class="d-block w-100" autoplay muted><source src="assets/giphy360p.mp4" type="video/mp4">Your browser does not support the video tag.</video>`;
                html += `<div class="carousel-caption d-none d-md-block">`;
                html += `<h5 id=${unit.id}>Title: ${mTitle}</h5>`;
                html += `<p>Rating: ${mRating}</p>`;
                html += `<p>Genre</p>`;
                html += `</div>`;
                html += `</div>`;
                html += `</div>`;
                html += `<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">`;
                html += `<span class="carousel-control-prev-icon" aria-hidden="true"></span>`;
                html += `<span class="visually-hidden">Previous</span>`;
                html += `</button>`;
                html += `<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">`;
                html += `<span class="carousel-control-next-icon" aria-hidden="true"></span>`;
                html += `<span class="visually-hidden">Next</span>`;
                html += `</button>`;
                html += `</div>`
                $(".newOutPut").append(html);
            })
        })
    setTimeout(function () {
        let removeXBtn = document.querySelectorAll("button")
        console.log(removeXBtn);
        removeXBtn.forEach(function(x){
            x.addEventListener("click", function(e){
                e.preventDefault()
                deleteThis(this.id)
            })
        })
    },1500)
}

// creating url format
function buildURL(inputData) {
    return `${url}${inputData}`;
}

//Get Method
fetch('https://little-thundering-jump.glitch.me/movies')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

// Post Method
function postHandler() {
    let postTitle = document.querySelector('#inputTitle').value
    let postRating = document.querySelector('#inputRating').value
    if (postRating === "" || postTitle === "") {
    } else {
    fetch('https://little-thundering-jump.glitch.me/movies', {
    method: 'POST',
    body: JSON.stringify({
        title: postTitle,
        rating: postRating
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    }
}

// Delete Method
function deleteThis (id) {
    fetch('https://little-thundering-jump.glitch.me/movies/' + id, {
        method: 'DELETE',
    }).then(res => console.log(res.status))
    getHandler()
}

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