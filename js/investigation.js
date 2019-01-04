$(function(){
   console.log(data)
   //点击问题1
    $("#training_object_box").on("click","#select_training_object",function select_training_object(){
      
    })
  
   function training_object_ul(){
        for(var i = 0;i<type.length;i++){
            console.log(type[i].name)
            var li = $("<li></li>");
            var input =$("<input value="+type[i].name+" name='check_training_object' type='checkbox'/>");
            var span = $("<span>"+type[i].name+"</span>");
            $(li).append(input);
            $(li).append(span);
            $("#training_object_ul").append(li);
        }
        
      
    }
    training_object_ul();
  //点击问题1中的ul列表信息
    $("#training_object_box").on("click","#training_object_btn",function select_training_object(){
     var check_training_object = document.getElementsByName("check_training_object");
     for(var c = 0;c<check_training_object.length;c++){
        if(check_training_object[c].checked){
            console.log(check_training_object[c].value)
        }
     }
        //选择问题1后显示选择信息
    //     $("#selected_message_one").html($(this).html());
    //     //清空问题2里面的内容
    //   $("#direction_box").html("");
    //   //循环出问题1对应的child_list
    //   for(var i = 0;i<type.length;i++){
    //       if($(this).html()===type[i].name){
              
    //           var child_list=type[i].child_list;
    //           for(var j = 0;j<child_list.length;j++){
    //               //叶子节点
    //               if(child_list[j].is_leaf===1){
    //                     console.log("叶子节点")
    //                     var leaf_div=$("<div class='investigation_direction_name'></div>");
    //                     var leaf_input=$("<input name='check_direction' type='checkbox'/>");
    //                     var leaf_span=$("<span>"+child_list[j].name+"</span>");
    //                     $(leaf_div).append(leaf_input);
    //                     $(leaf_div).append(leaf_span);
    //                     $("#direction_box").append(leaf_div);
                     
    //               }
    //                //非叶子节点
    //               if(child_list[j].is_leaf===0){
    //                 console.log("非叶子节点")
    //                     var un_leaf_box=$("<div class='investigation_un_leaf_box'></div>");
    //                     var un_leaf_title=$("<div class='investigation_un_leaf_title'>"+child_list[j].name+"</div>");
    //                     // var un_leaf_span=$("<span></span>");
    //                     $(un_leaf_box).append(un_leaf_title);
    //                     $("#direction_box").append(un_leaf_box);
    //                     var un_leaf_child_list=child_list[j].child_list;
    //                     for(var m = 0;m<un_leaf_child_list.length;m++){
    //                         var un_leaf_div=$("<div class='investigation_direction_name'></div>");
    //                         var un_leaf_input=$("<input name='check_direction' type='checkbox'/>");
    //                         var un_leaf_span=$("<span>"+un_leaf_child_list[m].name+"</span>");
    //                         $(un_leaf_div).append(un_leaf_input);
    //                         $(un_leaf_div).append(un_leaf_span);
    //                         $(un_leaf_box).append(un_leaf_div);
    //                     }
                   
    //             }

    //           }
    //       }
    //   }
    })
})