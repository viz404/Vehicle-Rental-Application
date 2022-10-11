let products = [
    {
        "vehicle_name": "Hyundai Eon (Petrol)",
        "vehicle_type": "Hatchback",
        "transmission_type": "Manual",
        "fuel_type": "Petrol",
        "price": 2362,
        "max_age": 21,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558698293_eon.png",
        "seat": 5,
        "distance": 0.0,
        "vehicle": "car"
    },
    {
        "vehicle_name": "Hyundai grand I10",
        "vehicle_type": "Hatchback",
        "transmission_type": "Manual",
        "fuel_type": "Diesel",
        "price": 2572,
        "max_age": 21,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700262_i10.png",
        "seat": 5,
        "distance": 0.0,
        "vehicle": "car"
    },
    {
        "vehicle_name": "TATA Tiago",
        "vehicle_type": "Hatchback",
        "transmission_type": "Manual",
        "fuel_type": "Diesel",
        "price": 2572,
        "max_age": 21,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700964_tiago.png",
        "seat": 5,
        "distance": 0.0,
        "vehicle": "car"
    },
    {
        "vehicle_name": "Maruti Swift VDI (Diesel)",
        "vehicle_type": "Hatchback",
        "transmission_type": "Manual",
        "fuel_type": "Diesel",
        "price": 2572,
        "max_age": 21,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1562926309_suzuki_old.png",
        "seat": 5,
        "distance": 0.0,
        "vehicle": "car"
    },
    {
        "vehicle_name": "Maruti Suzuki Baleno",
        "vehicle_type": "Hatchback",
        "transmission_type": "Manual",
        "fuel_type": "Diesel",
        "price": 2762,
        "max_age": 60,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558698059_baleno.png",
        "seat": 5,
        "distance": 5.0,
        "vehicle": "car"
    },
    {
        "vehicle_name": "Maruti Suzuki Baleno (Petrol)",
        "vehicle_type": "Hatchback",
        "transmission_type": "Manual",
        "fuel_type": "Petrol",
        "price": 2412,
        "max_age": 60,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558698059_baleno.png",
        "seat": 5,
        "distance": 5.0,
        "vehicle": "car"
    },
    {
        "vehicle_name": "Maruti Suzuki Celeio ZXI",
        "vehicle_type": "Hatchback",
        "transmission_type": "Automatic",
        "fuel_type": "Petrol",
        "price": 2319,
        "max_age": 60,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558698108_celerio.png",
        "seat": 5,
        "distance": 5.0,
        "vehicle": "car"
    },
    {
        "vehicle_name": "Hyundai grand I10 (Automatic)",
        "vehicle_type": "Hatchback",
        "transmission_type": "Automatic",
        "fuel_type": "Petrol",
        "price": 2585,
        "max_age": 60,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700262_i10.png",
        "seat": 5,
        "distance": 5.0,
        "vehicle": "car"
    },
    {
        "vehicle_name": "Ford Aspire",
        "vehicle_type": "Sedan",
        "transmission_type": "Manual",
        "fuel_type": "Diesel",
        "price": 2446,
        "max_age": 60,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700163_ford-aspire.png",
        "seat": 5,
        "distance": 5.0,
        "vehicle": "car"
    },
    {
        "vehicle_name": "Brezza LDI",
        "vehicle_type": "SUV",
        "transmission_type": "Manual",
        "fuel_type": "Diesel",
        "price": 2446,
        "max_age": 60,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558701126_vitara-breeza.png",
        "seat": 5,
        "distance": 8.3,
        "vehicle": "car"
    },
    {
        "vehicle_name": "Ford Ecosport Trend",
        "vehicle_type": "Mini SUV",
        "transmission_type": "Manual",
        "fuel_type": "Diesel",
        "price": 3273,
        "max_age": 60,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558698257_eco-sport.png",
        "seat": 5,
        "distance": 8.3,
        "vehicle": "car"
    },
    {
        "vehicle_name": "Honda Activa",
        "transmission_type": "Gearless",
        "engine_capacity": 110,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1570607984_activa-4g.png",
        "seat": 2,
        "fuel_type": "Petrol",
        "distance": 0,
        "price": 903,
        "vehicle": "bike"
    },
    {
        "vehicle_name": "Honda Grazia",
        "transmission_type": "Gearless",
        "engine_capacity": 125,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1570608797_honnda-grazia.png",
        "seat": 2,
        "fuel_type": "Petrol",
        "distance": 5,
        "price": 1032,
        "vehicle": "bike"
    },
    {
        "vehicle_name": "Honda CB Hornet 160R",
        "transmission_type": "Geared",
        "engine_capacity": 160,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1560593594_hornet.png",
        "seat": 2,
        "fuel_type": "Petrol",
        "distance": 6.2,
        "price": 1693,
        "vehicle": "bike"
    },
    {
        "vehicle_name": "Yamaha Fascino",
        "transmission_type": "Gearless",
        "engine_capacity": 110,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1560593392_fascino.png",
        "seat": 2,
        "fuel_type": "Petrol",
        "distance": 3.2,
        "price": 903,
        "vehicle": "bike"
    },
    {
        "vehicle_name": "Honda XBlade",
        "transmission_type": "Geared",
        "engine_capacity": 162,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1560593537_honda-xblade.png",
        "seat": 2,
        "fuel_type": "Petrol",
        "distance": 8.2,
        "price": 1693,
        "vehicle": "bike"
    }
];


let search_query = JSON.parse(localStorage.getItem("search_query"));

let data = products.filter(element => {
    return element.vehicle == search_query.vehicle;
})

displayData(data);

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

let d = new Date();
let min_pickup = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();

let md = addDays(new Date(), 1);
let min_drop = md.getFullYear()+"-"+(md.getMonth()+1)+"-"+md.getDate();

pickup.setAttribute("min", min_pickup);
drop.setAttribute("min", min_drop);

document.querySelector(".search-bar").onsubmit = () => {
    event.preventDefault();

    let arr = products.filter(element => {
        return search_query.vehicle == element.vehicle;
    })

    data = arr;
    displayData(arr);

    search_query.pickup = pickup.value;
    search_query.drop = drop.value;

    localStorage.setItem("search_query", JSON.stringify(search_query));
}




function displayData(arr) {
    document.querySelector(".product-display").innerHTML = null;
    if (search_query.vehicle == "car") {
        document.querySelector("#car-filter").style.display = "block";
        document.querySelector("#bike-filter").style.display = "none";
    } else {
        document.querySelector("#car-filter").style.display = "none";
        document.querySelector("#bike-filter").style.display = "block";
    }

    arr.map(element => {
        let super_div = document.createElement("div");
        let img_container = document.createElement("div");
        let img = document.createElement("img");
        let span = document.createElement("span");
        let hr1 = document.createElement("hr");
        let img_desc = document.createElement("div");
        let desc = document.createElement("div");
        let h3 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let hr2 = document.createElement("hr");
        let view = document.createElement("div");

        img_container.setAttribute("class", "img-container");
        img.setAttribute("src", element.img);
        span.textContent = "₹" + element.price;
        img_desc.setAttribute("class", "img-desc");
        h3.textContent = element.vehicle_name;
        p2.textContent = search_query.location;
        p3.textContent = element.distance + " km away";
        view.textContent = "QUICK VIEW";

        desc.append(h3, p1, p2, p3);
        img_desc.append(desc, hr2, view);
        img_container.append(img, span);
        super_div.append(img_container, hr1, img_desc);

        if (element.seat == 2) {
            span.style.top = "200px";
            p1.textContent = element.transmission_type + ", " + element.seat + " Seats, " + element.engine_capacity + "cc";
        } else {
            p1.textContent = element.transmission_type + ", " + element.seat + " Seats, " + element.fuel_type;
        }

        super_div.onclick = () => {selectItem(element)};

        document.querySelector(".product-display").append(super_div);
    });
}

function selectItem(item) {
    localStorage.setItem("select_item", JSON.stringify(item));
    window.location.href = "item-page/item.html";
}


// filter display
let filter_display = document.querySelector(".left-box");


// Booking duration buttons

let btn_duration_custom = document.querySelector("#btn-duration-custom");
let btn_duration_7 = document.querySelector("#btn-duration-7");
let btn_duration_15 = document.querySelector("#btn-duration-15");
let btn_duration_30 = document.querySelector("#btn-duration-30");

btn_duration_custom.style.border = "1px solid #12967e";
btn_duration_custom.style.color = "#12967e";

btn_duration_7.onclick = () => {
    btn_duration_15.removeAttribute("style");
    btn_duration_30.removeAttribute("style");
    btn_duration_custom.removeAttribute("style");

    btn_duration_7.style.border = "1px solid #12967e";
    btn_duration_7.style.color = "#12967e";

    let arr = products.filter(element => element.vehicle == search_query.vehicle);

    arr.forEach(element => element.price += 1000);

    displayData(arr);

    let md = addDays(new Date(), 7);
    let changed_drop = md.getFullYear()+"-"+(md.getMonth()+1)+"-"+md.getDate();
    drop.value = changed_drop;

    let changed_pickup = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
    pickup.value = changed_pickup;

    search_query.pickup = changed_pickup;
    search_query.drop = changed_drop;

    localStorage.setItem("search_query", JSON.stringify(search_query));
}

btn_duration_15.onclick = () => {
    btn_duration_7.removeAttribute("style");
    btn_duration_30.removeAttribute("style");
    btn_duration_custom.removeAttribute("style");

    btn_duration_15.style.border = "1px solid #12967e";
    btn_duration_15.style.color = "#12967e";

    let arr = products.filter(element => element.vehicle == search_query.vehicle);

    arr.forEach(element => element.price += 5000);

    displayData(arr);

    let md = addDays(new Date(), 15);
    let changed_drop = md.getFullYear()+"-"+(md.getMonth()+1)+"-"+md.getDate();
    drop.value = changed_drop;

    let changed_pickup = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
    pickup.value = changed_pickup;

    search_query.pickup = changed_pickup;
    search_query.drop = changed_drop;

    localStorage.setItem("search_query", JSON.stringify(search_query));
}

btn_duration_30.onclick = () => {
    btn_duration_15.removeAttribute("style");
    btn_duration_7.removeAttribute("style");
    btn_duration_custom.removeAttribute("style");

    btn_duration_30.style.border = "1px solid #12967e";
    btn_duration_30.style.color = "#12967e";

    let arr = products.filter(element => element.vehicle == search_query.vehicle);

    arr.forEach(element => element.price += 10000);

    displayData(arr);

    let md = addDays(new Date(), 30);
    let changed_drop = md.getFullYear()+"-"+(md.getMonth()+1)+"-"+md.getDate();
    drop.value = changed_drop;

    let changed_pickup = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
    pickup.value = changed_pickup;

    search_query.pickup = changed_pickup;
    search_query.drop = changed_drop;

    localStorage.setItem("search_query", JSON.stringify(search_query));
}

btn_duration_custom.onclick = () => {
    btn_duration_15.removeAttribute("style");
    btn_duration_30.removeAttribute("style");
    btn_duration_7.removeAttribute("style");

    btn_duration_custom.style.border = "1px solid #12967e";
    btn_duration_custom.style.color = "#12967e";

    displayData(data);

    let md = addDays(new Date(), 1);
    let changed_drop = md.getFullYear()+"-"+(md.getMonth()+1)+"-"+md.getDate();
    drop.value = changed_drop;

    let changed_pickup = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
    pickup.value = changed_pickup;

    search_query.pickup = changed_pickup;
    search_query.drop = changed_drop;

    localStorage.setItem("search_query", JSON.stringify(search_query));
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}


// filter options car type button

let btn_hatch = document.querySelector("#btn-hatchback");
let btn_sedan = document.querySelector("#btn-sedan")
let btn_suv = document.querySelector("#btn-suv")
let btn_mini_suv = document.querySelector("#btn-mini-suv")

let curr_car = "";

btn_hatch.onclick = () => {
    btn_sedan.removeAttribute("style");
    btn_suv.removeAttribute("style");
    btn_mini_suv.removeAttribute("style");

    btn_hatch.style.border = "1px solid #12967e";
    btn_hatch.style.color = "#12967e";

    let all = document.querySelectorAll(".car-type");
    all.forEach(element => element.remove());

    let type = document.createElement("div");
    type.setAttribute("class", "selected-filters car-type");
    type.textContent = "Hatchback";

    filter_display.append(type);

    let arr = products.filter(element => {
        return element.vehicle_type == "Hatchback";
    })
    data = arr;
    displayData(arr);

    curr_car = "Hatchback";
}

btn_sedan.onclick = () => {
    btn_hatch.removeAttribute("style");
    btn_suv.removeAttribute("style");
    btn_mini_suv.removeAttribute("style");

    btn_sedan.style.border = "1px solid #12967e";
    btn_sedan.style.color = "#12967e";

    let all = document.querySelectorAll(".car-type");
    all.forEach(element => element.remove());

    let type = document.createElement("div");
    type.setAttribute("class", "selected-filters car-type");
    type.textContent = "Sedan";

    filter_display.append(type);

    let arr = products.filter(element => {
        return element.vehicle_type == "Sedan";
    })
    data = arr;
    displayData(arr);

    curr_car = "Sedan";
}

btn_suv.onclick = () => {
    btn_sedan.removeAttribute("style");
    btn_hatch.removeAttribute("style");
    btn_mini_suv.removeAttribute("style");

    btn_suv.style.border = "1px solid #12967e";
    btn_suv.style.color = "#12967e";

    let all = document.querySelectorAll(".car-type");
    all.forEach(element => element.remove());

    let type = document.createElement("div");
    type.setAttribute("class", "selected-filters car-type");
    type.textContent = "SUV";

    filter_display.append(type);

    let arr = products.filter(element => {
        return element.vehicle_type == "SUV";
    })
    data = arr;
    displayData(arr);

    curr_car = "SUV";
}

btn_mini_suv.onclick = () => {
    btn_sedan.removeAttribute("style");
    btn_suv.removeAttribute("style");
    btn_hatch.removeAttribute("style");

    btn_mini_suv.style.border = "1px solid #12967e";
    btn_mini_suv.style.color = "#12967e";

    let all = document.querySelectorAll(".car-type");
    all.forEach(element => element.remove());

    let type = document.createElement("div");
    type.setAttribute("class", "selected-filters car-type");
    type.textContent = "Mini SUV";

    filter_display.append(type);

    let arr = products.filter(element => {
        return element.vehicle_type == "Mini SUV";
    })
    data = arr;
    displayData(arr);

    curr_car = "Mini SUV";
}

// transmission type button

let btn_manual = document.querySelector("#btn-manual");
let btn_auto = document.querySelector("#btn-automatic");
let curr_trans = "";

btn_manual.onclick = () => {
    btn_auto.removeAttribute("style");

    btn_manual.style.border = "1px solid #12967e";
    btn_manual.style.color = "#12967e";

    let all = document.querySelectorAll(".transm-type");
    all.forEach(element => element.remove());

    let type = document.createElement("div");
    type.setAttribute("class", "selected-filters transm-type");
    type.textContent = "Manual";

    filter_display.append(type);

    let arr = products.filter(element => {
        if (curr_car != "") {
            return element.transmission_type == "Manual" && element.vehicle_type == curr_car;
        } else {
            return element.transmission_type == "Manual";
        }
    })
    data = arr;
    displayData(arr);

    curr_trans = "Manual";
}

btn_auto.onclick = () => {
    btn_manual.removeAttribute("style");

    btn_auto.style.border = "1px solid #12967e";
    btn_auto.style.color = "#12967e";

    let all = document.querySelectorAll(".transm-type");
    all.forEach(element => element.remove());

    let type = document.createElement("div");
    type.setAttribute("class", "selected-filters transm-type");
    type.textContent = "Automatic";

    filter_display.append(type);

    let arr = products.filter(element => {
        if (curr_car != "") {
            return element.transmission_type == "Automatic" && element.vehicle_type == curr_car;
        } else {
            return element.transmission_type == "Automatic";
        }
    })
    data = arr;
    displayData(arr);

    curr_trans = "Automatic";
}

// fuel type

let btn_diesel = document.querySelector("#btn-diesel");
let btn_petrol = document.querySelector("#btn-petrol");

btn_diesel.onclick = () => {
    btn_petrol.removeAttribute("style");

    btn_diesel.style.border = "1px solid #12967e";
    btn_diesel.style.color = "#12967e";

    let all = document.querySelectorAll(".fuel-type");
    all.forEach(element => element.remove());

    let type = document.createElement("div");
    type.setAttribute("class", "selected-filters fuel-type");
    type.textContent = "Diesel";

    filter_display.append(type);

    let arr = products.filter(element => {
        if (curr_car != "" && curr_trans != "") {
            return element.fuel_type == "Diesel" && element.vehicle_type == curr_car && element.transmission_type == curr_trans;
        } else if (curr_trans != "") {
            return element.fuel_type == "Diesel" && element.transmission_type == curr_trans;
        } else if (curr_car != "") {
            return element.fuel_type == "Diesel" && element.vehicle_type == curr_car;
        } else {
            return element.fuel_type == "Diesel" && element.vehicle == search_query.vehicle;
        }
    })
    data = arr;
    displayData(arr);
}

btn_petrol.onclick = () => {
    btn_diesel.removeAttribute("style");

    btn_petrol.style.border = "1px solid #12967e";
    btn_petrol.style.color = "#12967e";

    let all = document.querySelectorAll(".fuel-type");
    all.forEach(element => element.remove());

    let type = document.createElement("div");
    type.setAttribute("class", "selected-filters fuel-type");
    type.textContent = "Petrol";

    filter_display.append(type);

    let arr = products.filter(element => {
        if (curr_car != "" && curr_trans != "") {
            return element.fuel_type == "Petrol" && element.vehicle_type == curr_car && element.transmission_type == curr_trans;
        } else if (curr_trans != "") {
            return element.fuel_type == "Petrol" && element.transmission_type == curr_trans;
        } else if (curr_car != "") {
            return element.fuel_type == "Petrol" && element.vehicle_type == curr_car;
        } else {
            return element.fuel_type == "Petrol" && element.vehicle == search_query.vehicle;
        }
    })
    data = arr;
    displayData(arr);
}

let age_btn = document.querySelector("#age_btn");
age_btn.onclick = () => {
    age_btn.style.border = "1px solid #12967e";
    age_btn.style.color = "#12967e";

    let type = document.createElement("div");
    type.setAttribute("class", "selected-filters");
    type.textContent = "18-21 yrs";

    filter_display.append(type);

    let arr = data.filter(element => {
        return element.max_age == 21;
    })
    displayData(arr);
}

// filter options bike

let btn_geared = document.querySelector("#btn-geared");
let btn_gearless = document.querySelector("#btn-gearless");

btn_geared.onclick = () => {
    btn_gearless.removeAttribute("style");

    btn_geared.style.border = "1px solid #12967e";
    btn_geared.style.color = "#12967e";

    let all = document.querySelectorAll(".gear-type");
    all.forEach(element => element.remove());

    let type = document.createElement("div");
    type.setAttribute("class", "selected-filters gear-type");
    type.textContent = "Geared";

    filter_display.append(type);

    let arr = products.filter(element => {
        return element.transmission_type == "Geared" && element.vehicle == "bike";
    })
    data = arr;
    displayData(arr);
}

btn_gearless.onclick = () => {
    btn_geared.removeAttribute("style");

    btn_gearless.style.border = "1px solid #12967e";
    btn_gearless.style.color = "#12967e";

    let all = document.querySelectorAll(".gear-type");
    all.forEach(element => element.remove());

    let type = document.createElement("div");
    type.setAttribute("class", "selected-filters gear-type");
    type.textContent = "Gearless";

    filter_display.append(type);

    let arr = products.filter(element => {
        return element.transmission_type == "Gearless" && element.vehicle == "bike";
    })
    data = arr;
    displayData(arr);
}

let btn_engine_110 = document.querySelector("#btn-110");
let btn_engine_111 = document.querySelector("#btn-111");
let btn_engine_150 = document.querySelector("#btn-150");

btn_engine_110.onclick = () => {
    btn_engine_111.removeAttribute("style");
    btn_engine_150.removeAttribute("style");

    btn_engine_110.style.border = "1px solid #12967e";
    btn_engine_110.style.color = "#12967e";

    let all = document.querySelectorAll(".engine-type");
    all.forEach(element => element.remove());

    let type = document.createElement("div");
    type.setAttribute("class", "selected-filters engine-type");
    type.textContent = "<=110cc";

    filter_display.append(type);

    let arr = data.filter(element => {
        return element.engine_capacity == 110 && element.vehicle == "bike";
    });

    displayData(arr);
}

btn_engine_111.onclick = () => {
    btn_engine_110.removeAttribute("style");
    btn_engine_150.removeAttribute("style");

    btn_engine_111.style.border = "1px solid #12967e";
    btn_engine_111.style.color = "#12967e";

    let all = document.querySelectorAll(".engine-type");
    all.forEach(element => element.remove());

    let type = document.createElement("div");
    type.setAttribute("class", "selected-filters engine-type");
    type.textContent = "111-150cc";

    filter_display.append(type);

    let arr = data.filter(element => {
        return element.engine_capacity == 125 && element.vehicle == "bike";
    })
    data = arr;
    displayData(arr);
}

btn_engine_150.onclick = () => {
    btn_engine_111.removeAttribute("style");
    btn_engine_110.removeAttribute("style");

    btn_engine_150.style.border = "1px solid #12967e";
    btn_engine_150.style.color = "#12967e";

    let all = document.querySelectorAll(".engine-type");
    all.forEach(element => element.remove());

    let type = document.createElement("div");
    type.setAttribute("class", "selected-filters engine-type");
    type.textContent = ">150cc";

    filter_display.append(type);

    let arr = data.filter(element => {
        return element.engine_capacity >= 150 && element.vehicle == "bike";
    })
    data = arr;
    displayData(arr);
}


// Sort by
let sort_select = document.querySelector("#sort-select");
sort_select.onchange = () => {
    let arr = [];
    if (sort_select.value == "Distance") {
        arr = data.sort((a, b) => {
            return a.distance - b.distance;
        })
    } else if (sort_select.value == "lth") {
        arr = data.sort((a, b) => {
            return a.price - b.price;
        })
    } else {
        arr = data.sort((a, b) => {
            return b.price - a.price;
        })
    }

    displayData(arr);
}