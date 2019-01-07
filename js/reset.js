$(function(){
    //重选的函数
    function reset_fun(parent_id,id,show_id){
        $(parent_id).on("click",$(id),function reset_message(){
            $(show_id).removeClass("none");
        })
    }
     // 重置问题1
    reset_fun("#select_training_object","#reset_training_object","#training_object_message")  
    // 重置问题2
    reset_fun("#select_direction","#reset_direction","#direction_message")
    // 重置问题3
    reset_fun("#select_course","#reset_course","#course_message")
    // 重置问题4
    reset_fun("#select_company_type","#reset_company_type","#company_type_message")
    // 重置问题5
    reset_fun("#select_duty_type","#reset_duty_type","#duty_type_message")
})