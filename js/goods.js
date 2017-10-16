var oPrev = document.querySelector(".prev");
oPrev.addEventListener("touchstart", function(event) {
    if (event.targetTouches.length == 1) {　　　　
        event.preventDefault(); // 阻止浏览器默认事件，重要 
        var touch = event.targetTouches[0];
        // 把元素放在手指所在的位置
	window.history.back();
       };
      
},false)

<<<<<<< HEAD
}, false)
=======

>>>>>>> 9d4c54a2412d29994de22a5613e1c2e759b34a3d
var oShopping = document.querySelector(".shopping");
oShopping.addEventListener("touchstart", function(event) {
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

var oMenu = document.querySelector(".no4");
//var oMenu=$(".no4");
//var oListTwo=document.querySelector(".list-two");
var oListTwo = $(".list-two");
oMenu.addEventListener("touchstart", function(event) {
    if (event.targetTouches.length == 1) {　　　　
        event.preventDefault(); // 阻止浏览器默认事件，重要 
        var touch = event.targetTouches[0];
        // 把元素放在手指所在的位置
        //oListTwo.style.display="block";
        oListTwo.slideToggle(500);   
      };      
},false)


<<<<<<< HEAD
var oGoods = document.querySelector("#goods");
var goods_id = getQueryString('goods_id');
var oAddToCart = document.querySelector("#add-to-cart");
var oBuy = document.querySelector(".buy");
myajax.get("http://h6.duchengjiu.top/shop/api_goods.php", { goods_id }, function(error, responseText) {
    var json = JSON.parse(responseText);
    console.log(json);
    var obj = json.data[0];
=======
var oGoods=document.querySelector("#goods");
var goods_id=getQueryString('goods_id');
var oAddToCart=document.querySelector("#add-to-cart");
var oAddTo=document.querySelector(".addTo");
myajax.get("http://h6.duchengjiu.top/shop/api_goods.php",{goods_id},function(error,responseText){
 	var json=JSON.parse(responseText);
 	console.log(json);
 	var obj=json.data[0];
>>>>>>> 9d4c54a2412d29994de22a5613e1c2e759b34a3d
    console.log(obj);
    oGoods.innerHTML = `<div class="good product">                     
 	      <img src="${obj.goods_thumb}" class="goods-img"/>	    
          <div class="name">${obj.goods_name}</div>
          <div class="price">单价:￥${obj.price}<span class="commend">掌柜推荐</span></div>
          <div class="des">${obj.goods_desc}</div>
 	                </div>`;
});

oAddTo.addEventListener("touchstart",function(event){
	if (event.targetTouches.length == 1) {
　　　　  event.preventDefault();
        var touch = event.targetTouches[0];
        //window.location.href="cart.html";
<<<<<<< HEAD
        if(!localStorage.token){
        	location.href = "register-login.html";
        }else{
        	var target = event.target || event.srcElement;
        	if (target.id === 'add-to-cart') {
            	console.log('添加到购物车');
            	myajax.post('http://h6.duchengjiu.top/shop/api_cart.php?token=' + localStorage.token, { goods_id, number:1},
                function(err, responseText) {
                    var json = JSON.parse(responseText);
                    console.log(json);
                    if (json.code === 0) {
                        toast('添加到购物车成功');
                    }
                    if (json.code === 2) {
                        toast('已添加到购物车');
                    }
                })
        	}
        }
    };
}, false)
oBuy.addEventListener("touchstart", function(event) {
    if (event.targetTouches.length == 1) {　　　　
        event.preventDefault();
        var touch = event.targetTouches[0];
        //window.location.href="cart.html";
        if(!localStorage.token){
        	location.href = "register-login.html";
        }else{
        	var target = event.target || event.srcElement;
        	if (target.id === 'buy') {
            	console.log('添加到购物车');
            	myajax.post('http://h6.duchengjiu.top/shop/api_cart.php?token=' + localStorage.token, { goods_id, number:1},
                function(err, responseText) {
//                  var json = JSON.parse(responseText);
//                  console.log(json);
                })
            	location.href = "cart.html";
            	
        	}
        }
    };
}, false)
=======
        var target = event.target || event.srcElement;
        if(target.id === 'add-to-cart') {
        console.log('添加到购物车');
        myajax.post('http://h6.duchengjiu.top/shop/api_cart.php?token='+localStorage.token,
        {goods_id, number:1},
        function(err, responseText) {
          var json = JSON.parse(responseText);
          console.log(json);
          if (json.code === 0) {
       	alert('添加成功');
          
          }
        })
      }       
    };      
},false)

var oBuy=document.querySelector(".buy");
var oNoBuy=$(".no-buy");
oBuy.addEventListener("touchstart",function(event){
	if (event.targetTouches.length == 1) {
　　　　  event.preventDefault();
        var touch = event.targetTouches[0];
        //window.location.href="cart.html";
        var target = event.target || event.srcElement;
        oNoBuy.slideToggle(500);
      };      
},false)
>>>>>>> 9d4c54a2412d29994de22a5613e1c2e759b34a3d
