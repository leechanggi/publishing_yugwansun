// html - pc || tab_mob
$(window).on('resize', windeowResizeHandler);

function windeowResizeHandler() {
    var winWidth = $(this).innerWidth();
    if (winWidth >= 1200) {
        $('html').removeClass('tab_mob')
        $('html').addClass('pc')
    } else {
        $('html').removeClass('pc')
        $('html').addClass('tab_mob')
    }
}
$(window).trigger('resize');

var filter = "win16|win32|win64|mac|macintel";
if (navigator.platform) {
    if (filter.indexOf(navigator.platform.toLowerCase()) >= 0) {
        $(document).ready(function () {
            var areaWidth = $("#footer").innerWidth();
            $("#footer").css("width", areaWidth)
            $(window).resize(function () {
                location.reload();
            })
        })
    }
}

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
        if ($('html').hasClass('pc')) {
            var menu = document.getElementById("allmenuInfo");
            menu.style.top = "0";
        } else if($('html').hasClass('tab_mob')){
            var menu = document.getElementById("allmenuMobile");
            menu.style.left = "0";
        }
    })
}

function closemenu() {
    $('#btnAllmenuClose').click(function () {
        var menu = document.getElementById("allmenuInfo");
        menu.style.top = "-100vh";
    })
    $('#btnAllmenuMobClose').click(function () {
        var menu = document.getElementById("allmenuMobile");
        menu.style.left = "-100vw"
    })
}

function allmenuMobFnc() {
    $('.all-menu-active').click(function () {
        if ($('html').hasClass('tab_mob')) {
            $(this).siblings('.all-menu-respon').slideToggle()
            // $(this).siblings('.all-menu-respon').slideUp();
            if ($(this).hasClass('on')) {
                $(this).siblings().removeClass('on');
                $(this).removeClass('on');
            } else {
                $(this).addClass('on').siblings().removeClass('on');
            }
        } else if($('html').hasClass('pc')){
            $(this).find('.all-menu-active.on').removeClass('on');
        }
    });
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

//subpage search Fnc
function subSearchFnc() {
    $('.sub-search-txt').keyup(function () {
        if ($('.sub-search-txt').val() !== '') {
            $('.sub-search-wrap').addClass('on');
        } else {
            $('.sub-search-wrap').removeClass('on');
        }
    });
}


//호출문
$(function () {
    gnbFnc();
    openmenu();
    closemenu();
    btnSns();
    btnLang();
    stickyGnbFnc();
    openSmlMenuFnc();
    subSearchFnc();
    allmenuMobFnc()
});

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