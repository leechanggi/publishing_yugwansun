//row1-mainslide(bxSlider)
function mainSlideFnc() {
    $('.bg-slide').bxSlider({
        mode: 'horizontal',
        speed: 700,
        pager: true,
        moveSlides: 1,
        responsive: true,
        auto: true,
        useCSS: true,
        shrinkItems: true,
        controls: true,
    });
}
//row3-calendar(datepicker)
var calendar;

function calendarFnc() {
    calendar = $("#row3-calendar").datepicker({
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        showOtherMonths: true,
        dateFormat: "yy" + "년 " + "mm" + "월 " + "dd" + "일",
        onSelect: function (seletday, inst) {
            $('.row3-today').html(seletday);
        },
    });
    var Day = (calendar.datepicker("getDate"));
    $('.row3-today').html(Day.getFullYear() + '년 ' + (Day.getMonth() + 1) + '월 ' + Day.getDate() + '일');
    Day.getDate();
}

//row4-subslide(bxSlider)
function subSlideFnc() {
    $('.row4-subslide').bxSlider({
        slideWidth: 320,
        moveSlides: 1,
        minSlides: 1,
        maxSlides: 3,
        auto: true,
        useCSS: true,
        shrinkItems: true,
        slideMargin: 30,
        pager: false,
        controls: true
    });
}
$(function () {
    mainSlideFnc();
    calendarFnc();
    subSlideFnc();
});