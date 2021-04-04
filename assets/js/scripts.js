const myRange = document.querySelector("#myRange");
const views = document.querySelector("#views");
const price = document.querySelector("#price");
const toggle = document.querySelector("#toggle");

myRange.defaultValue = 3;
price.innerText = 16;
views.innerText = "100K"

myRange.onchange = function () {
    if (myRange.value == 1) {
        views.innerText = "10K"
        if (toggle.checked == true) {
            price.innerText = 6;
        } else {
            price.innerText = 8;
        }
        toggle.onchange = function () {
            if (toggle.checked == true) {
                price.innerText = 6;
            } else {
                price.innerText = 8;
            }
        };
    } else if (myRange.value == 2) {
        views.innerText = "50K"
        if (toggle.checked == true) {
            price.innerText = 9;
        } else {
            price.innerText = 12;
        }
        toggle.onchange = function () {
            if (toggle.checked == true) {
                price.innerText = 9;
            } else {
                price.innerText = 12;
            }
        };
    } else if (myRange.value == 3) {
        views.innerText = "100K"
        if (toggle.checked == true) {
            price.innerText = 12;
        } else {
            price.innerText = 16;
        }
        toggle.onchange = function () {
            if (toggle.checked == true) {
                price.innerText = 12;
            } else {
                price.innerText = 16;
            }
        };
    } else if (myRange.value == 4) {
        views.innerText = "500K"
        if (toggle.checked == true) {
            price.innerText = 18;
        } else {
            price.innerText = 24;
        }
        toggle.onchange = function () {
            if (toggle.checked == true) {
                price.innerText = 18;
            } else {
                price.innerText = 24;
            }
        };
    } else if (myRange.value == 5) {
        views.innerText = "1M"
        if (toggle.checked == true) {
            price.innerText = 27;
        } else {
            price.innerText = 36;
        }
        toggle.onchange = function () {
            if (toggle.checked == true) {
                price.innerText = 27;
            } else {
                price.innerText = 36;
            }
        };
    }
};