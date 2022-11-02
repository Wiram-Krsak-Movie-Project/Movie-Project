// selecting dom element
const textInput = document.querySelector("#inputPart");

const btn = document.querySelector("#submitInput");

// adding event listener to button
btn.addEventListener("click", displayLoading);

// selecting loading div
const loader = document.querySelector("#loading");

// showing loading
function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
        fetchHandler()
    }, 5000);
}

// hiding loading
function hideLoading() {
    loader.classList.remove("display");
}

// url
var url = 'https://little-thundering-jump.glitch.me/movies'

function fetchHandler(event) {

    var input = textInput.value;
    var finalURL = buildURL(input);

    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            hideLoading()
            json.forEach(function (unit) {

                mTitle = unit.title;
                mRating = unit.rating;

                let html = ``;
                    // html += `<ul>`;
                html += "<div>" + `${mTitle} ${mRating}` + "</div>";
                    // html += `</ul>`;
                console.log(html);
                $("#showOutput").append(html);
        })
    })
}

// creating url format

function buildURL(inputData) {
    return `${url}?text=${inputData}`;
}


//Get Method
fetch('https://little-thundering-jump.glitch.me/movies')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))


// Post Method
// fetch('https://little-thundering-jump.glitch.me/movies', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'LOTR',
//         body: 'Movie # 4',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));



// Delete Method


// fetch('https://little-thundering-jump.glitch.me/movies/5', {
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