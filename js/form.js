$(function () {
    //判断选中
    $("#investigation_submit").click(function () {
        if ($("#account").val() == "") {
            $(".main").fadeIn();
            $("#alert_msg").html("请输入姓名")
            setInterval(close, 3000);
            return false;
        }
        if ($("#telephone").val() == "") {
            $(".main").fadeIn();
            $("#alert_msg").html("请输入电话号码")
            setInterval(close, 3000);
            return false;
        }
        if ($("#code").val() == "") {
            $(".main").fadeIn();
            $("#alert_msg").html("请输入验证码")
            setInterval(close, 3000);
            return false;
        }

        //问题1 checked_training_object_arr
        //问题2 checked_direction_arr
        //问题3 course_ids_arr
        //问题4 company_type_arr
        //问题5 duty_type_arr
        console.log(course_ids_arr)

        //向后台发送处理数据
        $.ajax({
            type: "POST", //用POST方式传输
            dataType: "json", //数据格式:JSON
            url: 'https://api.csst.com.cn/index.php?m=survey&c=code&a=send_data', //目标地址
            data: {
                name: $("#account").val(),
                number: $("#telephone").val(),
                code: $("#code").val(),
                act_token: getCookie("token")
            },
            error: function (data) {

                alert_fun(data.msg)
                // console.log(msg.codeid);
            },
            success: function (data) {
                // send_courses(data.data.token)
                // sessionStorage.token=data.data.token;
                if (data.error == 0) {
                    console.log(data.data.token)
                    send_courses(data.data.token)
                    sessionStorage.token = data.data.token;
                    // return_report_data()
                    // window.open("report.html","_self")
                } else {
                    if (data.code == 1030) {
                        alert_fun(data.msg)
                        window.open("login.html", "_self")
                    } else {
                        alert_fun(data.msg)
                    }

                }

                // codeid = msg.codeid;

            }
        });

    })
    function send_courses(token) {
        $.ajax({
            type: "POST", //用POST方式传输
            dataType: "json", //数据格式:JSON
            url: 'https://api.csst.com.cn/index.php?m=survey&c=code&a=send_courses', //目标地址
            data: {
                token: token,
                student_type: checked_training_object_arr,
                course_type: checked_direction_arr,
                course: course_ids_arr,
                company_type: company_type_arr,
                duty_type: duty_type_arr,
                act_token: getCookie("token")
            },
            error: function (data) {

                alert_fun(data.msg)
                // console.log(msg.codeid);
            },
            success: function (data) {
                if (data.error == 0) {
                    // sessionStorage.token=data.data.token;
                    return_report_data()
                    // window.open("report.html","_self")
                } else {
                    alert_fun(data.msg)
                }

                // codeid = msg.codeid;

            }
        });
    }
    //获取调查报告数据
    function return_report_data() {
        $.ajax({
            type: "POST", //用POST方式传输
            dataType: "json", //数据格式:JSON
            url: 'https://api.csst.com.cn/index.php?m=survey&c=code&a=see', //目标地址
            data: {
                token: sessionStorage.token,
                act_token: getCookie("token")
            },
            error: function (data) {
                alert_fun(data.msg)
            },
            success: function (data) {
                if (data.error == 0) {
                    sessionStorage.report_data = JSON.stringify(data.data)
                    //调查报告数据

                    report_data_function()
                    window.open("report.html", "_self")
                } else {
                    alert_fun(data.msg)
                }
                // codeid = msg.codeid;

            }
        });
    }


})