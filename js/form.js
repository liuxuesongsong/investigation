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
    alert_fun = function(msg){
        $(".main").fadeIn();
        $("#alert_msg").html(msg)
        setInterval(close, 3000);
    }
    $("#close_alert_msg").click(function(){
        $(".main").fadeOut()
      })
       close = function(){
        $(".main").fadeOut()
      }
    $("#investigation_submit").click(function(){
    //    if($("#account").val()==""){
    //         $(".main").fadeIn();
    //         $("#alert_msg").html("请输入姓名")
    //         setInterval(close, 3000);
    //    }
    //    if($("#telephone").val()==""){
    //         $(".main").fadeIn();
    //         $("#alert_msg").html("请输入电话号码")
    //         setInterval(close, 3000);
    //      }
    //     if($("#code").val()==""){
    //         $(".main").fadeIn();
    //         $("#alert_msg").html("请输入验证码")
    //         setInterval(close, 3000);
    //     }
   
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
            url: 'http://192.168.4.69/index.php?m=survey&c=code&a=send_data', //目标地址
            data: {
               name:$("#account").val(),
               number:$("#telephone").val(),
               code:$("#code").val(),
            },
            error: function(data) {
              
                alert_fun(data.msg)
                // console.log(msg.codeid);
            },
            success: function(data) {
                // send_courses(data.data.token)
                // sessionStorage.token=data.data.token;
                if(data.error==0){
                    console.log(data.data.token)
                    send_courses(data.data.token)
                    sessionStorage.token=data.data.token;
                    // return_report_data()
                    // window.open("report.html","_self")
                }else{
                    if(data.code==1030){
                        window.open("login.html","_self")
                    }else{
                        alert_fun(data.msg)
                    }
                   
                }
                
                // codeid = msg.codeid;

            }
        });

    })
    function send_courses(token){
        $.ajax({
            type: "POST", //用POST方式传输
            dataType: "json", //数据格式:JSON
            url: 'http://192.168.4.69/index.php?m=survey&c=code&a=send_courses', //目标地址
            data: {
               token:token,
               student_type:checked_training_object_arr,
               course_type:checked_direction_arr,
               course:course_ids_arr,
               company_type:company_type_arr,
               duty_type:duty_type_arr
            },
            error: function(data) {
              
                alert_fun(data.msg)
                // console.log(msg.codeid);
            },
            success: function(data) {
                if(data.error==0){
                    // sessionStorage.token=data.data.token;
                    return_report_data()
                    // window.open("report.html","_self")
                }else{
                    alert_fun(data.msg)
                }
                
                // codeid = msg.codeid;

            }
        });
    }
      //获取调查报告数据
      function return_report_data(){
        $.ajax({
            type: "POST", //用POST方式传输
            dataType: "json", //数据格式:JSON
            url: 'http://192.168.4.69/index.php?m=survey&c=code&a=see', //目标地址
            data: {
               token:sessionStorage.token
            },
            error: function(data) {
                alert_fun(data.msg)
            },
            success: function(data) {
                if(data.error==0){
                    sessionStorage.report_data=JSON.stringify(data.data)
                    //调查报告数据

                    report_data_function()
                    window.open("report.html","_self")
                }else{
                    alert_fun(data.msg)
                }
                // codeid = msg.codeid;

            }
        });
    }
    

})