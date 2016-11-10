$(document).ready(function () {
  var color;
  // $('.box').on('click', function () {
  //   $(this).toggleClass(color);
  // })
  $('.box').on('mousedown', function () {
    $('.box').on('mouseover', function () {
      $(this).toggleClass(color);
    })
    $('.box').on('mouseup', function () {
      $('.box').off('mouseover');
    })
  })
  $('#reset').on('click', function () {
    $('.box').removeClass();
  })
  $('#red').on('click', function () {
    color = 'red';
  })
  $('#blue').on('click', function () {
    color = 'blue';
  })
  $('#green').on('click', function () {
    color = 'green';
  })
  $('#yellow').on('click', function () {
    color = 'yellow';
  })
  $('#white').on('click', function () {
    color = 'white';
  })
})
