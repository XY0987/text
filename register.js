window.onload = function () {
    // 获取元素
    let us = document.getElementById("us");//获取用户名框
    let mail = document.getElementById("mail");//获取邮箱的框
    let ps = document.getElementById("ps");//获取密码框
    let code = document.getElementById("code");//获取验证码框
    let Get_Code = document.getElementById("Get_Code");//获取获取验证码按钮
    let register_button = document.getElementById("register_button");//获取注册按钮
    let countdown = document.getElementById("countdown");//获取显示倒计时
    // 点击获取验证码按钮时获取验证码

    // 定义一个清除样式函数(obj是绑定的元素)
    var clear_style_function = function (obj) {
        obj.onclick = function () {
            obj.value = "";
            obj.className = "";
            obj.onclick=()=>{};
        };
    };
    // 定义一个添加样式的函数obj是绑定元素，reminder_text是提醒文字,name是要添加的class名字
    var add_style_function = function (obj, reminder_text, name) {
        obj.value = reminder_text;
        obj.className = name;
    };



    // 
    var Validation_Format = /^[1-9][0-9]{4,10}@qq.com$/;
    Get_Code.onclick = () => {
        var i = 60;
        countdown.innerHTML="60s后重发";
        // 判断邮箱地址格式是否正确(这里只判断了qq邮箱格式)
        if (Validation_Format.test(mail.value)) {
            countdown.style.display = "block";
            Get_Code.style.display = "none";
            var time = setInterval(function () {
                i--;
                countdown.innerHTML = i + "s后重发";
                // console.log(i);
                if (i <= 1) {
                    clearInterval(time);
                    countdown.style.display = "none";
                    Get_Code.style.display = "block";
                }
            }, 1000);
            // 格式正确可以发送请求
            $.ajax({
                type: "POST",
                url: "http://118.195.129.130:3000/user/getMailCode",
                data: {
                    mail: mail.value
                },
                dataType: "JSON",
                success: function (result) {
                    console.log(result);
                },
                error: function (err) {
                    console.log(err);
                }
            });
        } else {
            // 格式不正确或输入的不是qq邮箱
            add_style_function(mail, "请输入正确的邮箱", "Error_Reminder_Text");
            // 不正确时点击才清除默认样式
            clear_style_function(mail);
        };

    };
    // 点击注册按钮
    register_button.onclick = () => {
        // 判断输入内容是否为空且邮箱的格式是对的
        if ((us.value != "" && mail.value != "") && (ps.value != "" && code.value != "") && (Validation_Format.test(mail.value))) {
            $.ajax({
                type: "POST",
                url: "http://118.195.129.130:3000/user/reg",
                data: {
                    us: us.value,
                    ps: ps.value,
                    mail: mail.value,
                    code: code.value
                },
                dataType: "JSON",
                success: function (result) {
                    console.log(result);
                    if (result.err == 0) {
                        // 注册成功(选择是否回到登录页面)
                        let choices = confirm("回到登录页面");
                        if (choices) {
                            // 选择进入登录页面
                            window.location.href = "login.html";
                        } else {
                            us.value = "";
                            ps.value = "";
                            mail.value = "";
                            code.value = "";
                        };
                    } else {
                        // 注册失败或账号已有
                        let choices = confirm("账号已存在或注册失败(请选择继续注册还是回到登录页面)");
                        if (choices) {
                            // 选择回到主页面
                            window.location.href = "login.html";
                        } else {
                            us.value = "";
                            ps.value = "";
                            mail.value = "";
                            code.value = "";
                        };
                    };
                },
                error: function (err) {
                    console.log(err);
                }
            });
        } else if (us.value == "") {
            // 用户栏是空
            add_style_function(us, "请输入用户名", "Error_Reminder_Text");
            // 点击框时清除默认样式
            clear_style_function(us);
        } else if (mail.value == "") {
            // 邮箱是空
            add_style_function(mail, "请输入邮箱地址", "Error_Reminder_Text");
            // 点击框时清除默认样式
            clear_style_function(mail);
        } else if (ps.value == "") {
            // 密码框是空
            add_style_function(ps, "", "Error_Reminder_Text");
            // 点击框时清除默认样式
            clear_style_function(ps);
        } else if (code.value == "") {
            // 获取验证码是空
            add_style_function(code, "请输入验证码", "Error_Reminder_Text");
            // 点击框时清除默认样式
            clear_style_function(code);
        } else if (!(Validation_Format.test(mail.value))) {
            // 邮箱格式不正确
            add_style_function(mail, "请输入正确的邮箱地址", "Error_Reminder_Text");
            clear_style_function(mail);
        }
    };
};