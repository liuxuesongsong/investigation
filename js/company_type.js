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
        $("#investigation_company_type").on("click","#company_type_btn",function company_type_btn(){
            $("#investigation_duty_type").removeClass("none");
        }) 
        $("#investigation_duty_type").on("click","#duty_type_btn",function duty_type_btn(){
            $("#investigation_form").removeClass("none");
        }) 
        
})