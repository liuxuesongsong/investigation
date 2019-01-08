$(function(){
   //点击问题1
    $("#training_object_box").on("click","#select_training_object",function select_training_object(){
      
    })
  //问题1列表
//    checked_training_object_arr=[];
   function training_object_ul(){
        for(var i = 0;i<type.length;i++){
            var li = $("<li></li>");
            var input =$("<input value="+type[i].id+" name='check_training_object' type='checkbox'/>");
            var span = $("<span>"+type[i].name+"</span>");
            $(li).append(input);
            $(li).append(span);
            $("#training_object_ul").append(li);
        }
    }
    training_object_ul();
  //点击问题1中的完成按钮
    $("#training_object_box").on("click","#training_object_btn",function training_object_btn(){
       //判断是否选中
       is_selected("check_training_object","请选择培训的对象")
       if(is_selected_sum==0){
           return false
       }
        //打开问题2和内容,打开重置按钮
        $("#investigation_direction,#direction_message,#reset_training_object").removeClass("none");
        //
        //关闭问题1的选择。关闭3,4,5,提交的表单
        $("#training_object_message,#investigation_course,#investigation_company_type,#investigation_duty_type,#investigation_form").addClass("none");
        checked_training_object_arr=[];
        var check_training_object = document.getElementsByName("check_training_object");
        //选择问题1后显示选择信息
        var selected_message_one="";
        
        $("#direction_box").html("");
        $("#child_direction_box").html("");
        $("#investigation_course_ul").html("");
        $("#filter_list").html("");
        //创建问题2的内容
        var main_direction_title=$("<div>主要方向</div>");  
        $("#direction_box").append(main_direction_title);
        var child_direction_title=$("<div>子方向</div>");  
        $("#child_direction_box").append(child_direction_title);
        //循环问题1中复选框
        var selected_message_one_sum = 0;
        for(var c = 0;c<check_training_object.length;c++){
            if(check_training_object[c].checked){
                selected_message_one_sum++;
                //循环类型
                for(var i = 0;i<type.length;i++){
                    // console.log(check_training_object[c].value)
                    // console.log(type[i].id)
                    //类型name和复选框筛选一致
                    if(check_training_object[c].value==type[i].id){
                        checked_training_object_arr.push(type[i].id);
                        selected_message_one=selected_message_one+type[i].name+",";
                        var child_list=type[i].child_list;
                        for(var j = 0;j<child_list.length;j++){
                            //叶子节点
                            if(child_list[j].is_leaf==="1"){
                                //   console.log("叶子节点")
                                
                                var leaf_div=$("<div class='investigation_direction_message is_leaf'></div>");
                                //   var leaf_radio=$("<input value="+child_list[j].id+" name='investigation' type='radio'/>");
                                var leaf_span=$("<span>"+child_list[j].name+"</span>");
                                var leaf_input=$("<input value="+child_list[j].id+" name='check_direction' type='checkbox'/>");
                                //   $(leaf_div).append(leaf_radio);
                                $(leaf_div).append(leaf_span);
                                $(leaf_div).append(leaf_input);
                                
                                
                                $("#direction_box").append(leaf_div);
                            
                            }
                            //非叶子节点
                            if(child_list[j].is_leaf==="0"){
                            //   console.log("非叶子节点")
                                var un_leaf_div=$("<div class='investigation_direction_message is_leaf'></div>");
                                var un_leaf_radio=$("<input value="+child_list[j].id+" name='investigation' type='radio'/>");
                                var un_leaf_span=$("<span>"+child_list[j].name+"</span><span>》</span>");
                                $(un_leaf_div).append(un_leaf_radio);
                                $(un_leaf_div).append(un_leaf_span);
                                $("#direction_box").append(un_leaf_div);
                                //子方向
                                var un_leaf_child_list=child_list[j].child_list;
                                for(var m = 0;m<un_leaf_child_list.length;m++){
                                    var un_leaf_div=$("<div id='un_leaf"+un_leaf_child_list[m].id+"' class='investigation_direction_message none'></div>");
                                    //   console.log(un_leaf_child_list[j])
                                    var un_leaf_input=$("<input value="+un_leaf_child_list[m].id+" name='check_direction' type='checkbox'/>");
                                    var un_leaf_span=$("<span>"+un_leaf_child_list[m].name+"</span>");
                                    
                                    $(un_leaf_div).append(un_leaf_span);
                                    $(un_leaf_div).append(un_leaf_input);
                                    //   $("#child_direction_box").addClass("none");
                                    $("#child_direction_box").append(un_leaf_div);
                                }
                            
                        }
        
                        }
                    }
                }
            }
        }
        console.log(selected_message_one_sum)
        //  console.log(checked_training_object_arr)
        $("#selected_message_one").html(selected_message_one.slice(0,selected_message_one.length-1));
        //单选框点击函数
        $(".is_leaf").on("click",":radio",function check_radio(){
            
            var check_training_object = document.getElementsByName("check_training_object");
            //选择问题1后显示选择信息
            for(var c = 0;c<check_training_object.length;c++){
                if(check_training_object[c].checked){
                    for(var i = 0;i<type.length;i++){
                        if(check_training_object[c].value==type[i].id){
                            var child_list=type[i].child_list;
                            for(var j = 0;j<child_list.length;j++){
                                if(child_list[j].is_leaf==="0"){
                                    var un_leaf_child_list=child_list[j].child_list;
                                        for(var m = 0;m<un_leaf_child_list.length;m++){
                                            if(child_list[j].id==$(this).val()){

                                                // $("#child_direction_box").removeClass("none");
                                                // console.log($("#un_leaf"+un_leaf_child_list[j].id))
                                                for(var n = 0;n<un_leaf_child_list.length;n++){
                                                    $("#un_leaf"+un_leaf_child_list[n].id).removeClass("none")
                                                }
                                            
                                            }else{
                                                for(var n = 0;n<un_leaf_child_list.length;n++){
                                                    $("#un_leaf"+un_leaf_child_list[n].id).addClass("none")
                                                }
                                                // $("#un_leaf"+un_leaf_child_list[j].id).addClass("none")
                                            }
                                    }
                                    
                                
                            }
            
                            }
                        }
                    }
        
                }
            }
        })

    })
   
    
})