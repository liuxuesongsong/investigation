$(function(){
    //重选的函数
     reset_fun=function(id,show_id,button_id){
        $(id).click(function(){
            console.log( $(show_id).hasClass("none"))
           if( $(show_id).hasClass("none")){
            $(id).removeClass("open")
            $(id).addClass("close")
             
            $(show_id).removeClass("none");
            $(button_id).html("重选")
           }else{
            $(show_id).addClass("none");
            $(id).removeClass("close")
            $(id).addClass("open")
           
           }
            
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