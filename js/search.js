//搜索导航
var oSearch = document.querySelector('#search');
oSearch.onkeyup = function(event) {
	if(event.keyCode === 13) {
		location.href = 'search.html?search_text=' + this.value;
	}
	localStorage.searchTxt = this.value;
}
var oSearchText = document.querySelector(".search-text-img");
oSearchText.onclick = function(event) {
	location.href = 'search.html?search_text=' + localStorage.searchTxt;
}

var oGoods = document.querySelector("#hot-goods");

var search_text = getQueryString('search_text');

myajax.get('http://h6.duchengjiu.top/shop/api_goods.php', {
		search_text: search_text,
		pagesize: '20'
	},
	function(error, responseText) {
		var json = JSON.parse(responseText);
		console.log(json);
		var data = json.data;

		//如果没有搜索到商品，设置5秒后回首页

		if(data.length === 0) {
			oGoods.innerHTML = "<div id='oError' class='oerror'><span>未搜索到商品</span><p id='second' class='second'>5</p><span>秒后跳回首页</sapn></div>";
			var oSecond = document.querySelector("#second");
			var timer = setInterval(() => {
				var second = parseInt(oSecond.innerText);
				oSecond.innerText = --second;
			}, 1000);
			var timer = setTimeout(() => {
				clearInterval(timer);
				location.href="../index.html"
			}, 5000);
			return;
		}
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			oGoods.innerHTML += `
			<li>
						<a href="goods.html?goods_id=${obj.goods_id}">
							<div class="product">
								<div class="product-image">
									<img src="${obj.goods_thumb}" />
								</div>
								<div class="product-particulars">
									<p>${obj.goods_name}</p>
									<em>￥${obj.price}</em>
									<span class="original">￥1122</span>
									<div class="freight-address">
										<div class="freight">
											免运费
										</div>
									</div>
								</div>
							</div>
						</a>
			</li>`;
		}
	});

//回到顶部
var retunrntop = new BackToTop("#returnTop");
