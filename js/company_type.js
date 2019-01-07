$(function(){
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
        //问题5
        duty_type_list()
        function duty_type_list(){
            for(var i = 0;i<duty_type.length;i++){
               
                var duty_type_li = $("<li></li");
                var duty_type_input = $("<input value="+duty_type[i].id+" name='check_duty_type' type='radio'/>")
                var duty_type_span = $("<span>"+duty_type[i].name+"</span>");
                $(duty_type_li).append(duty_type_input);
                $(duty_type_li).append(duty_type_span);
                $("#investigation_duty_type_ul").append(duty_type_li);
            }
           
        }
        //点击完成问题4 
        $("#investigation_company_type").on("click","#company_type_btn",function company_type_btn(){
            //打开问题5,内容。重置
            $("#investigation_duty_type,#duty_type_message,#reset_company_type").removeClass("none");
            //关闭问题4内容，表单
            $("#company_type_message,#investigation_form").addClass("none");
            //问题4被选中的内容
            selected_message("check_company_type","#selected_message_four")
           //问题4被选中的id
            company_type_arr = selected_message_ids;
        })
         //点击完成问题5
        $("#investigation_duty_type").on("click","#duty_type_btn",function duty_type_btn(){
            //打开表单。重置
            $("#investigation_form,#reset_duty_type").removeClass("none");
            //关闭问题5内容
            $("#duty_type_message").addClass("none");
             //问题5被选中的内容
             selected_message("check_duty_type","#selected_message_five")
              //问题5被选中的id
              duty_type_arr = selected_message_ids;
        })
        // 问题选中的值
        function selected_message(check_name,id){
            var check_company_type = document.getElementsByName(check_name);
            //问题四被选中的内容
            var selected_message_val="";
            selected_message_ids = [];
            for(var i = 0;i<check_company_type.length;i++){

                if(check_company_type[i].checked){
                    selected_message_ids.push(check_company_type[i].value)
                    selected_message_val=selected_message_val+$(check_company_type[i]).siblings().eq(0).html()+",";
                    console.log($(check_company_type[i]).siblings().eq(0).html())
                }
            }
            $(id).html(selected_message_val.slice(0,selected_message_val.length-1));
        }
        
})