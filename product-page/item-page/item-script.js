let search_query = JSON.parse(localStorage.getItem("search_query"));
let select_item = JSON.parse(localStorage.getItem("select_item"));
select_item.fuel_price = 0;
localStorage.setItem("select_item", JSON.stringify(select_item));

let car_icon = document.querySelector("#car-icon");
let bike_icon = document.querySelector("#bike-icon");

let eng_icon = document.querySelector("#engine_icon");
let eng_txt = document.querySelector("#engine");
let fuel_icon = document.querySelector("#fuel_icon");
let fuel_txt = document.querySelector("#fuel-type");
fuel_txt.textContent = select_item.fuel_type;

let product_image = document.querySelector("#car-image");
product_image.setAttribute("src", select_item.img);

if (search_query.vehicle == "car") {
    bike_icon.style.opacity = "14%";
    eng_icon.style.display = "none";
    eng_txt.style.display = "none";
} else {
    car_icon.style.opacity = "14%";
    fuel_icon.style.display = "none";
    fuel_txt.style.display = "none";
    product_image.style.position = "relative";
    product_image.style.bottom = "50px";
    eng_txt.textContent = select_item.engine_capacity + " cc";
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

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

let pickup = document.querySelector("#pickup-date");
let drop = document.querySelector("#drop-date");

pickup.value = search_query.pickup;
drop.value = search_query.drop;

let d = new Date();
let hr = ("0" + d.getHours()).slice(-2);
let min = ("0" + d.getMinutes()).slice(-2);

let min_pickup = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + "T" + hr + ":" + min;

let md = addDays(new Date(), 1);
let min_drop = md.getFullYear() + "-" + ("0" + (md.getMonth() + 1)).slice(-2) + "-" + ("0" + md.getDate()).slice(-2) + "T" + "00" + ":" + "00";

pickup.setAttribute("min", min_pickup);
drop.setAttribute("min", min_drop);


document.querySelector(".search-bar").onsubmit = () => {
    event.preventDefault();

    search_query.pickup = pickup.value;
    search_query.drop = drop.value;

    localStorage.setItem("search_query", JSON.stringify(search_query));

    window.location.href = "../products-page.html";
}

function getMonthName(num) {
    switch (num) {
        case "01": return "Jan";
        case "02": return "Feb";
        case "03": return "Mar";
        case "04": return "Apr";
        case "05": return "May";
        case "06": return "Jun";
        case "07": return "Jul";
        case "08": return "Aug";
        case "09": return "Sep";
        case "10": return "Oct";
        case "11": return "Nov";
        case "12": return "Dec";
    }
}

function getMonthDays(name) {
    switch (name) {
        case "01": return 31;
        case "02": return 28;
        case "03": return 31;
        case "04": return 30;
        case "05": return 31;
        case "06": return 30;
        case "07": return 31;
        case "08": return 31;
        case "09": return 30;
        case "10": return 31;
        case "11": return 30;
        case "12": return 31;
    }
}

// item section

let transmission_type = document.querySelector("#transmission");
transmission_type.textContent = select_item.transmission_type;

let seats = document.querySelector("#seats");
seats.textContent = select_item.seat + " Seater";

let pickup_date = document.querySelector("#pickupDate");
pickup_date.textContent = search_query.pickup.slice(8, 10);

let pickup_month = document.querySelector("#pickup-month");
pickup_month.textContent = getMonthName(search_query.pickup.slice(5, 7)) + "-" + search_query.pickup.slice(0, 4);

let pickup_time = document.querySelector("#pickup-time");
pickup_time.textContent = search_query.pickup.slice(11, 16);

let drop_time = document.querySelector("#drop-time");
drop_time.textContent = search_query.drop.slice(11, 16);

let drop_date = document.querySelector("#dropDate");
drop_date.textContent = search_query.drop.slice(8, 10);

let drop_month = document.querySelector("#drop-month");
drop_month.textContent = getMonthName(search_query.drop.slice(5, 7)) + "-" + search_query.drop.slice(0, 4);

let car_location = document.querySelectorAll(".car-location");
car_location.forEach(element => {
    element.textContent = search_query.location;
})

let distance = document.querySelectorAll(".distance");
distance.forEach(element => {
    element.textContent = select_item.distance + " km away";
})

// calculating duration 
let pick = search_query.pickup.slice(0, 10).split("-");
let dr = search_query.drop.slice(0, 10).split("-");

let pick_yr = pick[0];
let pick_month = pick[1];
let pick_date = pick[2];

let dr_yr = parseInt(dr[0]);
let dr_month = dr[1];
let dr_date = parseInt(dr[2]);

let total_duration = 0;
total_duration += (dr_yr - pick_yr) * 365;
if (dr_month > pick_month) {
    let currMonthDays = getMonthDays(pick_month);
    currMonthDays -= pick_date;
    currMonthDays += dr_date;

    total_duration += currMonthDays;
} else {
    total_duration += dr_date - pick_date;
}

let duration = document.querySelector("#duration");
duration.textContent = total_duration + "d";

displayPrice();

function displayPrice() {
    let price = document.querySelectorAll(".price");
    price.forEach(element => {
        let fuel_price = select_item.fuel_price;
        let item_price = select_item.price;
        element.textContent = "₹" + (item_price + fuel_price);
    })
}

let fuel_package = document.querySelector("#fuel");
fuel_package.onchange = () => {
    let vehichle_price = 0;
    let val = fuel_package.value;
    if (val != "") {
        vehichle_price += 5 * parseInt(val);
    }
    select_item.fuel_price = vehichle_price;
    localStorage.setItem("select_item", JSON.stringify(select_item));
    displayPrice();
}

let checkBox = document.querySelector("#checkbox");
let cart_btn = document.querySelector("#cart_btn");
let book_btn = document.querySelector("#book_btn");
checkBox.onchange = () => {
    if (checkBox.checked) {
        cart_btn.removeAttribute("disabled");
        book_btn.removeAttribute("disabled");
    } else {
        cart_btn.setAttribute("disabled", "");
        book_btn.setAttribute("disabled", "");
    }
}