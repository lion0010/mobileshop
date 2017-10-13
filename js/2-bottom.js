//var cartBtn = document.getelementById('btn-cart');
//cartBtn.addEventListener("touchend", function(event) {
//  event.preventDefault();
//  if (localStorage.token === "") {
//      location.href = "../html/register-login.html"
//  } else {
//      location.href = "../html/account.html"
//  }
//})
    var cartBtn = document.getElementById('btn-cart');
    var homeBtn = document.getElementById('btn-home');
    var accountBtn = document.getElementById('btn-account');
    var orderBtn = document.getElementById('btn-order');
    orderBtn.addEventListener("touchstart", function(event) {
        if (event.targetTouches.length == 1) {　　　　
            event.preventDefault(); // 阻止浏览器默认事件，重要 
            var touch = event.targetTouches[0];
            // 把元素放在手指所在的位置
            if (!localStorage.token) {
                location.href = "register-login.html";
            } else {
                location.href = "order.html";
            }
        };
    })
    cartBtn.addEventListener("touchstart", function(event) {
        if (event.targetTouches.length == 1) {　　　　
            event.preventDefault(); // 阻止浏览器默认事件，重要 
            var touch = event.targetTouches[0];
            // 把元素放在手指所在的位置
            if (!localStorage.token) {
                location.href = "register-login.html";
            } else {
                location.href = "cart.html";
            }
        };
    })
    homeBtn.addEventListener("touchstart", function(event) {
        if (event.targetTouches.length == 1) {　　　　
            event.preventDefault(); // 阻止浏览器默认事件，重要 
            var touch = event.targetTouches[0];
            // 把元素放在手指所在的位置
            location.href = "../index.html"
        };
    })
    accountBtn.addEventListener("touchstart", function(event) {
        if (event.targetTouches.length == 1) {　　　　
            event.preventDefault(); // 阻止浏览器默认事件，重要 
            var touch = event.targetTouches[0];
            // 把元素放在手指所在的位置
            if (!localStorage.token) {
                location.href = "register-login.html";
            } else {
                location.href = "account.html";
            }
        }
    })
