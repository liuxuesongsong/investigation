$(function () {
    //点击问题3完成
    $("#course_btn").click(function () {
        $("#selected_message_four_label").html("可以选多个")
        $("#selected_message_four").html("")
        $("#selected_message_five_label").html("单选")
        $("#reset_course").addClass("open")
        $("#reset_course").removeClass("close")
        //判断是否选中
        is_selected("check_course", "请选择感兴趣的课程")
        //问题被选中的个数信息
        selected_message("check_course", "#selected_message_three", "#selected_message_three_label")
        if (is_selected_sum == 0) {
            return false
        }
        //关闭问题3内容，5,表单
        $("#course_message,#investigation_duty_type,#investigation_form").addClass("none");
        //打开问题4和内容,打开问题3重置
        $("#investigation_company_type,#company_type_message,#reset_course").removeClass("none");
        //课程id数组
        course_ids_arr = [];

        var check_course = document.getElementsByName("check_course");
        for (var i = 0; i < check_course.length; i++) {
            if (check_course[i].checked) {
                course_ids_arr.push(check_course[i].value)
            }
        }


    })



})