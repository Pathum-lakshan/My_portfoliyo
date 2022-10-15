$('#order_btn_dashboard').click(function () {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("product").style.display = "none";
    document.getElementById("customer").style.display = "none";
    document.getElementById("order").style.display = "block";
});
$('#dashboard_btn_dashboard').click(function () {
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("product").style.display = "none";
    document.getElementById("customer").style.display = "none";
    document.getElementById("order").style.display = "none";
});
$('#product_btn_dashboard').click(function () {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("product").style.display = "block";
    document.getElementById("customer").style.display = "none";
    document.getElementById("order").style.display = "none";
});
$('#customer_btn_dashboard').click(function () {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("product").style.display = "none";
    document.getElementById("customer").style.display = "block";
    document.getElementById("order").style.display = "none";
});