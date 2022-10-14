let cart_arr = JSON.parse(localStorage.getItem("cart_arr")) || [];

let home_btn = document.querySelector("#home_btn");
home_btn.onclick = () => {
    window.location.href = "/"
}

displayData(cart_arr);

function displayData(arr) {
    let empty_container = document.querySelector(".empty-cart");
    if (cart_arr.length == 0) {
        let footer = document.querySelector("footer");
        footer.style.display = "none";
        empty_container.style.display = "block";
    } else {        
        empty_container.style.display = "none";        
    }
    document.querySelector(".cart-items-container").innerHTML = null;

    arr.map((element, index) => {
        let super_div = document.createElement("div");
        let img_container = document.createElement("div");
        let img = document.createElement("img");
        let span = document.createElement("span");
        let hr = document.createElement("hr");
        let item_info = document.createElement("div");
        let h2 = document.createElement("h2");
        let img_desc = document.createElement("div");
        let desc_div_1 = document.createElement("div");
        let desc_div_2 = document.createElement("div");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let p5 = document.createElement("p");
        let p6 = document.createElement("p");
        let p7 = document.createElement("p");
        let del_container = document.createElement("div");
        let h3 = document.createElement("h3");

        img_container.setAttribute("class", "img-container");
        img.setAttribute("src", element.img);
        span.textContent = "₹" + element.price;
        item_info.setAttribute("class", "item-info");
        h2.textContent = element.vehicle_name;
        img_desc.setAttribute("class", "img-desc");
        p2.textContent = element.location;
        p3.textContent = element.distance + " km away";
        p4.textContent = "Fuel price: ₹" + element.fuel_price;
        p5.textContent = "Pickup: " + element.pickup_time.split("T")[0];
        p6.textContent = "Drop: " + element.drop_time.split("T")[0];
        p7.textContent = "Transmission: " + element.transmission_type;
        del_container.setAttribute("class", "delete-container");
        del_container.onclick = () => {
            deleteItem(index);
        }
        h3.textContent = "DELETE";

        desc_div_1.append(p1, p2, p3, p4);
        desc_div_2.append(p5, p6, p7);
        img_desc.append(desc_div_1, desc_div_2);
        item_info.append(h2, img_desc);
        img_container.append(img, span);
        del_container.append(h3);
        super_div.append(img_container, hr, item_info, del_container);

        if (element.seat == 2) {
            p1.textContent = element.transmission_type + ", " + element.seat + " Seats, " + element.engine_capacity + "cc";
            img.style.width = "300px"
        } else {
            p1.textContent = element.transmission_type + ", " + element.seat + " Seats, " + element.fuel_type;
        }

        document.querySelector(".cart-items-container").append(super_div);
    });
}

function deleteItem(index) {
    cart_arr.splice(index, 1);
    localStorage.setItem("cart_arr", JSON.stringify(cart_arr));
    displayData(cart_arr);
}

let checkout_btn = document.querySelector("#checkout_btn");
checkout_btn.onclick = () => {
    localStorage.setItem("checkout_arr", JSON.stringify(cart_arr));
    window.location.href = "../../payment_page/checkOut.html"
}

document.querySelector("#drivezy-logo").onclick = () => {
    window.location.href = "/";
}