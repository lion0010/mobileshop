var uName = document.getElementById('user-name');
var quit = document.getElementById('login-out');
if (!localStorage.token) {
    uName.innerHTML = "请登录";
} else {
    uName.innerHTML = localStorage.username;
}
quit.addEventListener("touchstart", function(event) {
    event.preventDefault();
    if (event.targetTouches.length == 1) {　　　　
        event.preventDefault(); // 阻止浏览器默认事件，重要 
        var touch = event.targetTouches[0];
        // 把元素放在手指所在的位置
        localStorage.clear();
<<<<<<< HEAD
        window.location.href = "register-login.html"
=======
        window.location.href = "/git/mobileshop/html/register-login.html"
>>>>>>> 9d4c54a2412d29994de22a5613e1c2e759b34a3d
    };
});
var orderBtn = document.getElementById('btn-order');
var cartBtn = document.getElementById('btn-cart');
var accountBtn = document.getElementById('btn-account');
var cartbtn = document.getElementById('cartbtn');
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
    cartbtn.addEventListener("touchstart", function(event) {
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
