let search_query = JSON.parse(localStorage.getItem("search_query"));

// search bar
let car_icon = document.querySelector("#car-icon");
let bike_icon = document.querySelector("#bike-icon");

if (search_query.vehicle == "car") {
    bike_icon.style.opacity = "14%";
} else {
    car_icon.style.opacity = "14%";
}

car_icon.onclick = () => {
    bike_icon.style.opacity = "14%";
    car_icon.style.opacity = "1";
    search_query.vehicle = "car";
}

bike_icon.onclick = () => {
    car_icon.style.opacity = "14%";
    bike_icon.style.opacity = "1";
    search_query.vehicle = "bike";
}

let search_location = document.querySelector("#location");
search_location.onchange = () => {
    search_query.location = search_location.value;
}

let pickup = document.querySelector("#pickup-time");
let drop = document.querySelector("#drop-time");

pickup.value = search_query.pickup;
drop.value = search_query.drop;

document.querySelector(".search-bar").onsubmit = () => {
    event.preventDefault();

    search_query.pickup = pickup.value;
    search_query.drop = drop.value;

    localStorage.setItem("search_query", JSON.stringify(search_query));

    window.location.href = "../products-page.html";
}