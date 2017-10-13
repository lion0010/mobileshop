var oPrev=document.querySelector(".prev");
oPrev.addEventListener("touchstart",function(event){
	if (event.targetTouches.length == 1) {
　　　　 event.preventDefault();// 阻止浏览器默认事件，重要 
        var touch = event.targetTouches[0];
        // 把元素放在手指所在的位置
       alert("nihao");
	window.history.back();
       };
      
},false)

var oShopping=document.querySelector(".shopping");
oShopping.addEventListener("touchstart",function(event){
	if (event.targetTouches.length == 1) {
　　　　 event.preventDefault();// 阻止浏览器默认事件，重要 
        var touch = event.targetTouches[0];
        // 把元素放在手指所在的位置
      window.location.href="cart.html";
      };      
},false)

var oMenu=document.querySelector(".no4");
//var oMenu=$(".no4");
//var oListTwo=document.querySelector(".list-two");
var oListTwo=$(".list-two");
oMenu.addEventListener("touchstart",function(event){
	if (event.targetTouches.length == 1) {
　　　　 event.preventDefault();// 阻止浏览器默认事件，重要 
        var touch = event.targetTouches[0];
        // 把元素放在手指所在的位置
        //oListTwo.style.display="block";
        oListTwo.slideToggle(500);   
      };      
},false)


var oGoods=document.querySelector("#goods");
var goods_id=getQueryString('goods_id');
var oAddToCart=document.querySelector("#add-to-cart");
myajax.get("http://h6.duchengjiu.top/shop/api_goods.php",{goods_id:253286},function(error,responseText){
 	var json=JSON.parse(responseText);
 	console.log(json);
 	var obj=json.data[0];
    console.log(obj);
oGoods.innerHTML=`<div class="good product">                     
 	      <img src="${obj.goods_thumb}" class="goods-img"/>	    
          <div class="name">${obj.goods_name}</div>
          <div class="price">单价:￥${obj.price}<span class="commend">掌柜推荐</span></div>
          <div class="des">${obj.goods_desc}</div>
 	                </div>`;
});


oAddToCart.addEventListener("touchstart",function(event){
	if (event.targetTouches.length == 1) {
　　　　  event.preventDefault();
        var touch = event.targetTouches[0];
        //window.location.href="cart.html";
        var target = event.target || event.srcElement;
        if(target.id === 'add-to-cart') {
        console.log('添加到购物车');
        myajax.post('http://h6.duchengjiu.top/shop/api_cart.php?token='+localStorage.token,
        {goods_id:253286, number:1},
        function(err, responseText) {
          var json = JSON.parse(responseText);
          console.log(json);
          if (json.code === 0) {
            alert('添加到购物车成功');
          }
        })
      }
        
      };      
},false)





































































