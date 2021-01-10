function memberFnc() {
    $('td input').on('change', function () {
        if ($(this).val() != '') {
            $(this).addClass('valid');

            if ($(this).attr('name') == 'userID') {
                var v = $(this).val();
                var reg = /^[a-zA-Z0-9_]{6,12}$/g;
                if (reg.test(v)) {
                    $(this).closest('td').removeClass('error');
                } else {
                    $(this).closest('td').addClass('error');
                }
            } else if ($(this).attr('name') == 'userPw') {
                var v = $(this).val();
                var reg = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{9,20}$/g;
                if (reg.test(v)) {
                    $(this).closest('td').removeClass('error');
                } else {
                    $(this).closest('td').addClass('error');
                }
            } else if ($(this).attr('name') == 're_userPw') {
                if ($('#userPw').val() == $('#re_userPw').val()) {
                    $('#re_userPw').closest('td').removeClass('error');
                } else {
                    $('#re_userPw').closest('td').addClass('error');
                }
            } else if ($(this).attr('name') == 'userName') {
                var v = $(this).val();
                var reg = /^[가-힣]{1,20}$/g;
                if (reg.test(v)) {
                    $(this).closest('td').removeClass('error');
                } else {
                    $(this).closest('td').addClass('error');
                }
            } else if ($(this).attr('name') == 'userPhone2' || $(this).attr('name') == 'userPhone3') {
                var v = $(this).val();
                var reg = /^[0-9]{3,4}$/g;
                if (reg.test(v)) {
                    $(this).closest('td').removeClass('error');
                } else {
                    $(this).closest('td').addClass('error');
                }
            } else if ($(this).attr('name') == 'tel1' || $(this).attr('name') == 'tel2' || $(this).attr('name') == 'tel3') {
                var v = $(this).val();
                var reg = /^[0-9]{2,4}$/g;
                if (reg.test(v)) {
                    $(this).closest('td').removeClass('error');
                } else {
                    $(this).closest('td').addClass('error');
                }
            } else if ($(this).attr('name') == 'tel1') {
                var v = $(this).val();
                var reg = /^[0-9]{2,4}$/g;
                if (reg.test(v)) {
                    $(this).closest('td').removeClass('error');
                } else {
                    $(this).closest('td').addClass('error');
                }
            } else if ($(this).attr('name') == 'email1') {
                var v = $(this).val();
                var reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]/g;
                if (reg.test(v)) {
                    $(this).closest('td').removeClass('error');
                } else {
                    $(this).closest('td').addClass('error');
                }
            } else if ($(this).attr('name') == 'email2') {
                var v = $(this).val();
                var reg = /(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
                if (reg.test(v)) {
                    $(this).closest('td').removeClass('error');
                } else {
                    $(this).closest('td').addClass('error');
                }
            }
        } else {
            $(this).removeClass('valid');
        }
    })
};

function selectEmailFnc() {
    $('#userEmail').on('change', function () {
        var emailValue = $('#userEmail option:selected').val();
        if (emailValue == 'other') {
            $('#email2').attr('disabled', false);
            $('#email2').val('');
        } else {
            $('#email2').val(emailValue);
            $('#email2').attr('disabled', true);
        }
    });
}

function addrPopFnc() {
    $('#addrPop').click(function () {
        new daum.Postcode({
            oncomplete: function (data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if (data.userSelectedType === 'R') {
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if (data.buildingName !== '' && data.apartment === 'Y') {
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if (extraAddr !== '') {
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
                    document.getElementById("address3").value = extraAddr;

                } else {
                    document.getElementById("address3").value = '';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('addrNum').value = data.zonecode;
                document.getElementById("address1").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("address2").focus();
            }
        }).open();
    })
}

function userSubmitFnc() {
    $('#userSubmit').click(function () {
        if (!$('.required').hasClass('valid') || $('.reTd').hasClass('error')) {
            alert('회원가입에 필요한 필수 항목을 입력해주세요.');
        } else {
            alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
            location.href = "http://lxyex1379.dothome.co.kr/yugwansun-private-origin/sub4.html";
        }
    })
}
$(function () {
    memberFnc();
    selectEmailFnc();
    addrPopFnc();
    userSubmitFnc();
});