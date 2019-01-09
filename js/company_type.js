$(function(){
        // 问题4
        company_type_list()
        function company_type_list(){
            // console.log(company_type)
            for(var i = 0;i<company_type.length;i++){
                var company_type_li = $("<li></li");
                var company_type_input = $("<input id ='company_type_input+"+i+"' value="+company_type[i].id+" name='check_company_type' type='checkbox'/>")
                var company_type_label = $("<label for ='company_type_input+"+i+"'>"+company_type[i].name+"</label>");
                $(company_type_li).append(company_type_input);
                $(company_type_li).append(company_type_label);
                $("#investigation_company_type_ul").append(company_type_li);
            }
            $("input:checkbox").click(function(){
                if($(this).prop("checked")){
                    $(this).parent().addClass("active")
                }else{
                    $(this).parent().removeClass("active")
                }
            })
           
        }
        //问题5
        duty_type_list()
        function duty_type_list(){
            for(var i = 0;i<duty_type.length;i++){
               
                var duty_type_li = $("<li></li");
                var duty_type_input = $("<input id ='duty_type_input+"+i+"' value="+duty_type[i].id+" name='check_duty_type' type='radio'/>")
                var duty_type_label = $("<label for ='duty_type_input+"+i+"'>"+duty_type[i].name+"</label>");
                $(duty_type_li).append(duty_type_input);
                $(duty_type_li).append(duty_type_label);
                $("#investigation_duty_type_ul").append(duty_type_li);
            }
            $("input:radio").click(function(){
                var check_duty_type = document.getElementsByName("check_duty_type");
                for(var m = 0;m<check_duty_type.length;m++){
                    
                    if(check_duty_type[m].checked){
                        $(check_duty_type[m]).parent().addClass("active")
                    }else{
                        $(check_duty_type[m]).parent().removeClass("active")
                    }
                }
            })
            
           
        }
        //点击完成问题4 
        $("#investigation_company_type").on("click","#company_type_btn",function company_type_btn(){
           //判断是否选中
            is_selected("check_company_type","请选择您的企业战略类型")
            if(is_selected_sum==0){
                return false
            }
            //打开问题5,内容。重置
            $("#investigation_duty_type,#duty_type_message,#reset_company_type").removeClass("none");
            //关闭问题4内容，表单
            $("#company_type_message,#investigation_form").addClass("none");
            //问题4被选中的内容
            selected_message("check_company_type","#selected_message_four","#selected_message_four_label")
           //问题4被选中的id
            company_type_arr = selected_message_ids;
        })
         //点击完成问题5
        $("#investigation_duty_type").on("click","#duty_type_btn",function duty_type_btn(){
             //判断是否选中
            is_selected("check_duty_type","请选择您本人在公司的职务类型")
            if(is_selected_sum==0){
                return false
            }
            //打开表单。重置
            $("#investigation_form,#reset_duty_type").removeClass("none");
            //关闭问题5内容
            $("#duty_type_message").addClass("none");
             //问题5被选中的内容
            //  selected_message("check_duty_type","#selected_message_five")
            var selected_message_val="";
            var check_duty_type = document.getElementsByName("check_duty_type");
            for(var i = 0;i<check_duty_type.length;i++){
                if(check_duty_type[i].checked){
                    $("#selected_message_five_label").html($(check_duty_type[i]).siblings().eq(0).html())
                }
            }
              //问题5被选中的id
              duty_type_arr = selected_message_ids;
        })
        // 问题选中的值
         selected_message = function(check_name,id,label_id){
            var check_name = document.getElementsByName(check_name);
            //问题四被选中的内容
            var selected_message_val="";
            $(label_id).html("已选")
            selected_message_ids = [];
            for(var i = 0;i<check_name.length;i++){

                if(check_name[i].checked){
                    selected_message_ids.push(check_name[i].value)
                    // selected_message_val=selected_message_val+$(check_name[i]).siblings().eq(0).html()+",";
                }
            }
            // $(id).html(selected_message_val.slice(0,selected_message_val.length-1));
            $(id).html(selected_message_ids.length);
        }
        
})