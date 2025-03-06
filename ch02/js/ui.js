$(document).ready(function () {
  // 페이지 로드 시, #container에 'start' 클래스를 추가하여 초기 상태를 설정
  $("#container").addClass("start");

  // 네비게이션 메뉴 항목 클릭 이벤트
  $("nav li").click(function () {
    // #container의 최대 너비를 100%로 변경하여 전체 화면을 사용
    $("#container").css("max-width", "100%");

    // 클릭한 메뉴 항목의 data-rol 속성 값을 가져와 해당 요소의 id로 사용
    var id = $(this).attr("data-rol");

    // 모든 네비게이션 메뉴 항목에서 'on' 클래스를 제거하고, 클릭한 항목에만 'on' 클래스 추가
    $("nav li").removeClass("on");
    $(this).addClass("on");

    // 모든 콘텐츠 섹션에서 'prev', 'this', 'next' 클래스를 제거하여 초기화
    $(".content").removeClass("prev this next");
    // 클릭 시 가지고 있던 클래스를 모두 지운다

    // 클릭한 메뉴와 매칭되는 id의 요소에 'this' 클래스를 추가하고,
    // 그 앞에 위치한 모든 요소에는 'prev' 클래스를 추가
    $("#" + id)
      .addClass("this")
      .prevAll()
      .addClass("prev");
    // 클릭한 메뉴와 매칭되는 id에 this 클래스를 지정하고 그앞의 모든 <section> 태그에 prev 클래스를 지정

    // 클릭한 메뉴와 매칭되는 id의 요소 뒤에 위치한 모든 요소에 'next' 클래스를 추가
    $("#" + id)
      .nextAll()
      .addClass("next");
    // 클릭한 메뉴와 매칭되는 id의 뒤에 오는 <section> 태그에 next 클래스를 지정
  });

  // 로고 박스 클릭 이벤트 - 로고 클릭 시 메뉴 및 섹션의 클래스를 초기 상태로 되돌림
  $(".logo_box").click(function () {
    // 모든 네비게이션 메뉴 항목의 'on' 클래스를 제거
    $("nav li").removeClass("on");
    // 모든 콘텐츠 섹션에서 'prev', 'this', 'next' 클래스를 제거하여 원래 상태로 복원
    $(".content").removeClass("prev this next");
    // #container의 최대 너비를 1200px로 재설정
    $("#container").css("max-width", "1200px");
  });

  // 좌측 롤 버튼 클릭 이벤트 - 책 롤에서 첫 번째 항목을 마지막으로 이동시켜 왼쪽으로 롤링 효과를 부여
  $(".roll_left").click(function () {
    $(".book_roll li").eq(0).insertAfter(".book_roll li:last-child");
  });

  // 우측 롤 버튼 클릭 이벤트 - 책 롤에서 마지막 항목을 첫 번째로 이동시켜 오른쪽으로 롤링 효과를 부여
  $(".roll_right").click(function () {
    $(".book_roll li").eq(-1).insertBefore(".book_roll li:first-child");
  });

  // 책 롤 항목 클릭 이벤트 - 해당 항목의 data-url에 저장된 주소로 Ajax 요청을 보내 콘텐츠를 동적으로 로드
  $(".book_roll li").click(function () {
    var _this = $(this);
    // 클릭한 항목의 data-url 속성 값 읽어오기
    var liurl = _this.data("url");
    // .notebook 요소의 기존 내용을 초기화 (빈 상태로 만듦)
    $(".notebook").html();
    // Ajax GET 요청을 보내 URL의 HTML 데이터를 받아 .notebook에 삽입
    $.ajax({
      type: "GET",
      url: liurl,
      dataType: "html",
      success: function (data) {
        // Ajax 요청 성공 시, 받아온 HTML 데이터를 .notebook 요소에 로드
        $(".notebook").html(data);
      },
    });
  });

  // 아코디언 박스 목록 항목 클릭 이벤트 - 클릭한 항목만 활성화하고 나머지 항목은 비활성화
  $(".accordio_box ol li").click(function () {
    // 클릭한 항목의 형제 요소들에서 'on' 클래스를 제거
    $(this).siblings().removeClass("on");
    // 클릭한 항목에 'on' 클래스를 추가하여 활성화 표시
    $(this).addClass("on");
  });

  // 닫기 버튼 클릭 이벤트 - thankyou_message 요소를 숨김 처리하여 메시지를 닫음
  $(".close").click(function () {
    $(".thankyou_message").css("display", "none");
  });
});
