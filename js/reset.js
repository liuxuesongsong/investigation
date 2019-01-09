$(function(){
    //重选的函数
    function reset_fun(id,show_id,button_id){
        $(id).click(function(){
            $(show_id).removeClass("none");
            $(button_id).html("重选")
        })
        // $(parent_id).on("click",$(id),function reset_message(){
          
        //     $(show_id).removeClass("none");
        //     $(button_id).html("重选")
        // })
    }
     // 重置问题1
    reset_fun("#reset_training_object","#training_object_message","#training_object_btn")  
    // 重置问题2
    reset_fun("#reset_direction","#direction_message")
    // 重置问题3
    reset_fun("#reset_course","#course_message")
    // 重置问题4
    reset_fun("#reset_company_type","#company_type_message")
    // 重置问题5
    reset_fun("#reset_duty_type","#duty_type_message")
})