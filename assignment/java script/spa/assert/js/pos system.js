$('#submit_btn').click(function () {
  let username = $('#username').val();
  let password = $('#password').val();
  if (username==="pathum" && password==="1234"){
    $('#lord_for_dashboard').load('dashboard.html');
  }else {
    $('#exampleModalCenter').modal('show');
  }
})
$('#alert_close_btn').click(function () {
  $('#exampleModalCenter').modal('hide');
})


