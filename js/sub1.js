function openSmlMenu() {
    $('.btn-smlMenu-sec2').click(function (e) {
        if ($('.row1-smlMenu-sec2').hasClass('on') == true) {
            $('.row1-smlMenu-sec2').removeClass('on');
        } else {
            $('.row1-smlMenu-sec2').addClass('on');
        }
        (e).preventDefault();
    });
    $('.btn-smlMenu-sec3').click(function (e) {
        if ($('.row1-smlMenu-sec3').hasClass('on') == true) {
            $('.row1-smlMenu-sec3').removeClass('on');
        } else {
            $('.row1-smlMenu-sec3').addClass('on');
        }
        (e).preventDefault();
    });
}
$(function () {
    openSmlMenu();
})