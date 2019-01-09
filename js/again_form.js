$(function(){
    //判断选中
     is_selected=function (name,msg){
        is_selected_sum = 0;
        var is_selected = document.getElementsByName(name);
        for(var i = 0;i<is_selected.length;i++){
            if(is_selected[i].checked){
                is_selected_sum++;
            }
        }
        if(is_selected_sum==0){
            $(".main").fadeIn();
            $("#alert_msg").html(msg)
            setInterval(close, 3000);
            // return false;
        }

    }
    $("#close_alert_msg").click(function(){
        $(".main").fadeOut()
      })
       close = function(){
        $(".main").fadeOut()
      }
    $("#again_investigation_submit").click(function(){
       
   
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
               course_object:checked_training_object_arr,
               list_object:checked_direction_arr,
               filter:course_ids_arr,
               company_type:company_type_arr,
               job_type:duty_type_arr
            },
            error: function(data) {
                is_selected("check_duty_type",data.msg)
                // console.log(msg.codeid);
            },
            success: function(data) {
                is_selected("check_duty_type",data.msg)
                // codeid = msg.codeid;

            }
        });

    })
})