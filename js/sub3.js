$(function () {
    $("#sdate").datepicker({
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        numberOfMonths: 1,
        dateFormat: 'yymmdd',
        yearSuffix: '년',
        closeText: "선택",
        currentText: "오늘날짜",
        showButtonPanel: true
    });
    $("#edate").datepicker({
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        numberOfMonths: 1,
        dateFormat: 'yymmdd',
        yearSuffix: '년',
        closeText: "선택",
        currentText: "오늘날짜",
        showButtonPanel: true
    });
});

function btnSub3pop() {
    $('.btn-write').click(function () {
        $('.write-pop-wrap').addClass('on');
    })
    $('.btn-pop-close').click(function () {
        $('.write-pop-wrap').removeClass('on');
    })
}

function popTxtareaFnc() {
    $('#pop-sec2-txtarea').keyup(function () {
        var content = $(this).val();
        $('#counter').html(content.length + '/1000');
    });
    $('#content').keyup();
}
$(function () {
    btnSub3pop();
    popTxtareaFnc();
    popTxtareaFnc();
});