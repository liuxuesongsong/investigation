$(function(){
    //点击问题3完成
    $("#investigation_course").on("click","#course_btn",function course_btn(){
    console.log("问题3完成咯");
    var course_ids_arr=[];
    // var selected_message_three="";
    var check_course = document.getElementsByName("check_course");
    for(var i = 0;i<check_course.length;i++){
        if(check_course[i].checked){
            // selected_message_three=selected_message_three+check_course[i].nextSibling.val()+",";
            // console.log(check_course[i].next())
            course_ids_arr.push(check_course[i].value)
        }
    }

    // $("#selected_message_three").html(selected_message_three.slice(0,selected_message_three.length-1));

    console.log(course_ids_arr)
    })
    // 问题4
    company_type_list()
    function company_type_list(){
        console.log("hhh")
        console.log(company_type)
        for(var i = 0;i<company_type.length;i++){
           
            var company_type_li = $("<li></li");
            var company_type_input = $("<input value="+company_type[i].id+" name='check_company_type' type='checkbox'/>")
            var company_type_span = $("<span>"+company_type[i].name+"</span>");
            $(company_type_li).append(company_type_input);
            $(company_type_li).append(company_type_span);
            $("#investigation_company_type_ul").append(company_type_li);
        }
       
    }
    duty_type_list()
    function duty_type_list(){
        console.log("hhh")
        
        for(var i = 0;i<duty_type.length;i++){
           
            var duty_type_li = $("<li></li");
            var duty_type_input = $("<input value="+duty_type[i].id+" name='check_duty_type' type='radio'/>")
            var duty_type_span = $("<span>"+duty_type[i].name+"</span>");
            $(duty_type_li).append(duty_type_input);
            $(duty_type_li).append(duty_type_span);
            $("#investigation_duty_type_ul").append(duty_type_li);
        }
       
    }
   
})