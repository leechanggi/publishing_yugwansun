function loginFnc() {
    var id = $('#id');
    var pw = $('#pw');
    var btn = $('#btnLogin');
    $(btn).on('click', function () {
        if ($(id).val() == "") {
            $(id).next('label').addClass('error');
            setTimeout(function () {
                $('label').removeClass('error');
            }, 1500);
        } else if ($(pw).val() == "") {
            $(pw).next('label').addClass('error');
            setTimeout(function () {
                $('label').removeClass('error');
            }, 1500);
        }
    })
}
$(function () {
    loginFnc();
})