let cars = [
    {
        "vehicle_name": "Hyundai Eon (Petrol)",
        "vehicle_type": "Hatchback",
        "transmission_type": "Manual",
        "fuel_type": "Petrol",
        "price": 2362,
        "max-age": 21,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558698293_eon.png",
        "seat": 5,
        "distance": 0.0
    },
    {
        "vehicle_name": "Hyundai grand I10",
        "vehicle_type": "Hatchback",
        "transmission_type": "Manual",
        "fuel_type": "Diesel",
        "price": 2572,
        "max-age": 21,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700262_i10.png",
        "seat": 5,
        "distance": 0.0
    },
    {
        "vehicle_name": "TATA Tiago",
        "vehicle_type": "Hatchback",
        "transmission_type": "Manual",
        "fuel_type": "Diesel",
        "price": 2572,
        "max-age": 21,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700964_tiago.png",
        "seat": 5,
        "distance": 0.0
    },
    {
        "vehicle_name": "Maruti Swift VDI (Diesel)",
        "vehicle_type": "Hatchback",
        "transmission_type": "Manual",
        "fuel_type": "Diesel",
        "price": 2572,
        "max-age": 21,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1562926309_suzuki_old.png",
        "seat": 5,
        "distance": 0.0
    },
    {
        "vehicle_name": "Maruti Suzuki Baleno",
        "vehicle_type": "Hatchback",
        "transmission_type": "Manual",
        "fuel_type": "Diesel",
        "price": 2762,
        "max-age": 60,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558698059_baleno.png",
        "seat": 5,
        "distance": 5.0
    },
    {
        "vehicle_name": "Maruti Suzuki Baleno (Petrol)",
        "vehicle_type": "Hatchback",
        "transmission_type": "Manual",
        "fuel_type": "Petrol",
        "price": 2412,
        "max-age": 60,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558698059_baleno.png",
        "seat": 5,
        "distance": 5.0
    },
    {
        "vehicle_name": "Maruti Suzuki Celeio ZXI",
        "vehicle_type": "Hatchback",
        "transmission_type": "Automatic",
        "fuel_type": "Petrol",
        "price": 2319,
        "max-age": 60,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558698108_celerio.png",
        "seat": 5,
        "distance": 5.0
    },
    {
        "vehicle_name": "Hyundai grand I10 (Automatic)",
        "vehicle_type": "Hatchback",
        "transmission_type": "Automatic",
        "fuel_type": "Petrol",
        "price": 2585,
        "max-age": 60,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700262_i10.png",
        "seat": 5,
        "distance": 5.0
    },
    {
        "vehicle_name": "Ford Aspire",
        "vehicle_type": "Sedan",
        "transmission_type": "Manual",
        "fuel_type": "Diesel",
        "price": 2446,
        "max-age": 60,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700163_ford-aspire.png",
        "seat": 5,
        "distance": 5.0
    },
    {
        "vehicle_name": "Brezza LDI",
        "vehicle_type": "SUV",
        "transmission_type": "Manual",
        "fuel_type": "Diesel",
        "price": 2446,
        "max-age": 60,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558701126_vitara-breeza.png",
        "seat": 5,
        "distance": 8.3
    },
    {
        "vehicle_name": "Ford Ecosport Trend",
        "vehicle_type": "Mini SUV",
        "transmission_type": "Manual",
        "fuel_type": "Diesel",
        "price": 3273,
        "max-age": 60,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558698257_eco-sport.png",
        "seat": 5,
        "distance": 8.3
    }
];
let bikes = [
    {
        "vehicle_name": "Honda Activa",
        "transmission_type": "Gearless",
        "engine_capacity": 109,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1570607984_activa-4g.png",
        "seat": 2,
        "fuel_type": "Petrol",
        "distance": 0,
        "price": 903
    },
    {
        "vehicle_name": "Honda Grazia",
        "transmission_type": "Gearless",
        "engine_capacity": 125,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1570608797_honnda-grazia.png",
        "seat": 2,
        "fuel_type": "Petrol",
        "distance": 5,
        "price": 1032
    },
    {
        "vehicle_name": "Honda CB Hornet 160R",
        "transmission_type": "Geared",
        "engine_capacity": 160,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1560593594_hornet.png",
        "seat": 2,
        "fuel_type": "Petrol",
        "distance": 6.2,
        "price": 1693
    },
    {
        "vehicle_name": "Yamaha Fascino",
        "transmission_type": "Geared",
        "engine_capacity": 113,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1560593392_fascino.png",
        "seat": 2,
        "fuel_type": "Petrol",
        "distance": 3.2,
        "price": 903
    },
    {
        "vehicle_name": "Honda XBlade",
        "transmission_type": "Geared",
        "engine_capacity": 162,
        "img": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1560593537_honda-xblade.png",
        "seat": 2,
        "fuel_type": "Petrol",
        "distance": 8.2,
        "price": 1693
    }
];

let data = bikes;

displayData(data);

function displayData(arr) {
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
        span.textContent = "₹"+element.price;
        img_desc.setAttribute("class", "img-desc");
        h3.textContent = element.vehicle_name;        
        p2.textContent = "Bellanduru (New)";
        p3.textContent = element.distance + " km away";
        view.textContent = "QUICK VIEW";

        desc.append(h3, p1, p2, p3);
        img_desc.append(desc, hr2, view);
        img_container.append(img, span);
        super_div.append(img_container, hr1, img_desc);

        if (element.seat == 2) {
            span.style.top = "200px";
            p1.textContent = element.transmission_type+", "+element.seat+" Seats, "+element.engine_capacity+"cc";
        } else {
            p1.textContent = element.transmission_type+", "+element.seat+" Seats, "+element.fuel_type;
        }

        document.querySelector(".product-display").append(super_div);
    });
}