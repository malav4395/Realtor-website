$(document).ready(function () {
  var values = cal_width_height();
  resize_stat_iframe(values.width, values.height);
});

$(window).resize(function () {
  var values = cal_width_height();
  resize_stat_iframe(values.width, values.height);
});


function resize_stat_iframe(w, h) {  
  $("#sale-price").width(w).height(h);
  $("#sale-price").attr("src", "https://itso.stats.showingtime.com/infoserv/s-v1/rrpI-sEa?w=" + w + "&h=" + h);
  $("#home-for-sale").width(w).height(h);
  $("#home-for-sale").attr("src", "https://itso.stats.showingtime.com/infoserv/s-v1/raMi-rOq?w=" + w + "&h=" + h);
  $("#sold-stat").width(w).height(h);
  $("#sold-stat").attr("src", "https://itso.stats.showingtime.com/infoserv/s-v1/raiv-hp3?w=" + w + "&h=" + h);
  $("#days-on-market").width(w).height(h);
  $("#days-on-market").attr("src", "https://itso.stats.showingtime.com/infoserv/s-v1/raJZ-lYT?w=" + w + "&h=" + h);
  $("#kwar-stat").width(w).height(h - 50);
}

function cal_width_height() {
  var w = $('#blog-p').width();
  var h = $(window).height();
  return {
    width: ~~w-30,
    height: ~~h-180,
  }
}


