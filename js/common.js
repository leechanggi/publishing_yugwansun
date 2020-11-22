$(function () {
    // gnb //
    $(function gnbFnc() {
        var $firstMenu = $('.gnb > ul > li'),
            $gnbWrap = $('.gnb-wrap')
        $firstMenu.mouseover(function () {
                $gnbWrap.stop().animate({
                    height: '400px'
                }, 300);
            })
            .mouseleave(function () {
                $gnbWrap.stop().animate({
                    height: '100px'
                }, 300);
            })
    })
    //row3-calendar(datepicker)
    $(function calendarFnc() {
        $("#row3-calendar").datepicker({
            dayNames : ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
            monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            currentText: 'Today',
            showOtherMonths: true
        });
    });
    $(function subslideFnc(){
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
        controls : true
        });
    });
    // 호출
    $(function () {
        gnbFnc();
        calendarFnc();
        subslideFnc();
    })
});