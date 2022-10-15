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
let hr = ("0" + d.getHours()).slice(-2);
let min = ("0" + d.getMinutes()).slice(-2);

let md = addDays(new Date(), 1);

let changed_pickup = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + "T" + hr + ":" + min;
let changed_drop = md.getFullYear() + "-" + ("0" + (md.getMonth() + 1)).slice(-2) + "-" + ("0" + md.getDate()).slice(-2) + "T" + hr + ":" + min;

pickup.setAttribute("min", changed_pickup);
drop.setAttribute("min", changed_drop);

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
        img.style.zIndex = "0";
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

        super_div.onclick = () => { selectItem(element) };

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


    let arr = products.map(element => {
        return Object.assign({}, element);
    })

    arr = arr.filter(element => element.vehicle == search_query.vehicle);

    arr = arr.map(element => {
        {
            return { ...element, price: element.price += 1000 };
        }
    });

    displayData(arr);

    let d = new Date();
    let changed_pickup = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);

    let hr = ("0" + d.getHours()).slice(-2);
    let min = ("0" + d.getMinutes()).slice(-2);

    let md = addDays(new Date(), 7);
    let changed_drop = md.getFullYear() + "-" + ("0" + (md.getMonth() + 1)).slice(-2) + "-" + ("0" + md.getDate()).slice(-2);

    search_query.pickup = changed_pickup + "T" + hr + ":" + min;
    search_query.drop = changed_drop + "T" + hr + ":" + min;

    pickup.value = search_query.pickup;
    drop.value = search_query.drop;

    localStorage.setItem("search_query", JSON.stringify(search_query));
}

btn_duration_15.onclick = () => {
    btn_duration_7.removeAttribute("style");
    btn_duration_30.removeAttribute("style");
    btn_duration_custom.removeAttribute("style");

    btn_duration_15.style.border = "1px solid #12967e";
    btn_duration_15.style.color = "#12967e";

    let arr = products.map(element => {
        return Object.assign({}, element);
    })

    arr = arr.filter(element => element.vehicle == search_query.vehicle);

    arr = arr.map(element => {
        {
            return { ...element, price: element.price += 5000 };
        }
    });

    displayData(arr);

    let d = new Date();
    let changed_pickup = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);

    let hr = ("0" + d.getHours()).slice(-2);
    let min = ("0" + d.getMinutes()).slice(-2);

    let md = addDays(new Date(), 15);
    let changed_drop = md.getFullYear() + "-" + ("0" + (md.getMonth() + 1)).slice(-2) + "-" + ("0" + md.getDate()).slice(-2);

    search_query.pickup = changed_pickup + "T" + hr + ":" + min;
    search_query.drop = changed_drop + "T" + hr + ":" + min;

    pickup.value = search_query.pickup;
    drop.value = search_query.drop;

    localStorage.setItem("search_query", JSON.stringify(search_query));
}

btn_duration_30.onclick = () => {
    btn_duration_15.removeAttribute("style");
    btn_duration_7.removeAttribute("style");
    btn_duration_custom.removeAttribute("style");

    btn_duration_30.style.border = "1px solid #12967e";
    btn_duration_30.style.color = "#12967e";

    let arr = products.map(element => {
        return Object.assign({}, element);
    })

    arr = arr.filter(element => element.vehicle == search_query.vehicle);

    arr = arr.map(element => {
        {
            return { ...element, price: element.price += 10000 };
        }
    });

    displayData(arr);

    let d = new Date();
    let changed_pickup = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);

    let hr = ("0" + d.getHours()).slice(-2);
    let min = ("0" + d.getMinutes()).slice(-2);

    let md = addDays(new Date(), 30);
    let changed_drop = md.getFullYear() + "-" + ("0" + (md.getMonth() + 1)).slice(-2) + "-" + ("0" + md.getDate()).slice(-2);

    search_query.pickup = changed_pickup + "T" + hr + ":" + min;
    search_query.drop = changed_drop + "T" + hr + ":" + min;

    pickup.value = search_query.pickup;
    drop.value = search_query.drop;

    localStorage.setItem("search_query", JSON.stringify(search_query));
}

btn_duration_custom.onclick = () => {
    btn_duration_15.removeAttribute("style");
    btn_duration_30.removeAttribute("style");
    btn_duration_7.removeAttribute("style");

    btn_duration_custom.style.border = "1px solid #12967e";
    btn_duration_custom.style.color = "#12967e";

    displayData(data);

    pickup.value = changed_pickup;
    drop.value = changed_drop;

    search_query.pickup = pickup.value;
    search_query.drop = drop.value;

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
    filter_display.innerHTML = null;
    btn_sedan.removeAttribute("style");
    btn_suv.removeAttribute("style");
    btn_mini_suv.removeAttribute("style");
    btn_manual.removeAttribute("style");
    btn_diesel.removeAttribute("style");
    btn_petrol.removeAttribute("style");
    btn_auto.removeAttribute("style");
    age_btn.removeAttribute("style");


    if (btn_hatch.style.border == "1px solid rgb(18, 150, 126)") {
        location.reload();
    }

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
    filter_display.innerHTML = null;
    btn_hatch.removeAttribute("style");
    btn_suv.removeAttribute("style");
    btn_mini_suv.removeAttribute("style");
    btn_manual.removeAttribute("style");
    btn_diesel.removeAttribute("style");
    btn_petrol.removeAttribute("style");
    btn_auto.removeAttribute("style");
    age_btn.removeAttribute("style");

    if (btn_sedan.style.border == "1px solid rgb(18, 150, 126)") {
        location.reload();
    }

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
    filter_display.innerHTML = null;
    btn_sedan.removeAttribute("style");
    btn_hatch.removeAttribute("style");
    btn_mini_suv.removeAttribute("style");
    btn_manual.removeAttribute("style");
    btn_diesel.removeAttribute("style");
    btn_petrol.removeAttribute("style");
    btn_auto.removeAttribute("style");
    age_btn.removeAttribute("style");

    if (btn_suv.style.border == "1px solid rgb(18, 150, 126)") {
        location.reload();
    }

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
    filter_display.innerHTML = null;
    btn_sedan.removeAttribute("style");
    btn_suv.removeAttribute("style");
    btn_hatch.removeAttribute("style");
    btn_manual.removeAttribute("style");
    btn_diesel.removeAttribute("style");
    btn_petrol.removeAttribute("style");
    btn_auto.removeAttribute("style");
    age_btn.removeAttribute("style");

    if (btn_mini_suv.style.border == "1px solid rgb(18, 150, 126)") {
        location.reload();
    }

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





// navbar section
let loginFlag = localStorage.getItem("loginFlag") || 0;

var login = document.getElementsByClassName("myprofile")[0];
var loginPop = document.getElementsByClassName("login-pop")[0];
var closeLoginPop = document.getElementsByClassName("closeLoginPop")[0];

//login.addEventListener("click", openLogin);
closeLoginPop.addEventListener("click", closeLogin);

function openLogin() {
    loginPop.style.display = "block";
}
function closeLogin() {
    loginPop.style.display = "none";
}

var logout = document.getElementById("logout");
logout.addEventListener("click", logoutLogin);
function logoutLogin() {
    loginFlag = 0;
    localStorage.setItem("loginFlag", 0);
    window.location.reload();
}
// login signup page
var numberofattempts = JSON.parse(localStorage.getItem("numberofattempts")) || 0;
localStorage.setItem("numberofattempts", 0);
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.addEventListener("click", function () {
    //console.log(loginFlag);
    if (loginFlag == 1) {
        //console.log(loginFlag);
        modal.style.display = "none";
        // loginPop.style.display = "block";
        openLogin();
    } else {
        modal.style.display = "block";
    }
});
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
console.log("Number of attempts before enter code: " + JSON.parse(localStorage.getItem("numberofattempts")));

//Add event listener
var emarr = JSON.parse(localStorage.getItem("emarr")) || [];
document
    .querySelector("#email_mobile_number")
    .addEventListener("submit", getlogindata);
var flag_enteredonetime = false;
function getlogindata(e) {
    e.preventDefault();
    var email_mobile_number = document.getElementById("email_number").value;
    console.log("email number entered: " + email_mobile_number);
    console.log("email number entered present in AD: " + emarr.includes(email_mobile_number));
    if (!emarr.includes(email_mobile_number)) {
        emarr.push(email_mobile_number);
        localStorage.setItem("emarr", JSON.stringify(emarr));
        var div_name = document.createElement("div");
        div_name.setAttribute("class", "form-input form-width");
        div_name.setAttribute("id", "inputname");

        var label_name = document.createElement("label");
        label_name.setAttribute("class", "input-label");
        label_name.innerText = "Enter name";

        var input_name = document.createElement("input");
        input_name.setAttribute("class", "input-box");
        input_name.setAttribute("id", "userinputname");
        input_name.setAttribute("required", "");

        var label_pass = document.createElement("label");
        label_pass.setAttribute("class", "input-label");
        label_pass.innerText = "Enter Password";

        var input_pass = document.createElement("input");
        input_pass.setAttribute("class", "input-box");
        input_pass.setAttribute("id", "setpassword");
        input_pass.setAttribute("required", "");

        var checkbox_div = document.createElement("div");
        checkbox_div.setAttribute("class", "checkbox-section");

        var label_checkbox = document.createElement("label");
        label_checkbox.setAttribute("class", "checkbox-container");
        var checkbox_input = document.createElement("input");
        checkbox_input.setAttribute("type", "checkbox");
        checkbox_input.setAttribute("id", "checkboxid");
        var checkboxspan = document.createElement("span");
        checkboxspan.setAttribute("class", "marked");
        checkboxspan.setAttribute("onClick", "referalcodefield()");

        var textspan = document.createElement("span");
        textspan.innerText = "I have a referral code";
        label_checkbox.append(checkbox_input, checkboxspan, textspan);
        checkbox_div.append(label_checkbox);

        var div_floatinglabel = document.createElement("div");
        div_floatinglabel.setAttribute("class", "floating-label form-width");
        div_floatinglabel.setAttribute("id", "referaldiv");

        var input_floating = document.createElement("input");
        input_floating.setAttribute("class", "input-box");
        input_floating.setAttribute("id", "floatinginput");
        input_floating.setAttribute("autocomplete", "off");
        input_floating.setAttribute("type", "text");
        input_floating.setAttribute("placeholder", "Referral Code")

        div_floatinglabel.style.display = "none";
        checkbox_input.addEventListener("click", function handleClick() {
            if (checkbox_input.checked) {
                div_floatinglabel.style.display = "block";
            }
            else {
                div_floatinglabel.style.display = "none";
            }
        });

        var floatingspan = document.createElement("span");
        floatingspan.setAttribute("class", "highlight");

        var floatinglabel = document.createElement("label");
        floatinglabel.setAttribute("class", "input-label");
        floatinglabel.innerText = "";

        div_floatinglabel.append(input_floating, floatingspan, floatinglabel);

        div_name.append(
            label_name,
            input_name,
            label_pass,
            input_pass,
            checkbox_div,
            div_floatinglabel
        );
        document.querySelector("#form_input").append(div_name);
        document
            .querySelector("#email_mobile_number")
            .addEventListener("submit", savelogindata);
    } else {
        console.log("email number entered present in AD: " + emarr.includes(email_mobile_number) + " Now creating password box as attempts are " + JSON.parse(localStorage.getItem("numberofattempts")));
        if (JSON.parse(localStorage.getItem("numberofattempts")) == 0) {
            console.log("Now creating password box as attempts are 0");
            numberofattempts = JSON.parse(localStorage.getItem("numberofattempts"));

            localStorage.setItem("numberofattempts", JSON.stringify(1));
            var div_pass = document.createElement("div");
            div_pass.setAttribute("class", "form-input form-width");
            div_pass.setAttribute("id", "inputpass");

            var label_pass = document.createElement("label");
            label_pass.setAttribute("class", "input-label");
            label_pass.innerText = "Enter password";

            var input_pass = document.createElement("input");
            input_pass.setAttribute("class", "input-box");
            input_pass.setAttribute("id", "passwordfilled");
            input_pass.setAttribute("required", "");

            div_pass.append(label_pass, input_pass);
            document.querySelector("#form_input").append(div_pass);
            document
                .querySelector("#email_mobile_number")
                .addEventListener("submit", verifypass)
        }

    }

    // localStorage.setItem("emarr", JSON.stringify(emarr));
    console.log(emarr);

}

function savelogindata(el2) {
    var logindata = JSON.parse(localStorage.getItem("logindata")) || [];
    el2.preventDefault();
    console.log(document.getElementById("userinputname").value);
    var obj = {
        email_mobile_number: document.getElementById("email_number").value,
        name: document.getElementById("userinputname").value,

        passwordset: document.getElementById("setpassword").value,
    };
    logindata.push(obj);
    localStorage.setItem("logindata", JSON.stringify(logindata));
    numberofattempts = 0;
    console.log(logindata);
    document.getElementById("form_input").innerText = "";
    alert("Sign in Successful, Welcome to website");
    window.location.reload();
    document.getElementsByClassName("close")[0].click();
    console.log(logindata);
    getlogindata();
}

function getpassword(el) {
    el.preventDefault();

    console.log("added event listener to get password");
}
//   let loginFlag = localStorage.getItem("loginFlag") || 0;
function verifypass(el1) {
    var logindata = JSON.parse(localStorage.getItem("logindata")) || [];
    el1.preventDefault();
    var pass = document.getElementById("passwordfilled").value;
    var flag = false;
    for (var i = 0; i < logindata.length; i++) {
        var elem = logindata[i];
        if (elem.passwordset === pass) {
            console.log("user found");
            flag = true;
            var numberofattempts = 0;
            localStorage.setItem("numberofattempts", JSON.stringify(0));
            alert("Login successful");
            document.getElementsByClassName("close")[0].click();
            localStorage.setItem("loginFlag", 1);
            loginFlag = 1;
            modal.style.display = "none";
            location.reload();
            break;
        }
    }
    if (flag === false) {
        flag_enteredonetime = true;
        document.getElementById("inputpass").value = "";
        alert("Please enter correct password");
    }

    document.getElementById("inputpass").value = "";

}

//Google login once clicking on google
function googlelogin() {
    window.location.href =
        "https://accounts.google.com/v3/signin/identifier?dsh=S168818674%3A1665509543051224&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AQDHYWrKlcSBI-487kngVP56jKrjRW-BDhy6ow5bh8_cz5daqOmQ5LoWb2DSF-3JGcw6mKHNVo2r",
        "_blank"
        ;
}
function facebooklogin() {
    window.location.href =
        "https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjY1NTA5NTkzLCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D",
        "_blank"
        ;
}

function referalcodefield() {
    //   <div class="floating-label form-width">
    //     <input
    //       class="floating-input"
    //       type="text"
    //       placeholder=" "
    //       autocomplete="off"
    //       value=""
    //     />
    //     <span class="highlight"></span>
    //     <label>Referral Code</label>
    //   </div>;
    console.log("Ready to show referal code field");
}


document.querySelector("#drivezy-logo").onclick = () => {
    window.location.href = "/";
}