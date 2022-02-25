//Get the Element with the Id 'root'
const rootDiv = document.getElementById("root");

//Declare the variables for home, detail & contact html pages
let home = "";
let detail = "";

/**
 *
 * @param {String} page - Represents the page information that needs to be retrieved
 * @returns {String} resHtml - The Page's HTML is returned from the async invocation
 */

const loadPage = async (page) => {
    const response = await fetch(page);
    const resHtml = await response.text();
    return resHtml;
};

/**
 * The Async function loads all HTML to the variables 'home', 'detail' & 'contact'
 */
const loadAllPages = async () => {
    home = await loadPage("./home.html");
    detail = await loadPage("./detail.html");
};

/**
 * The Main Function is an async function that first loads All Page HTML to the variables
 * Once the variables are loaded with the contents, then they are assigned to the 'routes' variable
 */
const main = async () => {
    await loadAllPages();
    rootDiv.innerHTML = home;
    routes = {
        "/": home,
        "/detail": detail,
    };
};

// Invoke the Main function
main();

/**
 *
 * @param {String} pathname - Pass the 'pathname' passed from onClick function of the link (index.html)
 * The function is invoked when any link is clicked in the html.
 * The onClick event on the html invokes the onNavClick & passes the pathname as param
 */
const onNavClick = (pathname) => {
    const myArray = pathname.split("/");
    console.log("/" + myArray[1]);
    window.history.pushState(
        { data: myArray[3] },
        myArray[1],
        window.location.origin + "/" + myArray[1] + "/" + myArray[2]
    );
    console.log(window.history.state["data"]);
    rootDiv.innerHTML = routes["/" + myArray[1]];
};

/**
 * The Function is invoked when the window.history's state changes
 */
window.onpopstate = () => {
    const url = window.location.pathname;
    const myArray = pathname.split("/");
    rootDiv.innerHTML = routes[myArray[1]];
};
