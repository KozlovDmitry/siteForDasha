$(function() {
  var i = ($(".en"), $(".ru"), $(".carrier")),
      a = {
        lang: !0
      };
  $(".langWrap").on("click", function() {
    a.lang ? (i.css({
      left: "62px",
      width: "86px"
    }), a.lang = !1, $(".english").animate({
      opacity: 0
    }, 250, function() {
      $(".english").attr("id", "invisible"), $(".russian").attr("id", ""), $(".russian").animate({
        opacity: "1"
      }, 250)
    })) : (i.css({
      left: "-11px",
      width: "75px"
    }), a.lang = !0, $(".russian").animate({
      opacity: 0
    }, 250, function() {
      $(".russian").attr("id", "invisible"), $(".english").attr("id", ""), $(".english").animate({
        opacity: "1"
      }, 250)
    }))
  })
});