let search_query = JSON.parse(localStorage.getItem("search_query"));
let select_item = JSON.parse(localStorage.getItem("select_item"));
select_item.fuel_price = 0;
localStorage.setItem("select_item", JSON.stringify(select_item));
localStorage.setItem("quickBookFlag", 1);

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

document.querySelector("#drivezy-logo").onclick = () => {
    window.location.href = "/";
}

// item section

let car_name = document.querySelector("#car_name");
car_name.textContent = select_item.vehicle_name;

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

cart_btn.onclick = () => {
    let cart_arr = JSON.parse(localStorage.getItem("cart_arr")) || [];

    select_item.con_fee = 99;
    select_item.pickup_time = search_query.pickup;
    select_item.drop_time = search_query.drop;
    select_item.location = search_query.location;
    let flag = false;

    if (cart_arr.length > 0) {
        cart_arr.forEach(element => {
            if (JSON.stringify(element) === JSON.stringify(select_item)) {
                flag = true;
                return;
            }
        })
    }

    if (flag) {
        alert("Item already exists");
    } else {
        cart_arr.push(select_item);
        alert("Item successfully added to cart");
        window.location.href = "/product-page/products-page.html";
    }

    localStorage.setItem("cart_arr", JSON.stringify(cart_arr));
}

book_btn.onclick = () => {
    select_item.con_fee = 99;
    select_item.pickup_time = search_query.pickup;
    select_item.drop_time = search_query.drop;
    select_item.location = search_query.location;

    let checkout_arr = [];
    checkout_arr.push(select_item);
    localStorage.setItem("quickBookFlag", 0);
    localStorage.setItem("checkout_arr", JSON.stringify(checkout_arr));
    window.location.href = "../../payment_page/checkOut.html"
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
// console.log("Number of attempts before enter code: " + JSON.parse(localStorage.getItem("numberofattempts")));

//Add event listener
var emarr = JSON.parse(localStorage.getItem("emarr")) || [];
document
    .querySelector("#email_mobile_number")
    .addEventListener("submit", getlogindata);
var flag_enteredonetime = false;
function getlogindata(e) {
    e.preventDefault();
    var email_mobile_number = document.getElementById("email_number").value;
    // console.log("email number entered: " + email_mobile_number);
    // console.log("email number entered present in AD: " + emarr.includes(email_mobile_number));
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
        // console.log("email number entered present in AD: " + emarr.includes(email_mobile_number) + " Now creating password box as attempts are " + JSON.parse(localStorage.getItem("numberofattempts")));
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

}

function savelogindata(el2) {
    var logindata = JSON.parse(localStorage.getItem("logindata")) || [];
    el2.preventDefault();
    var obj = {
        email_mobile_number: document.getElementById("email_number").value,
        name: document.getElementById("userinputname").value,

        passwordset: document.getElementById("setpassword").value,
    };
    logindata.push(obj);
    localStorage.setItem("logindata", JSON.stringify(logindata));
    numberofattempts = 0;
    document.getElementById("form_input").innerText = "";
    alert("Sign in Successful, Welcome to website");
    window.location.reload();
    document.getElementsByClassName("close")[0].click();
    getlogindata();
}

function getpassword(el) {
    el.preventDefault();

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
}