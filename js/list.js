(function() {
  var oCat = document.querySelector('#cat');
  myajax.get('http://h6.duchengjiu.top/shop/api_cat.php', {},
    function(error, responseText) {
      var json = JSON.parse(responseText);
      var data = json.data;
      for(var i = 0; i < data.length; i++) {
        var obj = data[i];

        oCat.innerHTML += `<li><a href="list.html?cat_id=${obj.cat_id}">${obj.cat_name}</a></li>`
      }
    });
  var topNav = document.querySelector('.nav-list');
  var topDis = getAllTop(topNav);
  function getAllTop(obj) {
    var allTop = obj.offsetTop;
    while(obj = obj.offsetParent) {
      allTop += obj.offsetTop;
    }
    return allTop;
  }
})();