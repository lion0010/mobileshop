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
        window.location.href = "/git/mobileshop/html/register-login.html"
    };
})