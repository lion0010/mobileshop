var cartBtn = document.getelementById('btn-cart');
cartBtn.addEventListener("touchend", function(event) {
    event.preventDefault();
    if (localStorage.token === "") {
        location.href = "../html/register-login.html"
    } else {
        location.href = "../html/account.html"
    }
})