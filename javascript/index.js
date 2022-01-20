$(document).ready(function () {
  var values = cal_width_height();
  console.log(values.width);
  console.log(values.height);
  resize_stat_iframe(values.width, values.height);
});

function resize_stat_iframe(w, h) {
  $("#stat-iframe").width(w).height(h);
  $("#stat-iframe").attr("src", "https://itso.stats.showingtime.com/infoserv/s-v1/rrpI-sEa?w=" + w + "&h=" + h);
}

function cal_width_height() {
  var w = $('#blog-p').width();
  var h = $(window).height();
  return {
    width: ~~w-30,
    height: ~~h-180,
  }
}


