function memberFnc() {
    $('td input').on('change', function() {
        if ($(this).val() != '') {
            $(this).addClass('valid');

            if ($(this).attr('name') == 'userID'){
                var v = $(this).val();
                var reg = /^[a-zA-Z0-9_]{6,12}$/g;
                if (reg.test(v)) {
                    $(this).closest('td').removeClass('error');
                } else {
                    $(this).closest('td').addClass('error');
                }
            } else if ($(this).attr('name') == 'userPw'){
                var v = $(this).val();
                var reg = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{9,20}$/g;
                if (reg.test(v)) {
                    $(this).closest('td').removeClass('error');
                } else {
                    $(this).closest('td').addClass('error');
                }
            } else if ($(this).attr('name') == 're_userPw'){
                if ($('#userPw').val() == $('#re_userPw').val()){
                    $('#re_userPw').closest('td').removeClass('error');
                }else{
                    $('#re_userPw').closest('td').addClass('error');
                }
            } else if ($(this).attr('name') == 'userName'){
                var v = $(this).val();
                var reg = /^[가-힣]{1,20}$/g;
                if (reg.test(v)) {
                    $(this).closest('td').removeClass('error');
                } else {
                    $(this).closest('td').addClass('error');
                }
            } else if ($(this).attr('name') == 'userPhone2' || $(this).attr('name') == 'userPhone3'){
                var v = $(this).val();
                var reg = /^[0-9]{3,4}$/g;
                if (reg.test(v)) {
                    $(this).closest('td').removeClass('error');
                } else {
                    $(this).closest('td').addClass('error');
                }
            } else if ($(this).attr('name') == 'tel1' || $(this).attr('name') == 'tel2' || $(this).attr('name') == 'tel3'){
                var v = $(this).val();
                var reg = /^[0-9]{2,4}$/g;
                if (reg.test(v)) {
                    $(this).closest('td').removeClass('error');
                } else {
                    $(this).closest('td').addClass('error');
                }
            } else if ($(this).attr('name') == 'tel1'){
                var v = $(this).val();
                var reg = /^[0-9]{2,4}$/g;
                if (reg.test(v)) {
                    $(this).closest('td').removeClass('error');
                } else {
                    $(this).closest('td').addClass('error');
                }
            } else if ($(this).attr('name') == 'email1'){
                var v = $(this).val();
                var reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]/g;
                if (reg.test(v)) {
                    $(this).closest('td').removeClass('error');
                } else {
                    $(this).closest('td').addClass('error');
                }
            }  else if ($(this).attr('name') == 'email2'){
                var v = $(this).val();
                var reg = /(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
                if (reg.test(v)) {
                    $(this).closest('td').removeClass('error');
                } else {
                    $(this).closest('td').addClass('error');
                }
            }
        }else{
            $(this).removeClass('valid');
        }
    })
};
function selectEmailFnc() {
    $('#userEmail').on('change', function(){
        var emailValue = $('#userEmail option:selected').val();
        if(emailValue == 'other'){
            $('#email2').attr('disabled',false);
            $('#email2').val('');
        }else{
            $('#email2').val(emailValue);
            $('#email2').attr('disabled',true);
        }
    });
}
// function userSubmitFnc() {
//     var input = document.querySelectorAll("input")
//     $('#userSubmit').click(() => {
//         console.log(input);
//         if($('input').closest('td').hasclass('error') == true){
//             alert('1234');
//         }
        // if (inputRequired[0].hasClass('valid') == false) {
        //     alert('1234');
        // }else{
        //     window.location.replace('../sub7.html')
        // }
    // })

    // $('#userSubmit').on('click',function () {
    //     if (inputRequired.is('.valid') === false) {
    //         alert('1234');
    //     }else{
    //         window.location.replace('../sub7.html')
    //     }
    // })
// }
$(function() {
    memberFnc();
    selectEmailFnc();
    // userSubmitFnc();
});