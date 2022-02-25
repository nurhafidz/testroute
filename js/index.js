const IMAGEBASEURL = "https://image.tmdb.org/t/p/w500";
const checkroute = "/";
console.log(window.location.href);

let dataarray = null;
window.addEventListener("DOMContentLoaded", () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}`)
        .then((res) => res.json())
        .then((data) => {
            const results = data.results;
            dataarray = results;
        });
});

let checkcontainer = null;
let check = function () {
    if (checkcontainer == null) {
        console.log("cant find container");
        setTimeout(check, 1000); // check again in a second
        checkcontainer = document.getElementById("datacontainer");
    } else {
        showData(dataarray);
    }
};
check();

function slugify(text) {
    return text
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
}

const showData = (movies) => {
    let HTMLCard = "";
    const container = document.getElementById("datacontainer");

    for (let index = 0; index < movies.length; index++) {
        const data = movies[index];

        const year = new Date(data.release_date).getFullYear();
        const slug = slugify(data.title + " " + year);

        // <a href="/detail/${data.id}" class="card">
        HTMLCard += `
        <a href="#" onclick="onNavClick('/detail/${slug}/${data.id}'); return false;" class="card">
            <img class="card__image" src="${IMAGEBASEURL}/${data.poster_path}"/>
            <div class="card__content">
                <p class="card__title">${data.title} (${year})</p>
            </div>
        </a>
        `;
    }

    container.innerHTML = HTMLCard;
};
