$(function() {
    // 获取手指在轮播图元素上的一个滑动方向（左右）

    // 获取界面上轮播图容器
    var $carousels = $('.carousel');
    var startX, endX;
    // 在滑动的一定范围内，才切换图片
    var offset = 50;
    var hotGoods = document.getElementById('goods-container');
    var oCat = document.getElementById('category-lists');
    console.log(hotGoods);
    // 注册滑动事件
    $carousels.on('touchstart', function(e) {
        // 手指触摸开始时记录一下手指所在的坐标x
        startX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchmove', function(e) {
        // 目的是：记录手指离开屏幕一瞬间的位置 ，用move事件重复赋值
        endX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchend', function(e) {
        //console.log(endX);
        //结束触摸一瞬间记录手指最后所在坐标x的位置 endX
        //比较endX与startX的大小，并获取每次运动的距离，当距离大于一定值时认为是有方向的变化
        var distance = Math.abs(startX - endX);
        if (distance > offset) {
            //说明有方向的变化
            //根据获得的方向 判断是上一张还是下一张出现
            $(this).carousel(startX > endX ? 'next' : 'prev');
        }
    })


    window.onload = function() {
        $.ajax({
            type: "get",
            url: "http://h6.duchengjiu.top/shop/api_cat.php",
            data: "page=1&pagesize=30",
            success: addCategory
        })
        $.ajax({
            type: "get",
            url: "http://h6.duchengjiu.top/shop/api_goods.php",
            data: "page=1&pagesize=30",
            success: addImg
        })
    }

    function addCategory(res) {
        var data = res.data; //json对象当中的data是一个数组
        for (var i = 0; i < data.length; i++) {
            var obj = data[i]; //数组里面的每一项是一个商品分类的对象
            oCat.innerHTML += `<li class="category-list"><a href="html/list.html?cat_id=${obj.cat_id}">${obj.cat_name}</a></li>`;
        }
    }

    function addImg(res) {
        console.log(hotGoods);
        console.log(res);
        var data = res.data;
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var obj = data[i]; //数组里面的每一项是一个商品分类的对象
            hotGoods.innerHTML += `
                    <li class="hot-li">
                        <a href="html/goods.html?goods_id=${obj.goods_id}">
                            <img src="${obj.goods_thumb}" alt="">
                            <span>
                            查看详情
                            </span>
                        </a>
                    </li>`;
        }
    }
    // console.log(hotGoods);
    // handleAjax.method('http://h6.duchengjiu.top/shop/api_goods.php?page=1&pagesize=10', "", "get", function(data) {
    //         if (data.code === 0) {
    //             console.log(data);
    //         } else {
    //             console.log(fail);
    //         }
    //     })
    // .fail(function(resp) {
    //     console.log(resp);
    // var json = JSON.parse(resp); //返回的整个json对象
    // var data = json.data; //json对象当中的data是一个数组
    // for (var i = 0; i < resp.length; i++) {
    //     var obj = resp[i]; //数组里面的每一项是一个商品分类的对象
    //     hotGoods.innerHTML += `
    //     <div id="hot">
    //         <li class="hot-li">
    //             <a href="html/goods.html?goods_id=${obj.goods_id}">
    //                 <img src="${obj.goods_thumb}" alt="">
    //                 <span>
    //                 查看详情
    //                 </span>
    //             </a>
    //         </li>
    //     </div>`;
    // }
    // });
});