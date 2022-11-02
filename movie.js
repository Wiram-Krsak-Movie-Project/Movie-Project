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