var oAdd = document.querySelector('.add');
var oConsignee = document.querySelector('input[name="consignee"]');
console.log(oAdd);
oAdd.addEventListener("touchstart",function(event) {
    if (oConsignee.value === "") {
        confirm("请输入详细的信息");
        return;
    }
    var postobj = serializeForm(document.querySelector('form'));
    myajax.post("http://h6.duchengjiu.top/shop/api_useraddress.php?status=add&token="+localStorage.token, postobj, function(err, responseText) {
        var json = JSON.parse(responseText);
        console.log(json);
        if (json.code === 0) {
            location.href="../html/address.html";
            // showAddress();
        }
    });
})