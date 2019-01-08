$(function(){
     //点击问题2完成
 $("#investigation_direction").on("click","#direction_btn",function direction_btn(){
     //判断是否选中
    is_selected("check_direction","请选择需要的课程方向")
    if(is_selected_sum==0){
        return false
    }
    //打开问题3和内容,问题2的重置
    $("#investigation_course,#reset_direction,#course_message").removeClass("none");
    //关闭问题2列表,4,5,提交的表单
    $("#direction_message,#investigation_company_type,#investigation_duty_type,#investigation_form").addClass("none");
    //  checked_training_object_arr=[];
    console.log(checked_training_object_arr)
    //checked_training_object_arr问题1 被选中的id数组
    var training_child_list_arr =[];
    for(var m = 0;m<checked_training_object_arr.length;m++){
        for(var n = 0;n<type.length;n++){
            //通过问题1被选中筛选出来方向的child_list
            if(checked_training_object_arr[m]==type[n].id){
                var training_child_list=type[n].child_list;
               for(var o = 0;o<training_child_list.length;o++){
                training_child_list_arr.push(training_child_list[o])
               }
            }
        }
    }
    //通过问题1筛选出所有的叶子节点
    var direction_arr = [];
    for(var y = 0;y<training_child_list_arr.length;y++){
        var direction_child_list =training_child_list_arr[y];
        if(direction_child_list.is_leaf==="1"){
            direction_arr.push(direction_child_list)
        }
        if(direction_child_list.is_leaf==="0"){
            for(var z = 0;z<direction_child_list.child_list.length;z++){
                direction_arr.push(direction_child_list.child_list[z]) 
            }
        }
    }
    //子方向复选框
    var check_direction=document.getElementsByName("check_direction");
     //子方向复选框被选中checked_direction_arr  id数组
    checked_direction_arr = [];
    var filter_list_arr=[];
    var selected_message_two="";
    //叶子节点中复选框选中的节点
    for(var i = 0;i<check_direction.length;i++){
        if(check_direction[i].checked){
            for(var j = 0;j<direction_arr.length;j++){
                if(check_direction[i].value==direction_arr[j].id){
                    checked_direction_arr.push(direction_arr[j].id)
                    selected_message_two=selected_message_two+direction_arr[j].name+","
                    console.log(direction_arr[j].name)
                    for(var t = 0;t<direction_arr[j].filter_list.length;t++){
                        filter_list_arr.push(direction_arr[j].filter_list[t])  
                    }
                    // filter_list_arr.push(direction_arr[j].filter_list)
                    // console.log(direction_arr[j].filter_list)
                }
            }
            // console.log(check_direction[i].value)
        }
    }
    // var filter_list_arr = [1,23,1,1,1,3,23,5,6,7,9,9,8,5];
    //
     $("#selected_message_two").html(selected_message_two.slice(0,selected_message_two.length-1));

splice_filter_list_arr = removeDuplicatedItem(filter_list_arr);
console.log(splice_filter_list_arr);
//筛选后的过滤器数组
filter_value_list_arr=[];
$("#filter_list").html("");
for(var p = 0;p<splice_filter_list_arr.length;p++){
    for(var q in filter){
        if(q==splice_filter_list_arr[p]){
            for(var x = 0;x<filter[q].value_list.length;x++){
                var filter_span=$("<span style='color:blue' data_state='0' filter_id="+filter[q].value_list[x].id+" name="+filter[q].name+" class='filter_value_list'>"+filter[q].value_list[x].name+"  </span>");
                $("#filter_list").append(filter_span);
                filter_value_list_arr.push(filter[q].value_list[x])
            }
        }
    }
}
console.log(filter_value_list_arr)
console.log("问题2完成")
//课程的type_id
// $("#filter_list").html("");
// for(var v = 0;v<filter_value_list_arr.length;v++){
//  var filter_span=$("<span name="+filter_value_list_arr[v].id+" class='filter_value_list'>"+filter_value_list_arr[v].name+"</span>");
//  $("#filter_list").append(filter_span);
// }
//通过问题2筛选出来的课程
 filter_all_data=[];
 filter_all_datas=[];
 $("#investigation_course_ul").html("");
for(var a = 0;a<data.length;a++){
    for(var b = 0;b<checked_direction_arr.length;b++){
        if(data[a].type_id==checked_direction_arr[b]){
            filter_all_data.push(data[a]);
            filter_all_datas.push(data[a])
           var course_li = $("<li></li>");
           var course_input = $("<input value="+data[a].id+" name='check_course' type='checkbox'/>");
           var course_span = $("<span>"+data[a].name+"</span>");
           $(course_li).append(course_input);
           $(course_li).append(course_span);
           $("#investigation_course_ul").append(course_li);
            // console.log(data[a])
        }
    }
}


 })  
 $("#filter_list").on("click",".filter_value_list", function filter_value_list_btn(){
     var filter_value_list_state=document.getElementsByClassName("filter_value_list");
    //  console.log($(".filter_value_list")[0][attr("data_state")])
      if($(this).attr("data_state")=="0"){
        $(this).attr("data_state","1")
        $(this).css("color","red")
      
     }else{
        $(this).attr("data_state","0")
        $(this).css("color","blue")
     } 
     var filter_same_arr=[];
     var sum0 = 0,sum1=0;
     $("span[data_state='0']").each(function(){
        sum0++;
     })
     console.log(sum0)
     console.log(filter_value_list_arr.length)
     if(sum0==filter_value_list_arr.length){
        filter_same_arr=filter_all_data;
     }
    $("span[data_state='1']").each(function(){
        sum1++;
        console.log($(this))
         var name=$(this).attr("name");
         var filter_id = $(this).attr("filter_id");
    // var filter_filter_data=filter_all_data;
    //筛选器筛选后的课程
    console.log(filter_all_data)
    for(var i = 0;i<filter_all_data.length;i++){

        console.log(filter_all_data[i][name])
        // console.log($(this).attr("data_state"))
        if(filter_all_data[i][name]!=undefined){
            console.log(filter_id)
            if(filter_all_data[i][name]==filter_id){
                console.log(filter_all_data[i].name)
                filter_same_arr.push(filter_all_data[i])
            }
        }
        // else{
        //     filter_same_arr.push(filter_all_data[i])
        // }
    }
  
        // console.log(name)
  });
  if(sum1==filter_value_list_arr.length){
    filter_same_arr=filter_all_data;
 }
  splice_filter_same_arr = removeDuplicatedItem(filter_same_arr);
  console.log(splice_filter_same_arr);
      // console.log(filter_same_arr)
      $("#investigation_course_ul").html("");
      for(var m = 0;m<splice_filter_same_arr.length;m++){
          var course_li = $("<li></li>");
          var course_input = $("<input value="+splice_filter_same_arr[m].id+" name='check_course' type='checkbox'/>");
          var course_span = $("<span>"+splice_filter_same_arr[m].name+"</span>");
          $(course_li).append(course_input);
          $(course_li).append(course_span);
          $("#investigation_course_ul").append(course_li);
      }
    //  for(var x = 0;x<$(".filter_value_list").length;x++){
    //     console.log($(".filter_value_list")())
    //  }
    //筛选点击的筛选项
    
    
    // console.log(filter_same_arr)
    //  if($(this).attr("data_state")=="0"){
    //     $(this).attr("data_state","1")
        
      
    //  }else{
    //     $(this).attr("data_state","0")
    //  }
// console.log($(this).attr("data_state"))

 })
 function removeDuplicatedItem(arr) {
    for(var u = 0; u < arr.length-1; u++){
        for(var v = u+1; v < arr.length; v++){
            if(arr[u]==arr[v]){
                arr.splice(v,1);//console.log(arr[j]);
               v--;
            }
        }
    }
    return arr;
 }
  
})