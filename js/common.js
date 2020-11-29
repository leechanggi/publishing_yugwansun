// gnb //
function gnbFnc() {
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
}

//all-menu-btn
function openmenu() {
    $('#btnAllmenu').click(function () {
        var menu = document.getElementById("allmenuInfo");
        menu.style.top = "0";
    })
}

function closemenu() {
    $('#btnAllmenuClose').click(function () {
        var menu = document.getElementById("allmenuInfo");
        menu.style.top = "-100vh";
    })
}

//btnInfo
function btnSns() {
    $('#btnSns').click(function () {
        if ($("#subSns").css("display") == "none") {
            $("#subSns").show();
        } else {
            $("#subSns").hide();
        }
    })
}

function btnLang() {
    $('#btnLang').click(function () {
        if ($("#subLang").css("display") == "none") {
            $("#subLang").show();
        } else {
            $("#subLang").hide();
        }
    })
}

//stickyGnb
function stickyGnbFnc() {
    $(function () {
        var wind = $(window),
            header = $('.row1-smlMenu-wrap'),
            headerOffsettop = header.offset().top;
        wind.scroll(function () {
            if ($(this).scrollTop() >= headerOffsettop) {
                header.addClass('sticky');
            } else {
                header.removeClass('sticky');
            }
        });
    });
}

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

//호출문
$(function () {
    gnbFnc();
    openmenu();
    closemenu();
    btnSns();
    btnLang();
    stickyGnbFnc();
});