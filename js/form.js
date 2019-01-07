$(function(){
    $("#investigation_form").on("click","#investigation_submit",function investigation_submit(){
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
               name:$("#account").val(),
               code:$("#code").val(),
               number:$("#telephone").val(),
               course_object:checked_training_object_arr,
               list_object:checked_direction_arr,
               filter:course_ids_arr,
               company_type:company_type_arr,
               job_type:duty_type_arr
            },
            error: function(msg) {
                // console.log(msg.codeid);
            },
            success: function(msg) {
                // codeid = msg.codeid;

            }
        });

    })
})