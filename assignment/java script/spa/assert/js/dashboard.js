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
const customers = [];
const products = [];
const orders = [];
let carts = [];
$("#add_product_btn").click(function (event) {
    productSave($('#next_product_id').text(), $('#product_name').val(), $('#product_category').val(), $('#product_qty').val(), $('#product_price').val());
    clearProduct();
});
function clearProduct() {
    $('#product_name').val('');
    $('#product_category').val('');
    $('#product_qty').val('');
    $('#product_price').val('');
    let last = products[products.length - 1].id;
    $('#next_product_id').text(last.substring(0, last.length - 1) + (parseInt(last.charAt(last.length - 1)) + 1));
}
$("#add_customer_btn").click(function (event) {
    customerSave($('#next_customer_id').text(), $('#customer_name').val(), $('#customer_address').val(), $('#customer_contact').val(), $('#customer_id_number').val())
    clearCustomer();
});
function clearDetails() {
    $('#product_selector').val('select product');
    $('#customers_selector').val('select customer');
    $('#order_qry').val('');
    $('#available_quantity').val('');
    $('#product_price_order').val('');
    $('#customer_name_order').val('');
}
function loadOrderTable() {
    $("#Order_table tr").remove();

    for (var order of orders) {
        var row = "<tr><td>" + order.customer.name + "</td><td>" + order.oid + "</td><td>" + order.totalQty + "</td><td>" + order.totalAmount + "</td></tr>";
        $('#Order_table').append(row);
    }
}
$("#place_order_btn").click(function (event) {

    let payment="none";
    if ($('#card_pay:checked').val()==="card"){
        payment="card";
    }
    else if ($('#cash_pay:checked').val()==="cash"){
        payment="cash";
    }
    else if ($('#cheque_pay:checked').val()==="cheque"){
        payment="cheque";
    }

    var customer;

    for (var y of customers) {
        if ($('#customers_selector').val()===y.id){
            customer=y;
        }
    }
        let totalAmount =0.00;
    let totalQty=0;
    for (var cart of carts) {
        totalAmount=parseFloat(totalAmount)+( parseFloat(cart.product.price)*parseFloat(cart.qty));
        totalQty=parseInt(totalQty)+parseInt(cart.qty);
    }

        let oid = $('#order_id').text();
    const order = {
        oid:oid,
        carts: carts,
        customer: customer,
        totalAmount:totalAmount,
        payment:payment,
        totalQty:totalQty

    };
    orders.push(order);
    let last = orders[orders.length - 1].oid;
    $('#order_id').text(last.substring(0, last.length - 1) + (parseInt(last.charAt(last.length - 1)) + 1));
    carts=[];
    loadDataToCartTable();
    clearDetails();
    loadOrderTable();
    $('#toast_success_body').text("Successfully Place Order");
    new bootstrap.Toast($('#successToast')).show();
});
function clearCustomer() {
    $('#customer_name').val('');
    $('#customer_address').val('');
    $('#customer_contact').val('');
    $('#customer_id_number').val('');
    let last = customers[customers.length - 1].id;
    $('#next_customer_id').text(last.substring(0, last.length - 1) + (parseInt(last.charAt(last.length - 1)) + 1));
}
function productSave(id, name, category, qty, price) {
    var product = {
        id: id,
        name: name,
        category: category,
        qty: qty,
        price: price
    }
    products.push(product);
    addProductTable();
    loadAllProduct();
}
function customerSave(id, name, address, contact, idNumber) {
    var customer = {
        id: id,
        name: name,
        address: address,
        contact: contact,
        idNumber: idNumber
    }
    customers.push(customer);


    addCustomerTable();
    loadAllCustomers();
}
function addCustomerTable() {
    $("#customer_table tr").remove();
    for (var customer of customers) {
        var row = "<tr><td>" + customer.id + "</td><td>" + customer.name + "</td><td>" + customer.address + "</td><td>" + customer.contact + "</td><td>" + customer.idNumber + "</td></tr>";
        $('#customer_table').append(row);
    }
}
function addProductTable() {
    $("#product_table tr").remove();
    for (var product of products) {
        var row = "<tr><td>" + product.id + "</td><td>" + product.name + "</td><td>" + product.category + "</td><td>" + product.qty + "</td><td>" + product.price + "</td></tr>";
        $('#product_table').append(row);
    }
}
function loadAllCustomers() {
    $('#customers_selector').empty();
    var selected = " <option selected>" + "select customer" + "</option>";
    $('#customers_selector').append(selected);
    for (var customer of customers) {
        var row = " <option>" + customer.id  + "</option>";
        $('#customers_selector').append(row);
    }
}
function loadAllProduct() {
    $('#product_selector').empty();
    var selected = " <option selected>" + "select product" + "</option>";
    $('#product_selector').append(selected);
    for (var product of products) {
        var row = " <option>" + product.id + "</option>";
        $('#product_selector').append(row);
    }
}
$('#customers_selector').on('change',function (){

    for (var customer of customers) {
        if ($('#customers_selector').val()===customer.id){
            $('#customer_name_order:text').val(String(customer.name));
        }
    }
});
$('#product_selector').on('change',function (){
    for (var product of products) {
        if ($('#product_selector').val()===product.id){
            $('#product_price_order:text').val(String(product.price));
            $('#available_quantity:text').val(String(product.qty));

        }
    }
});
function loadDataToCartTable() {
    $("#cart_table tr").remove();

    var totalAmount=0.00;

    for (var cart of carts) {
        var row = "<tr><td>" + cart.product.id + "</td><td>" + cart.product.price + "</td><td>" + cart.qty + "</td><td>" + parseFloat(cart.product.price)*parseFloat(cart.qty) + "</td></tr>";
        $('#cart_table').append(row);
        totalAmount=parseFloat(totalAmount)+( parseFloat(cart.product.price)*parseFloat(cart.qty));
    }
    $('#total_amount').text("Total Amount Rs. "+totalAmount);

}
function productQtyMinus(id,qty){
    for (let i = 0; i < products.length; i++) {
        if (products[i].id===id){
            products[i].qty=parseInt(products[i].qty)-parseInt(qty);
        }
    }
}
function addToCart(product, customer, qty) {
    var status = true;
if (carts.length>0){
    for (let i = 0; i < carts.length; i++) {
        if (carts[i].product.id===product.id){
            carts[i].qty=parseInt(carts[i].qty)+parseInt(qty);
            status = false;
            break;
        }
    }
    if (status){
            const cart = {
                product: product,
                customer: customer,
                qty: qty
            };
            carts.push(cart);

    }
    }else {
    const cart = {
        product: product,
        customer: customer,
        qty: qty
    };
    carts.push(cart);
}
    productQtyMinus(product.id,qty);
    loadDataToCartTable();
    $('#toast_success_body').text("Successfully add to cart");
    new bootstrap.Toast($('#successToast')).show();
}
function clearAddCartDetails() {
    $('#product_selector').val('select product');
    $('#order_qry').val('');
    $('#available_quantity').val('');
    $('#product_price_order').val('');
}
$("#add_card_btn").click(function () {
    if ($('#customers_selector').val()=="select customer"){
        $('#toast_warning_body').text("please select customer");
        new bootstrap.Toast($('#dangerToast')).show();
    }
    else   if ($('#product_selector').val()=="select product"){
        $('#toast_warning_body').text("please select product");
        new bootstrap.Toast($('#dangerToast')).show();
    }
    else {
        var product;
        var customer;
        for (var x of products) {
            if ($('#product_selector').val()===x.id){
                product=x;
            }
        }
        for (var y of customers) {
            if ($('#customers_selector').val()===y.id){
                customer=y;
            }
        }
        let number = parseInt( $('#order_qry').val());
        if (number>0){
            if (parseInt(product.qty)>0){
                if (parseInt(product.qty)>=number){
                    addToCart(product,customer,number);
                }else {
                    $('#toast_warning_body').text("selected item haven't entered quantity");
                    new bootstrap.Toast($('#dangerToast')).show();
                }
clearAddCartDetails();
            }else {
                $('#toast_warning_body').text("selected item haven't quantity");
                new bootstrap.Toast($('#dangerToast')).show();
            }

        }else {
            $('#toast_warning_body').text("please enter qty");
            new bootstrap.Toast($('#dangerToast')).show();
        }
    }
});