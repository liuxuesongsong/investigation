$(function(){
    function doLoop() {
        count--;
        // var btn= $("#get_code");
        if(count > 0) {
            btn.value = count + '秒后可重新获取';
        } else {
            clearInterval(clock); //清除js定时器
            btn.disabled = false;
            btn.value = '重新发送验证码';
            count = 60; //重置时间
        }
    }
    var count = 60,
    codeid;
    $("#login_get_code").click(function(){
        var dealType, //验证方式		
        mobile = $("#login_telephone").val();
    if(mobile != '') {

        //验证手机有效性
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if(!myreg.test($("#login_telephone").val())) {
            $(".main").fadeIn();
            $("#alert_msg").html("请输入有效的手机号码！")
            setInterval(close, 3000);
            // $(r_phone_error).html('请输入有效的手机号码！');
            return false;
        }
        btn = this;
        btn.disabled = true; //将按钮置为不可点击
        btn.value = count + '秒后可重新获取';
        clock = setInterval(doLoop, 1000); //一秒执行一次

        //向后台发送处理数据
        $.ajax({
            type: "POST", //用POST方式传输
            dataType: "json", //数据格式:JSON
            url: 'http://192.168.4.69/index.php?m=survey&c=code&a=commit', //目标地址
            data: {
                number: mobile
            },
            error: function(data) {
                is_selected("check_duty_type",data.msg)
            },
            success: function(msg) {
                // codeid = msg.codeid;

            }
        });

    } else {
        $(".main").fadeIn();
        $("#alert_msg").html("请输入电话号码")
        setInterval(close, 3000);
        // $(r_phone_error).html("请输入电话号码");
    }

    })
    $("#login_submit").click(function(){
        console.log("登陆成功")
        $.ajax({
            type: "POST", //用POST方式传输
            dataType: "json", //数据格式:JSON
            url: 'http://192.168.4.69/index.php?m=survey&c=code&a=login', //目标地址
            data: {
                number: $("#login_telephone").val(),
                code:$("#login_code").val()
            },
            error: function(data) {
                alert_fun(data.msg)
            },
            success: function(data) {
                if(data.error==0){
                    sessionStorage.token=data.data.token;
                    //登录成功获取调查报告数据
                    get_report_data()
                }else{
                    alert_fun(data.msg)
                }
                // codeid = msg.codeid;

            }
        });
        //默认成功登陆
        // window.open("report.html","_self")
       
       
    })
    //获取调查报告数据
    function get_report_data(){
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

    // 
     report_data_function = function(){
        // 成功登陆得到的数据
        var report_datas =JSON.parse(sessionStorage.report_data);
        // 问题1答案
        report_list_function(all_type_data,report_datas.student_type,"#report_training_object")
         // 问题2答案
        report_list_function(all_type_data,report_datas.course_type,"#report_investigation")
         // 问题3答案
         report_list_function(course_data,report_datas.course,"#report_course")
        // 问题4答案
        report_list_function(company_type,report_datas.company_type,"#report_company_type")
        // 问题5答案
        report_list_function(duty_type,report_datas.duty_type,"#report_duty_type")
           
    } 
    report_data_function()
    function report_list_function(data,report_datas,li_id){
        for(var m = 0;m<data.length;m++){
            for(var n = 0;n<report_datas.length;n++){
                if(data[m].id ==report_datas[n]){
                    var li = $("<li>"+data[m].name+"</li>");
                    $(li_id).append(li)
                }
            }
         }
    }

})