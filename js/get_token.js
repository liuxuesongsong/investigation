function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : "; expires=" + exdate.toGMTString())
}


function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}


$(document).ready(function () {
    var token = setCookie("token");
    if (token == null || undefined) {
        token = 'ieWhLCVRuY';
        setCookie("token", "ieWhLCVRuY")
    }
    $.ajax({
        type: "post",
        async: false,
        url: "http://192.168.4.69/index.php?m=survey&c=code&a=index",
        dataType: "json",
        data: {
            "act_token": token
        },
        success: function (msg) {
        },
        error: function () {
            return false;
        }
    })

})