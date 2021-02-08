<script>

    $('.modal').on('hidden.bs.modal', function (e) {
        console.log('modal close');
        $(this).find('form')[0].reset()
    });

    $("#checkEmail").click(function () {
        let userEmail = $("#userEmail").val();
        let userName = $("#userName").val();
        let userPhone = $("#userPhone").val();

        $.ajax({
            type: "GET",
            url: "/common/findPwd",
            data: {
                "email": userEmail,
                "name": userName,
                "phone": userPhone
            },
            success: function (res) {
                if (res['check']) {
                    swal("발송 완료!", "입력하신 이메일로 임시비밀번호가 발송되었습니다.", "success").then((OK) = > {
                        if(OK) {
                            $.ajax({
                                type: "POST",
                                url: "/check/findPw/sendEmail",/*여기는 모르겠다*/
                                data: {
                                    "userEmail": userEmail,
                                    "userName": userName,
                                    "phone": userPhone
                                }
                            })
                            window.location = "/login";
                        }


                    }
                )
                    $('#checkMsg').html('<p style="color:darkblue"></p>');
                } else {
                    $('#checkMsg').html('<p style="color:red">일치하는 정보가 없습니다.</p>');
                }
            }
        })
    })
</script>