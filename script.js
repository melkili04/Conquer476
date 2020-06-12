$(".scroll").on("click", function () {
  var el = $(this);
  var dest = el.attr("href");
  if (dest !== undefined && dest !== "") {
    $("html").animate(
      {
        scrollTop: $(dest).offset().top,
      },
      700
    );
  }
  return false;
});

$(function () {
  $("#scrollUp").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 390) {
    $(".btn__up").css("display", "block");
  } else {
    $(".btn__up").css("display", "none");
  }
});

$('.mobile-tab').hide();

$('#burg').on('click', function(){
  $('.mobile-tab').slideToggle();
  return false;
});

$('.scroll').on('click', function(){
  $('.mobile-tab').slideToggle();
  $('.mobile-tab').hide();
});