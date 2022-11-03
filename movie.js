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

                html +=  `<div id=${unit.id} class=col-3><p>Title: ${mTitle}</p>`;
                html += "<p>Rating: " + mRating + '</p>';
                html += `<button id=${unit.id}>x</button>`;
                html += "</div>";

                console.log(html);
                $("#showOutput").append(html);
        })
    })
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

    }
    else {


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


//Event Listener for delete



// Delete Method


// fetch('https://little-thundering-jump.glitch.me/movies/9', {
//     method: 'DELETE',
// }).then(res => console.log(res.status))




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