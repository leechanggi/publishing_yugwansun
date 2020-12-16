function agreeAllFnc() {
    $('#agreeAll').click(function () {
        $('.agree').attr('checked', true);
    })
}
function agreeMainFnc() {
    $('.agreeMain').click(() => {
            if ($('.agree')[0].hasAttribute('checked') == false) {
                alert('회원가입약관 및 개인정보처리방침안내 약관에 동의하셔야 회원가입 하실 수 있습니다.');
            }//else{
                //window.location.replace('../sub6.html')
            //}
        })
}
$(function () {
    agreeAllFnc();
    agreeMainFnc();
})