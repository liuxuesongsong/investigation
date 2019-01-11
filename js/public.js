$(function(){
    is_selected=function (name,msg){
        is_selected_sum = 0;
        var is_selected = document.getElementsByName(name);
        for(var i = 0;i<is_selected.length;i++){
            if(is_selected[i].checked){
                is_selected_sum++;
            }
        }
        if(is_selected_sum==0){
           
            $(".main").fadeIn();
            $("#alert_msg").html(msg)
            setTimeout(close, 3000);
            //  timer = setInterval(function(){
            //     close()
            // },3000);
            // return false;
        }

    }
    alert_fun = function(msg){
        $(".main").fadeIn();
        $("#alert_msg").html(msg)
        setTimeout(close, 3000);
    }
    $("#close_alert_msg").click(function(){
        $(".main").fadeOut()
      })
       close = function(){
        $(".main").fadeOut()
        // window.clearInterval(timer);  
      }
      
})