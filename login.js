window.onload = function () {
    // 获取元素
    let us = document.getElementById("us");//获取用户账号的框
    let ps = document.getElementById("ps");//获取用户密码框
    let login_button = document.getElementById("login");//获取登录按钮
    let Forgot_password=document.getElementById("Forgot_password");//忘记密码
    login_button.onclick = () => {
        // 判断输入内容是否为空
        if (us.value != "" && ps.value != "") {
            // 输入内容不为空时点击按钮时发送请求
            $.ajax({
                type: "POST",
                url: "http://118.195.129.130:3000/user/login",
                data: {
                    us: us.value,
                    ps: ps.value
                },
                // 规定返回数据形式
                dataType: "JSON",
                // 成功执行函数
                success: function (result) {
                    console.log(result.data[0]._id);
                    // 判断结果
                    if (result.err === 0) {
                        // alert("登录成功");
                        // 登录成功实现页面跳转
                        window.location.href = "main_page.html";
                        // 写入本地储存
                        window.localStorage.a=1;
                        window.localStorage._id=result.data[0]._id;
                    } else {
                        // 登录失败改变样式并清除密码框里的内容
                        us.className = "wrong_style";
                        us.value = "账号或密码错误,请重新输入";
                        ps.value = "";
                        // alert("账号或密码错误");
                        us.onclick = () => {
                            // 登录失败改变样式并清除密码框里的内容
                            us.className = "";
                            us.value = "";
                        };
                    };
                },
                // 失败执行函数
                err: function () {
                    console.log(err);
                }
            });
        } else if (us.value == "") {
            // 账号是空
            us.className = "wrong_style";
            us.value = "请输入账号";
            us.onclick = () => {
                // 登录失败改变样式并清除密码框里的内容
                us.className = "";
                us.value = "";
            };
        } else {
            // 密码是空
            ps.className = "wrong_style";
            // ps.value="请输入密码";
            // 错误时点击才清除
            ps.onclick = () => {
                ps.className = "";
                ps.value = "";
            };
        };
    };
    // 忘记密码跳转到注册
    Forgot_password.onclick=()=>{
        if(confirm("抱歉您不能忘记密码，您可以重新注册或者想密码")){
            window.location.href="register.html";
        }
    }
};