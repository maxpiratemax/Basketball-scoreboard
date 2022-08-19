const home_cart_number = document.getElementById('home_cart_number')
const guest_cart_number = document.getElementById('guest_cart_number')

let home = 0;
let guest = 0;

function addAZeroAtTheBeginning(num, size) {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function home__cart__button_01() {
    home++;
    home_cart_number.textContent = addAZeroAtTheBeginning(home, 2);    
}
function home__cart__button_02() {
    home += 2;
    home_cart_number.textContent = addAZeroAtTheBeginning(home, 2);    
}
function home__cart__button_03() {
    home += 3;
    home_cart_number.textContent = addAZeroAtTheBeginning(home, 2);    
}

function guest__cart__button_01() {
    guest += 1;
    guest_cart_number.textContent = addAZeroAtTheBeginning(guest, 2);    
}
function guest__cart__button_02() {
    guest += 2;
    guest_cart_number.textContent = addAZeroAtTheBeginning(guest, 2);    
}
function guest__cart__button_03() {
    guest += 3;
    guest_cart_number.textContent = addAZeroAtTheBeginning(guest, 2);    
}

function btn_clear() {
    home = 0;
    guest = 0;
    home_cart_number.textContent = "0" + 0;
    guest_cart_number.textContent = "0" + 0;
}
