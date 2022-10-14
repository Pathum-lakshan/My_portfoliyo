(function ($) {
    'use strict';
    $(function () {

        //Revenue Chart
        if ($("#revenue-chart").length) {
            var revenueChartCanvas = $("#revenue-chart").get(0).getContext("2d");

            var revenueChart = new Chart(revenueChartCanvas, {
                type: 'bar',
                data: {
                    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    datasets: [{
                        data: [105, 195, 290, 320, 400, 100, 290],
                        backgroundColor: ["rgba(255, 86, 48, 0.3)", "rgba(255, 86, 48, 0.3)", "rgba(255, 86, 48, 0.3)", "rgb(255, 86, 48)", "rgba(255, 86, 48, 0.3)", "rgba(255, 86, 48, 0.3)", "rgba(255, 86, 48, 0.3)"],
                    }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            gridLines: {
                                drawBorder: false,
                                zeroLineColor: "rgba(0, 0, 0, 0.09)",
                                color: "rgba(0, 0, 0, 0.09)"
                            },
                            ticks: {
                                fontColor: '#bababa',
                                min: 0,
                                stepSize: 100,
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: '#bababa',
                                beginAtZero: true
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false
                            },
                            barPercentage: 0.4
                        }]
                    },
                    legend: {
                        display: false
                    }
                }
            });
        }

        //Sales Chart
        if ($("#chart-sales").length) {
            var salesChartCanvas = $("#chart-sales").get(0).getContext("2d");
            var gradient1 = salesChartCanvas.createLinearGradient(0, 0, 0, 230);
            gradient1.addColorStop(0, '#55d1e8');
            gradient1.addColorStop(1, 'rgba(255, 255, 255, 0)');

            var gradient2 = salesChartCanvas.createLinearGradient(0, 0, 0, 160);
            gradient2.addColorStop(0, '#1bbd88');
            gradient2.addColorStop(1, 'rgba(255, 255, 255, 0)');

            var salesChart = new Chart(salesChartCanvas, {
                type: 'line',
                data: {
                    labels: ["2am", "4am", "6am", "8am", "10am", "12am"],
                    datasets: [{
                        data: [80, 115, 115, 150, 130, 160],
                        backgroundColor: gradient1,
                        borderColor: [
                            '#08bdde'
                        ],
                        borderWidth: 2,
                        pointBorderColor: "#08bdde",
                        pointBorderWidth: 4,
                        pointRadius: 1,
                        fill: 'origin',
                    },
                        {
                            data: [250, 310, 270, 330, 270, 380],
                            backgroundColor: gradient2,
                            borderColor: [
                                '#00b67a'
                            ],
                            borderWidth: 2,
                            pointBorderColor: "#00b67a",
                            pointBorderWidth: 4,
                            pointRadius: 1,
                            fill: 'origin',
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        filler: {
                            propagate: false
                        }
                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontColor: "#bababa"
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                fontColor: "#bababa",
                                stepSize: 100,
                                min: 0,
                                max: 500
                            },
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(101, 103, 119, 0.21)",
                                zeroLineColor: "rgba(101, 103, 119, 0.21)"
                            }
                        }]
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: true
                    },
                    elements: {
                        line: {
                            tension: 0
                        }
                    },
                    legendCallback: function (chart) {
                        var text = [];
                        text.push('<div>');
                        text.push('<div class="d-flex align-items-center">');
                        text.push('<span class="bullet-rounded" style="border-color: ' + chart.data.datasets[1].borderColor[0] + ' "></span>');
                        text.push('<p class="tx-12 text-muted mb-0 ml-2">Gross volume</p>');
                        text.push('</div>');
                        text.push('<div class="d-flex align-items-center">');
                        text.push('<span class="bullet-rounded" style="border-color: ' + chart.data.datasets[0].borderColor[0] + ' "></span>');
                        text.push('<p class="tx-12 text-muted mb-0 ml-2">New Cusromers</p>');
                        text.push('</div>');
                        text.push('</div>');
                        return text.join('');
                    },
                }
            });
            document.getElementById('sales-legend').innerHTML = salesChart.generateLegend();
        }

        //Impressions Chart
        if ($("#impressions-chart").length) {
            var impressionsChartCanvas = $("#impressions-chart").get(0).getContext("2d");
            var impressionChart = new Chart(impressionsChartCanvas, {
                type: 'line',
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept",],
                    datasets: [{
                        data: [47, 33, 33, 24, 40, 30, 26, 30, 39],
                        fill: false,
                        borderColor: [
                            '#ffffff'
                        ],
                        borderWidth: 1,
                        pointBorderColor: "#ffffff",
                        pointBorderWidth: 5,
                        pointRadius: [1, 0, 0, 0, 0, 0, 0, 0, 1],
                        label: "online"
                    }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    layout: {
                        padding: {
                            left: 0,
                            right: 10,
                            top: 0,
                            bottom: 0
                        }
                    },
                    plugins: {
                        filler: {
                            propagate: false
                        }
                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                display: false,
                                fontColor: "#6c7293"
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false,
                                color: "rgba(101, 103, 119, 0.21)"
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                display: false,
                                fontColor: "#6c7293",
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false,
                                color: "rgba(101, 103, 119, 0.21)"
                            }
                        }]
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: true
                    },
                    elements: {
                        line: {
                            tension: 0
                        }
                    }
                }
            });
        }

        //Traffic Chart
        if ($("#traffic-chart").length) {
            var trafficChartCanvas = $("#traffic-chart").get(0).getContext("2d");
            var trafficChart = new Chart(trafficChartCanvas, {
                type: 'line',
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept",],
                    datasets: [{
                        data: [47, 33, 33, 24, 40, 30, 26, 30, 39],
                        fill: false,
                        borderColor: [
                            '#ffffff'
                        ],
                        borderWidth: 1,
                        pointBorderColor: "#ffffff",
                        pointBorderWidth: 5,
                        pointRadius: [1, 0, 0, 0, 0, 0, 0, 0, 1],
                        label: "online"
                    }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    layout: {
                        padding: {
                            left: 0,
                            right: 10,
                            top: 0,
                            bottom: 0
                        }
                    },
                    plugins: {
                        filler: {
                            propagate: false
                        }
                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                display: false,
                                fontColor: "#6c7293"
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false,
                                color: "rgba(101, 103, 119, 0.21)"
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                display: false,
                                fontColor: "#6c7293",
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false,
                                color: "rgba(101, 103, 119, 0.21)"
                            }
                        }]
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: true
                    },
                    elements: {
                        line: {
                            tension: 0
                        }
                    }
                }
            });
        }

        if ($('#revenue-map').length) {
            $('#revenue-map').vectorMap({
                map: 'world_mill_en',
                backgroundColor: 'transparent',
                zoomButtons: false,
                panOnDrag: true,
                focusOn: {
                    x: 0.5,
                    y: 0.5,
                    scale: 1,
                    animate: true
                },
                regionStyle: {
                    initial: {
                        fill: '#00bbdd'
                    },
                    hover: {
                        fill: "#006c80"
                    }
                }
            });
        }

    });
})(jQuery);

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
const cart = [];
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
            $("#customer_contact_contact:text").val(String(customer.contact));
        }
    }
});
$('#product_selector').on('change',function (){
    for (var product of products) {
        if ($('#product_selector').val()===product.id){
            $('#product_price_order:text').val(String(product.price));

        }
    }
});

$("#add_card_btn").click(function (event) {
    customerSave($('#next_customer_id').text(), $('#customer_name').val(), $('#customer_address').val(), $('#customer_contact').val(), $('#customer_id_number').val())
    clearCustomer();
});