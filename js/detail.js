// async function datadetail() {
//     fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}`)
//         .then((response) => {
//             response.json();
//             console.log(response);
//         })
//         .catch((error) => {
//             // handle the error
//         });
// }
const APIKEY = "e020b4926367bed54b0932937c78afd1";
const data = "646385";
fetch(
    `https://api.themoviedb.org/3/movie/646385?api_key=e020b4926367bed54b0932937c78afd1`
)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        // handle the error
    });
