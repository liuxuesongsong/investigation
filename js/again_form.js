$(function () {
    //判断选中

    $("#again_investigation_submit").click(function () {
        var report_datas = JSON.parse(sessionStorage.report_data);
        console.log(report_datas.token)
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
            url: 'http://192.168.4.69/index.php?m=survey&c=code&a=send_courses', //目标地址
            data: {
                student_type: checked_training_object_arr,
                course_type: checked_direction_arr,
                course: course_ids_arr,
                company_type: company_type_arr,
                duty_type: duty_type_arr,
                token: sessionStorage.token,
                act_token: getCookie("token")
            },
            error: function (data) {
                alert_fun(data.msg)
                // console.log(msg.codeid);
            },
            success: function (data) {
                if (data.error == 0) {
                    sessionStorage.report_data = JSON.stringify(data.data)
                    //调查报告数据

                    report_data_function()
                    window.open("report.html", "_self")
                }
                alert_fun(data.msg)
                // codeid = msg.codeid;

            }
        });

    })
})