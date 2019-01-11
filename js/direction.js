$(function(){
     //点击问题2完成
 $("#direction_btn").click(function(){
    $("#reset_direction").addClass("open")
    $("#reset_direction").removeClass("close")
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
     //问题被选中的个数信息
     selected_message("check_direction","#selected_message_two","#selected_message_two_label")
    //叶子节点中复选框选中的节点
    for(var i = 0;i<check_direction.length;i++){
        if(check_direction[i].checked){
            for(var j = 0;j<direction_arr.length;j++){
                if(check_direction[i].value==direction_arr[j].id){
                    checked_direction_arr.push(direction_arr[j].id)
                    for(var t = 0;t<direction_arr[j].filter_list.length;t++){
                        filter_list_arr.push(direction_arr[j].filter_list[t])  
                    }
                }
            }
            // console.log(check_direction[i].value)
        }
    }

splice_filter_list_arr = removeDuplicatedItem(filter_list_arr);
//筛选后的过滤器数组
filter_value_list_arr=[];
$("#filter_list").html("");
for(var p = 0;p<splice_filter_list_arr.length;p++){
    for(var q in filter){
      
        if(q==splice_filter_list_arr[p]){
            var filter_ul = $("<ul class='filter_list_ul'></ul>");
            $("#filter_list").append(filter_ul);
            for(var x = 0;x<filter[q].value_list.length;x++){
                
                var filter_li=$("<li data_state='0' filter_id="+filter[q].value_list[x].id+" name="+filter[q].name+" class='filter_list_li'>"+filter[q].value_list[x].name+"  </li>");
                $(filter_ul).append(filter_li);
                filter_value_list_arr.push(filter[q].value_list[x])
            }
        }
    }
}
//课程的type_id
//通过问题2筛选出来的课程
 filter_all_data=[];
 filter_all_datas=[];
 $("#investigation_course_ul").html("");
    for(var a = 0;a<course_data.length;a++){
        for(var b = 0;b<checked_direction_arr.length;b++){
            if(course_data[a].parent_id==checked_direction_arr[b]){
                filter_all_data.push(course_data[a]);
                filter_all_datas.push(course_data[a])
            var course_li = $("<li></li>");
            var course_input = $("<input id ='course_input"+course_data[a].id+"' value="+course_data[a].id+" name='check_course' type='checkbox'/>");
            var course_label = $("<label for ='course_input"+course_data[a].id+"' >"+course_data[a].name+"</label>");
            $(course_li).append(course_input);
            $(course_li).append(course_label);
            $("#investigation_course_ul").append(course_li);
                // console.log(course_data[a])
            }
        }
    }
$("input:checkbox").click(function(){
    if($(this).prop("checked")){
        $(this).parent().addClass("active")
    }else{
        $(this).parent().removeClass("active")
    }
})

 })  

 $("#filter_list").on("click",".filter_list_li", function filter_value_list_btn(){
      //选择的个数信息更新
      $("#selected_message_three_label,#selected_message_four_label").html("可以选多个")
      $("#selected_message_three,#selected_message_four").html("")
      $("#selected_message_five_label").html("单选")
     var filter_value_list_state=document.getElementsByClassName("filter_value_list");
    //  console.log($(".filter_value_list")[0][attr("data_state")])
      if($(this).attr("data_state")=="0"){
        $(this).attr("data_state","1")
        $(this).addClass("active")
      
     }else{
        $(this).attr("data_state","0")
        $(this).removeClass("active")
     } 
     var filter_same_arr=[];
     var sum0 = 0,sum1=0;
     $("li[data_state='0']").each(function(){
        sum0++;
     })
     if(sum0==filter_value_list_arr.length){
        filter_same_arr=filter_all_data;
     }
    //  var filter_data_arr = {};
    //  var filter_name_arr = [];
    var filter_level_arr=[];
    var filter_is_short_arr=[];
    var filter_is_cert=[];
    $("li[data_state='1']").each(function(){
        sum1++;
         var name=$(this).attr("name");
         var filter_id = $(this).attr("filter_id");
         if(name=="level"){
            filter_level_arr.push(filter_id)
        }else if(name=="is_short"){
            filter_is_short_arr.push(filter_id)
        }else if(name=="is_cert"){
            filter_is_cert.push(filter_id)
        }
    //筛选器筛选后的课程

    // for(var i = 0;i<filter_all_data.length;i++){
    //     if(filter_all_data[i][name]!=undefined){
    //         if(filter_all_data[i][name]==filter_id){
    //             filter_same_arr.push(filter_all_data[i])
    //         }
    //     }
    //     // else{
    //     //     filter_same_arr.push(filter_all_data[i])
    //     // }
    // }
  });
  let Conditions = {
    level: filter_level_arr,
    is_short:filter_is_short_arr,
    is_cert:filter_is_cert
}
console.log(Conditions)
  filter_same_arr = dofilter(filter_all_data,Conditions);
  console.log(filter_same_arr)
  if(sum1==filter_value_list_arr.length){
    filter_same_arr=filter_all_data;
 }
  splice_filter_same_arr = removeDuplicatedItem(filter_same_arr);
      $("#investigation_course_ul").html("");
      for(var m = 0;m<splice_filter_same_arr.length;m++){
          var course_li = $("<li></li>");
          var course_input = $("<input id ='filter_course_input"+splice_filter_same_arr[m].id+"' value="+splice_filter_same_arr[m].id+" name='check_course' type='checkbox'/>");
          var course_label = $("<label for ='filter_course_input"+splice_filter_same_arr[m].id+"'>"+splice_filter_same_arr[m].name+"</label>");
          $(course_li).append(course_input);
          $(course_li).append(course_label);
          $("#investigation_course_ul").append(course_li);
      }
    //   input 添加激活状态
      $("input:checkbox").click(function(){
        if($(this).prop("checked")){
            $(this).parent().addClass("active")
        }else{
            $(this).parent().removeClass("active")
        }
    })
 })
//  removeDuplicatedItem 数组去重
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
//  let dofilter=(condition,data)=>{
//      console.log(condition)
//     return data.filter( item => {
//         console.log(item)
//         return Object.keys( condition ).every( key => {
//             console.log(key)
//         return String( item[ key ] ).toLowerCase().includes( 
//                 String( condition[ key ] ).trim().toLowerCase() )
//             } )
//     } )
//     }
     function dofilter(array, filters) {
        const filterKeys = Object.keys(filters)
        // filters all elements passing the criteria
        return array.filter((item) => {
          // dynamically validate all filter criteria
          return filterKeys.every(key => {
              //ignore when the filter is empty Anne
            if(!filters[key].length) return true
            return !!~filters[key].indexOf(item[key])
          })
        })
      }
})