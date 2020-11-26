function openSmlMenuFnc() {
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
    openSmlMenuFnc();
})
//numbering
$(document).ready(function () {
    $('.next').click(function () {
        $('.pagerList').find('.pageNumber.active').next().addClass('active');
        $('.pagerList').find('.pageNumber.active').prev().removeClass('active');
    })
    $('.last').click(function () {
        $('.pagerList').find('.pageNumber.active').removeClass('active');
        $('.pagerList').find('.pageNumber').last().addClass('active');
    })
    $('.prev').click(function () {
        $('.pagerList').find('.pageNumber.active').prev().addClass('active');
        $('.pagerList').find('.pageNumber.active').next().removeClass('active');
    })
    $('.first').click(function () {
        $('.pagerList').find('.pageNumber.active').removeClass('active');
        $('.pagerList').find('.pageNumber').first().addClass('active');
    })
    $('.pageNumber').click(function () {
        $('.pagerList').find('.pageNumber.active').removeClass('active');
        $(this).addClass('active');
    })
})