$(function(){
    //点击问题3完成
    $("#investigation_course").on("click","#course_btn",function course_btn(){
       //判断是否选中
        is_selected("check_course","请选择感兴趣的课程")
        if(is_selected_sum==0){
            return false
        }
        console.log("问题3完成咯");
        //关闭问题3内容，5,表单
        $("#course_message,#investigation_duty_type,#investigation_form").addClass("none");
        //打开问题4和内容,打开问题3重置
        $("#investigation_company_type,#company_type_message,#reset_course").removeClass("none");
        //课程id数组
        course_ids_arr=[];
        // var selected_message_three="";
        var check_course = document.getElementsByName("check_course");
        var sum_course = 0;
        for(var i = 0;i<check_course.length;i++){
            if(check_course[i].checked){
                course_ids_arr.push(check_course[i].value)
            sum_course++;
            }
        }

        $("#selected_message_three").html(sum_course+"个");

        })

  
   
})