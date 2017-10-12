var oSearch = document.querySelector('#search');
oSearch.onkeyup = function(event) {
	if(event.keyCode === 13) {
		location.href = 'html/search.html?search_text=' + this.value;
	}
	localStorage.searchTxt = this.value;
}
var oSearchText = document.querySelector(".search-text-img");
oSearchText.onclick = function(event) {
	location.href = 'html/search.html?search_text=' + localStorage.searchTxt;
}