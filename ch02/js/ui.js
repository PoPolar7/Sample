$(document).ready(function () {
  $("#container").addClass("start");
  $("nav li").click(function () {
    $("#container").css("max-width", "100%");
    var id = $(this).attr("data-rol");
    $("nav li").removeClass("on");
    $(this).addClass("on");

    $(".content").removeClass("prev this next");
    // 클릭시 가지고 있던 클래스를 모두 지운다

    $("#" + id)
      .addClass("this")
      .prevAll()
      .addClass("prev");
    // 클릭한 메뉴와 매칭되는 id에 this 클래스를 지정하고 그앞의 모든 <section> 태그에 prev 클래스를 지정한다

    $("#" + id)
      .nextAll()
      .addClass("next");
    // 클릭한 메뉴와 매칭되는 id의 뒤에 오는 <section> 태그에 next 클래스를 지정한다
  });
  $(".logo_box").click(function () {
    $("nav li").removeClass("on");
    $(".content").removeClass("prev this next");
    $("#container").css("max-width", "1200px");
  });

  $(".roll_left").click(function () {
    $(".book_roll li").eq(0).insertAfter(".book_roll li:last-child");
  });
  $(".roll_right").click(function () {
    $(".book_roll li").eq(-1).insertBefore(".book_roll li:first-child");
  });
});
