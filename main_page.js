window.onload = function () {
// 获取元素-----------------------------------------------------------------------------------------
    let Avatar = document.getElementById("Avatar");//获取头像元素
    let user_name = document.getElementsByClassName("user_name")[0];//获取用户名元素
    let exit_button = document.getElementById("exit_button");//获取退出按钮
    let search_food_name = document.getElementById("search_food_name");//获取查询食物的输入框
    let food_search_button = document.getElementById("food_search_button");//获取查询食物的按钮
    let reset_button = document.getElementById("reset_button");//获取重置按钮
    let food_search_results = document.getElementsByClassName("food_search_results")[0];//获取搜索框显示结果的盒子
    let add_Food = document.getElementsByClassName("add_Food")[0];//获取添加食物和修改食物的盒子
    let food_name = document.getElementById("food_name");//获取菜名的文本框
    let food_price = document.getElementById("food_price");//获取菜品价格的文本框
    let food_typename = document.getElementById("food_typename");//获取类型名称的文本框
    let food_typeid = document.getElementById("food_typeid");//获取菜品类型的选择框
    let _id = document.getElementById("_id");//获取菜品id的文本框
    let add_Food_button_Determine = document.getElementById("add_Food_button_Determine");//获取添加食物的盒子的确定按钮
    let add_food_button_Revise = document.getElementById("add_food_button_Revise");//获取修改食物的盒子
    let add_Food_button_Cancel = document.getElementById("add_Food_button_Cancel");//获取添加食物的盒子的取消按钮
    let food_Revise_typename = document.getElementById("food_Revise_typename");//获取修改食物的新添加的类型名称文本框
    let food_add_button = document.getElementById("food_add_button");//获取添加食物的按钮
    let meau_body_childs = document.getElementsByClassName("menu_body")[0].getElementsByTagName("span");//获取左侧菜单的所有span
    let Right_content_area = document.getElementsByClassName("Right_content_area");//获取右侧的内容区
    let order_search_results = document.getElementsByClassName("order_search_results")[0];//获取订单搜索结果
    let add_order = document.getElementsByClassName("add_order")[0];//获取订单添加/修改的盒子
    let order_add_button = document.getElementById("order_add_button");//获取订单添加按钮
    let order_button_Determine = document.getElementById("order_button_Determine");//获取订单添加确定的按钮
    let order_button_Revise = document.getElementById("order_button_Revise");//获取订单修改确定的按钮
    let order_button_Cancel = document.getElementById("order_button_Cancel");//获取订单取消的按钮
    let order_us = document.getElementById("order_us");//获取订单中的用户名的文本框
    let order_amount = document.getElementById("order_amount");//获取订单金额的文本框
    let order_phone = document.getElementById("order_phone");//获取手机号的文本框
    let order_id = document.getElementById("order_id");//获取id的文本框
    let order_pay = document.getElementById("order_pay");//获取支付状态的选择框
    let food_add_results = document.getElementsByClassName("food_add_results")[0];//获取显示新添加的食物的信息
    let user_name_repetition = document.getElementById("user_name");//获取用户中心的左侧用户名显示
    let user_phone = document.getElementById("user_phone");//获取用户中心的左侧手机号
    let user_age = document.getElementById("user_age");//获取用户中心左侧年龄
    let user_sex = document.getElementById("user_sex");//获取用户中心左侧性别
    let user_id = document.getElementById("user_id");//获取用户中心左侧id
    let Input_User_name = document.getElementById("Input_User_name");//获取用户中心右侧用户名框
    let Input_User_age = document.getElementById("Input_User_age");//获取年龄框
    let Input_User_phone = document.getElementById("Input_User_phone");//获取手机号框
    let User_sex = document.getElementById("User_sex");//获取性别框
    let Input_id = document.getElementById("Input_id");//获取id框
    let user_save_information = document.getElementById("user_save_information");//获取保存按钮
    let search_order_name = document.getElementById("search_order_name");//获取搜索订单的搜索框
    let order_search_button = document.getElementById("order_search_button");//获取搜索订单的按钮
    let search_order_results = document.getElementsByClassName("search_order_results")[0];//获取搜索其他用户订单的结果框
    let search_orthers_order_Determine = document.getElementById("search_orthers_order_Determine");//获取搜索其他用户订单的搜索框
    let Food_previous_page = document.getElementById("Food_previous_page");//获取上一页按钮
    let Food_next_page = document.getElementById("Food_next_page");//获取下一页按钮
    let Food_number_of_pages = document.getElementById("Food_number_of_pages");//获取显示页数
    let Order_previous_page = document.getElementById("Order_previous_page");//获取搜索其他用户订单的上一页按钮
    let Order_number_of_pages = document.getElementById("Order_number_of_pages");//获取搜索其他用户订单的页数
    let Order_next_page = document.getElementById("Order_next_page");//获取搜索其他用户订单的下一页按钮
    let super_administrator = document.getElementsByClassName("super_administrator")[0];//获取超级管理员的显示结果的盒子
    let revise_us_All = document.getElementsByClassName("revise_us_All")[0];//获取修改其他用户信息的显示框
    let r_id = document.getElementById("r_id");//获取修改其他用户信息的id框
    let r_us = document.getElementById("r_us");//获取修改其他用户的us框
    let r_age = document.getElementById("r_age");//获取修改其他用户的年龄框
    let r_sex = document.getElementById("r_sex");//获取修改其他用户信息的性别选择框
    let r_Determine = document.getElementById("r_Determine");//获取修改其他用户的确定按钮
    let r_Cancel = document.getElementById("r-Cancel");//获取修改其他用户的取消按钮
    let Super_previous_page = document.getElementById("Super_previous_page");//获取超级管理员的上一页按钮
    let Super_number_of_pages = document.getElementById("Super_number_of_pages");//获取超级管理员的显示页数
    let Super_next_page = document.getElementById("Super_next_page");//获取超级管理员的下一页按钮
    let Food_pages_select = document.getElementById("Food_pages_select");//获取食物中心的一页显示多少数据
    let Order_pages_select = document.getElementById("Order_pages_select");//获取订单分页查询一页显示信息的数量
    let Super_pages_select = document.getElementById("Super_pages_select");//获取超级管理员分页显示的信息数量
    let order_reset_button = document.getElementById("order_reset_button");//获取搜索其他用户订单信息的重置按钮
    let number_of_pages = document.getElementsByClassName("number_of_pages");//获取显示页数的盒子


// 定义重复使用的变量-----------------------------------------------------------------------------------------------------------------------------
    var index_food = 1;
    var index_order = 1;
    var index_Us = 1;
    // 声明一个变量代表一页中显示的信息数量
    var food_numbers = 10;
    var Order_numbers = 10;
    var Us_numbers = 10;
    // 声明一个字符串重置时使用
    var food_default_content = `
                                <ul style="background-color: #F8F8F9;">
                                    <li>菜名</li>
                                    <li>价格</li>
                                    <li>描述</li>
                                    <li>类型名称</li>
                                    <li>类型简写</li>
                                    <li style="display:inline-block;">操作框</li>
                                </ul>`;
    // 声明一个变量用于记录搜索(食物)的字符串
    var food_record_search_results = '';
    // 声明一个变量用于记录搜索的(订单)字符串
    var order_record_search_results;
    // 声明一个变量用于记录搜索其他用户订单的字符串
    var Search_for_other_user_orders = "";
    // 定义一个默认订单中心的默认字符串
    var order_default_content = `<ul style="background-color: #F8F8F9;">
            <li>用户名</li>
            <li>订单金额</li>
            <li>客户手机号</li>
            <li>支付状态(0:未支付,1:已支付)</li>
            <li style="display:inline-block;">操作框</li>
        </ul>`;
    // 声明一个变量来记录新添加的食物信息(方便加到指定信息框里边)
    var Add_food_information = "";
    // 定义超级管理员的默认显示值
    var super_administrator_default = `<ul>
    <li>用户名</li>
    <li>年龄</li>
    <li>性别</li>
    <li>手机号</li>
    <li>操作框</li>
</ul>`;
    // 定义超级管理员的结果的值
    var super_administrator_result = "";


// 声明函数----------------------------------------------------------------------------------------------------------------------------------
    // 声明一个函数来为空的值设定样式(name是要添加的class名字)
    var add_style_function = function (obj, name) {
        obj.value = "请输入内容";
        obj.className = name;
        obj.onclick = () => {
            obj.value = "";
            obj.className = "";
            obj.onclick = () => { };
        };
        // obj.onclick=()=>{};
    };
    // 尝试封装删除函数(传参:接口地址，绑定单击函数对象，删除对象匹配的值(如id))
    // 传递第三个函数会一直刷新?
    var delete_function = function (obj, url, fn) {
        // 为每一个需要单击函数的对象绑定一个对象
        for (let i = 0; i < obj.length; i++) {
            obj[i].onclick = () => {
                // 单击删除对象进一步判断是否删除
                if (confirm("确定删除")) {
                    // 确定删除进行删除
                    $.ajax({
                        // 这里的删除都是post请求
                        type: "POST",
                        url: url,
                        data: {
                            _id: obj[i].parentNode.parentNode.lastElementChild.innerHTML
                        },
                        success: function (result) {
                            // obj
                            // 删除成功
                            // fn;
                            obj[i].parentNode.parentNode.remove();
                            console.log(result);
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    });
                };
            };
        };
    };
    // 菜品中心修改功能函数
    var revise_food_function = function () {
        let Food_Revise = document.getElementsByClassName("Food_Revise");
        for (let i = 0; i < Food_Revise.length; i++) {
            Food_Revise[i].onclick = () => {
                // 将添加食物的盒子中的添加的确定按钮不显示
                add_Food_button_Determine.style.display = "none";
                add_food_button_Revise.style.display = "block";
                // 将对应的盒子显现出来
                _id.style.display = "block";
                add_Food.style.display = "block";
                // 将这个按钮的第一个li赋值给Food_Revise_parents
                let Food_Revise_parents = Food_Revise[i].parentNode.parentNode.firstElementChild;
                // console.log(Food_Revise_parents.innerHTML);
                // 将对应的值显现到对应的文本框里边里边
                food_name.value = Food_Revise_parents.innerHTML;//名字
                food_price.value = Food_Revise_parents.nextElementSibling.innerHTML;//价格
                food_typename.value = Food_Revise_parents.nextElementSibling.nextElementSibling.innerHTML;//菜品描述框
                food_Revise_typename.value = Food_Revise_parents.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;//类型名称
                food_typeid.value = Food_Revise_parents.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;//菜品选择框
                _id.value = Food_Revise_parents.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;//id值
                // 点击确定按钮将数据上传并显现修改的值
                add_food_button_Revise.onclick = () => {
                    // 判断值是否为空
                    if (food_name.value != "") {
                        // 不为空发送请求
                        // 将这个盒子取消
                        add_Food.style.display = "none";
                        $.ajax({
                            type: "POST",
                            url: "http://118.195.129.130:3000/food/update",
                            data: {
                                name: food_name.value,
                                price: food_price.value,
                                desc: food_typename.value,
                                typename: food_Revise_typename.value,
                                typeid: food_typeid.value,
                                _id: _id.value
                            },
                            success: function (result) {
                                // 获取最新的数据
                                if (number_of_pages[0].style.display == "none") {
                                    // 页数的盒子没有显现，重新获取搜索的数据
                                    search_request_function();
                                } else if (Right_content_area[3].style.display == "grid") {
                                    Food_Revise_parents.innerHTML = food_name.value;//名字
                                    Food_Revise_parents.nextElementSibling.innerHTML = food_price.value;//价格
                                    Food_Revise_parents.nextElementSibling.nextElementSibling.innerHTML = food_typename.value;//菜品描述框
                                    Food_Revise_parents.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = food_Revise_typename.value;//类型名称
                                    Food_Revise_parents.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = food_typeid.value;//菜品选择框
                                    Food_Revise_parents.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = _id.value;//id值
                                } else {
                                    Paging_query_function_food(index_food);
                                }
                            },
                            error: function (err) {
                                console.log(err);
                            }
                        });
                    } else if (food_name.value == "") {
                        // 有值是空要提醒
                        food_name.style.border = "1px solid red";
                        food_name.value = "请输入名字";
                        food_name.style.color = "red";
                        food_name.onclick = () => {
                            food_name.style.border = "1px solid black";
                            food_name.value = "";
                            food_name.style.color = "";
                        };
                    };
                };
            };
        };
    };
    // 封装一个分页查询的函数(page表示页数,per_page表示一页有多少信息)
    var Paging_query = function (url, page, per_page, fn) {
        $.ajax({
            type: "POST",
            url: url,
            async: true,
            data: {
                page: page,
                per_page: per_page
            },
            success: function (result) {
                fn(result);
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
    // 将查询菜品完毕后的信息储存并显现出来的函数
    var result_storage = function (result) {
        food_record_search_results = "";
        for (let i = 0; i < result.data.length; i++) {
            let { name, price, typeid, typename, _id, desc } = result.data[i];
            food_record_search_results += `<ul>
                <li>${name}</li>
                <li>${price}</li>
                <li>${desc}</li>
                <li>${typename}</li>
                <li>${typeid}</li>
                <li>
                    <button class="Food_Revise"><i class="iconfont">&#xe606;</i>修改</button>
                    <button class="Food_Delete"><i class="iconfont">&#xe8b6;</i>删除</button>
                </li>
                <li>${_id}</li>
            </ul>`;
            // console.log(food_record_search_results);
        }
        food_search_results.innerHTML = food_default_content + food_record_search_results;
    }
    // 将查询订单完毕后的信息储存并显现出来的函数
    var result_storage_order = function (result) {
        Search_for_other_user_orders = "";
        for (let i = 0; i < result.data.length; i++) {
            let { us, amount, phone, pay, _id } = result.data[i];
            Search_for_other_user_orders += `<ul>
                <li>${us}</li>
                <li>${amount}</li>
                <li>${phone}</li>
                <li>${pay}</li>
                <li>
                    <button class="Search_Order_Revise"  onclick="text_click(this)"><i class="iconfont">&#xe606;</i>修改</button>
                    <button class="Search_Order_Delete"><i class="iconfont">&#xe8b6;</i>删除</button>
                </li>
                <li style="display:none";>${_id}</li>
             </ul>`;
        };
        search_order_results.innerHTML = order_default_content + Search_for_other_user_orders;
    }
    // 将查询其他用户信息完毕后的信息储存并显现的函数
    var result_storage_Us = function (result) {
        // 每次执行时要把结果值清空
        super_administrator_result = "";
        for (let i = 0; i < result.data.length; i++) {
            let { us, age, sex, phone, _id } = result.data[i];
            super_administrator_result += `<ul>
            <li>${us}</li>
            <li>${age}</li>
            <li>${sex}</li>
            <li>${phone}</li>
            <li>
                <button class="Us_Revise"><i class="iconfont">&#xe606;</i>修改</button>
                <button class="Us_Delete"><i class="iconfont">&#xe8b6;</i>删除</button>
            </li>
            <li style="display:none;">${_id}</li>
        </ul>`;
        };
        super_administrator.innerHTML = super_administrator_default + super_administrator_result;
    }
    // 订单修改的函数
    var revise_order_function = function () {
        let Search_Order_Revise = document.getElementsByClassName("Search_Order_Revise");
        for (let i = 0; i < Search_Order_Revise.length; i++) {
            // 绑定修改函数
            Search_Order_Revise[i].onclick = () => {
                let Order_Revise_other_parents = Search_Order_Revise[i].parentNode.parentNode.firstElementChild;
                // 将修改的盒子显现出来(将添加的确定按钮隐藏，将修改的确定按钮显现)
                add_order.style.display = "block";
                order_button_Determine.style.display = "none";
                order_button_Revise.style.display = "none";
                order_id.style.display = "block";
                search_orthers_order_Determine.style.display = "block";
                // 将对应的值显现到对应文本框里边
                order_us.value = Order_Revise_other_parents.innerHTML;
                order_amount.value = Order_Revise_other_parents.nextElementSibling.innerHTML;
                order_phone.value = Order_Revise_other_parents.nextElementSibling.nextElementSibling.innerHTML;
                order_pay.value = Order_Revise_other_parents.nextElementSibling.nextElementSibling.nextSibling.innerHTML;
                order_id.value = Order_Revise_other_parents.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
                // 点击订单的修改的确定按钮上传信息
                search_orthers_order_Determine.onclick = () => {
                    $.ajax({
                        type: "POST",
                        url: "http://118.195.129.130:3000/order/update_order",
                        data: {
                            us: order_us.value,
                            amount: order_amount.value,
                            phone: order_phone.value,
                            pay: order_pay.value,
                            _id: order_id.value
                        },
                        success: function (result) {
                            // console.log(result);
                            if (number_of_pages[1].style.display == "none") {
                                order_search_others_function();
                            } else {
                                Paging_quare_function_order(index_order);
                            }
                            // order_search_function();
                            add_order.style.display = "none";
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    });
                }
            }
        }
    };
    // 登录页面后更新用户信息
    var get_user_message = function () {
        $.ajax({
            type: "POST",
            url: "http://118.195.129.130:3000/user/inquire",
            data: {
                _id: window.localStorage._id
            },
            dataType: "JSON",
            success: function (result) {
                // console.log(result.data[0]);
                // 修改信息(包括用户中心的信息)
                Avatar.src = "http://118.195.129.130:3000" + result.data[0].url;
                user_name.innerHTML = result.data[0].us;
                user_name_repetition.innerHTML = result.data[0].us;
                Input_User_name.value = result.data[0].us;
                user_age.innerHTML = result.data[0].age;
                Input_User_age.value = result.data[0].age;
                user_phone.innerHTML = result.data[0].phone;
                Input_User_phone.value = result.data[0].phone;
                user_sex.innerHTML = result.data[0].sex;
                User_sex.value = result.data[0].sex;
                user_id.innerHTML = result.data[0]._id;
                Input_id.value = result.data[0]._id;
            },
            error: function (err) {
                console.log(err);
            }
        });
    }


// 登录/退出------------------------------------------------------------------------------------------------------------------------------------
    // 判断是否登录(没有登录回到登录页面)
    if (window.localStorage.a != 1) {
        // window.location.href = "./login.html";
    }
    get_user_message();
    // 点击退出按钮退出页面
    exit_button.onclick = () => {
        if (confirm("确定退出吗")) {
            $.ajax({
                type:"POST",
                url:"http://118.195.129.130:3000/user/out",
                data:{},
                success:function(result){
                    console.log(result);
                    window.localStorage.clear();
                    window.location.href = "./login.html";
                },
                error:function(err){
                    alert("退出失败");
                }
            });
        };
    };


// 菜单栏的操作-----------------------------------------------------------------------------------------------------------------------------------
    // 实现点击左侧的菜单，右侧内容要改变(改变样式函数)
    var change_style = function () {
        for (var i = 0; i < meau_body_childs.length; i++) {
            meau_body_childs[i].onclick = function () {
                for (var j = 0; j < meau_body_childs.length; j++) {
                    // 清除默认样式
                    meau_body_childs[j].num = j;
                    meau_body_childs[j].className = "";
                    // 将右侧的显示全部取消
                    Right_content_area[j].style.display = "none";
                }
                this.className = "menu_bar_selection_style";
                // console.log(this.num)
                Right_content_area[this.num].style.display = "grid";
                // 实现内容转换
            }
        }

    };
    change_style();


// 食物中心的功能-----------------------------------------------------------------------------------------------------------------------------------
    // 点击搜索按钮实现搜索菜品功能(食物)
    var search_request_function = food_search_button.onclick = () => {
        // 判断输入内容是否为空
        if (search_food_name.value != "") {
            // 点击搜索后将存储搜索结果的变量清空
            food_record_search_results = "";
            // 输入框内容不是空，发送请求(把页数的盒子隐藏)
            number_of_pages[0].style.display = "none";
            $.ajax({
                type: "POST",
                url: "http://118.195.129.130:3000/food/getInfoByKw",
                data: {
                    kw: search_food_name.value
                },
                success: function (result) {
                    // console.log(result);
                    if (result.data.length == 0) {
                        // 如果没有该食物则弹窗说明一下
                        alert("没有该食物");
                    }
                    // 将搜索的结果在结果框中显示
                    result_storage(result);
                    // 设定删除和修改功能(只有搜索完才会有添加修改的需求)
                    let Food_Delete = document.getElementsByClassName("Food_Delete");
                    delete_function(Food_Delete, "http://118.195.129.130:3000/food/del");
                    // 为新添加的修改按钮绑定单击函数(食物)
                    revise_food_function();
                },
                error: function (err) {
                    console.log(err);
                }
            });
        } else {
            // 输入内容是空
        }
    };
    // 点击重置按钮时搜索框内容为空，结果框的内容是默认值
    reset_button.onclick = () => {
        food_search_results.innerHTML = food_default_content;
        search_food_name.value = "";
        Paging_query_function_food(index_food);
        number_of_pages[0].style.display = "grid";
    };
    // 添加食物的盒子的取消按钮的功能相同(点击时将该盒子取消显示)
    add_Food_button_Cancel.onclick = () => {
        add_Food.style.display = "none";
    };
    // 实现新增食物功能
    food_add_button.onclick = () => {
        add_Food.style.display = "block";
        add_food_button_Revise.style.display = "none";
        add_Food_button_Determine.style.display = "block";
        _id.style.display = "none";
        // 清除数据方便下面的添加按钮使用
        food_name.value = "";
        food_price.value = "";
        food_typename.value = "";
        food_Revise_typename.value = "";
        food_typeid.value = "";
        // 点击确定按钮上传
        add_Food_button_Determine.onclick = () => {
            // 把盒子隐藏
            add_Food.style.display = "none"
            $.ajax({
                type: "POST",
                url: "http://118.195.129.130:3000/food/add",
                data: {
                    name: food_name.value,
                    price: food_price.value,
                    desc: food_Revise_typename.value,
                    typename: food_typename.value,
                    typeid: food_typeid.value
                },
                success: function (result) {
                    // 添加成功要把信息添加到新增物品(添加食物)
                    console.log(result.data);
                    Add_food_information += `<ul style="color:red">
                    <li>`+ food_name.value + `</li>
                    <li>`+ food_price.value + `</li>
                    <li>`+ food_Revise_typename.value + `</li>
                    <li>`+ food_typename.value + `</li>
                    <li>`+ food_typeid.value + `</li>
                    <li>
                            <button class="Food_Revise"><i class="iconfont">&#xe606;</i>修改</button>
                            <button class="Food_Delete"><i class="iconfont">&#xe8b6;</i>删除</button>
                    </li>
                    <li>`+ result.data[0]._id + `</li>
                </ul>`;
                    food_add_results.innerHTML = food_default_content + Add_food_information;
                    // 需要添加删除和修改的功能
                    let Food_Delete = document.getElementsByClassName("Food_Delete");
                    for (let i = 0; i < Food_Delete.length; i++) {
                        // 为每一个删除按钮绑定一个单击函数
                        Food_Delete[i].onclick = () => {
                            if (confirm("确定要删除吗?")) {
                                // 确定删除把这个东西从数据库中删除，并页面中删除
                                $.ajax({
                                    type: "POST",
                                    url: "http://118.195.129.130:3000/food/del",
                                    data: {
                                        // 最后一个li存放的是_id的值(Food_Delete是按钮)
                                        _id: Food_Delete[i].parentNode.parentNode.lastElementChild.innerHTML
                                    },
                                    success: function (result) {
                                        // 删除成功删除掉ul
                                        Food_Delete[i].parentNode.parentNode.remove();
                                        // 判断是否还有新增元素
                                        if (food_add_results.getElementsByTagName("ul").length == 1) {
                                            food_add_results.innerHTML = `<span style="color:red;">没有新添加元素</span>`;
                                        }

                                    },
                                    error: function (err) {
                                        console.log(err);
                                    },
                                });

                            };
                        };
                    };
                    // 为新添加的修改按钮绑定单击函数(食物)
                    revise_food_function();
                },
                error: function (err) {
                    console, log(err);
                }
            });
        }
    }


// 订单中心的功能--------------------------------------------------------------------------------------------------------------------------------
    // 订单中心(点击订单中心时查询本用户订单),该方法把前边的覆盖了所以要重新修改样式
    var order_search_function = meau_body_childs[1].onclick = () => {
        // 每次发送请求前都把存放查询订单数据的值清空
        order_record_search_results = "";
        change_style();
        // 发送请求
        $.ajax({
            type: "POST",
            url: "http://118.195.129.130:3000/order/getInfoByKw_order",
            data: {
                kw: user_name.innerHTML
            },
            success: function (result) {
                // 显示到指定的框里边
                // result_storage_order(result);
                if (result.data.length != 0) {
                    for (let i = 0; i < result.data.length; i++) {
                        let { us, amount, phone, pay, _id } = result.data[i];
                        order_record_search_results += `<ul>
                    <li>${us}</li>
                    <li>${amount}</li>
                    <li>${phone}</li>
                    <li>${pay}</li>
                    <li>
                        <button class="Order_Revise"><i class="iconfont">&#xe606;</i>修改</button>
                        <button class="Order_Delete"><i class="iconfont">&#xe8b6;</i>删除</button>
                </li>
                <li style="display:none";>${_id}</li>
                </ul>`;
                    };
                    order_search_results.innerHTML = order_default_content + order_record_search_results;
                } else {
                    order_search_results.innerHTML = `<span style="color:red";>没有订单</span>`;
                };

                // 为新添加的删除和修改按钮添加功能
                let Order_Delete = document.getElementsByClassName("Order_Delete");
                let Order_Revise = document.getElementsByClassName("Order_Revise");
                // delete_function(Order_Delete, "http://118.195.129.130:3000/order/del_order", order_search_function());
                delete_function(Order_Delete, "http://118.195.129.130:3000/order/del_order");
                for (let i = 0; i < Order_Revise.length; i++) {
                    // 绑定修改函数
                    Order_Revise[i].onclick = () => {
                        let Order_Revise_parents = Order_Revise[i].parentNode.parentNode.firstElementChild;
                        // 将修改的盒子显现出来(将添加的确定按钮隐藏，将修改的确定按钮显现)
                        add_order.style.display = "block";
                        order_button_Determine.style.display = "none";
                        order_button_Revise.style.display = "block";
                        order_id.style.display = "block";
                        search_orthers_order_Determine.style.display = "none";
                        // 将对应的值显现到对应文本框里边
                        order_us.value = Order_Revise_parents.innerHTML;
                        order_amount.value = Order_Revise_parents.nextElementSibling.innerHTML;
                        order_phone.value = Order_Revise_parents.nextElementSibling.nextElementSibling.innerHTML;
                        order_pay.value = Order_Revise_parents.nextElementSibling.nextElementSibling.nextSibling.innerHTML;
                        order_id.value = Order_Revise_parents.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
                        // 点击订单的修改的确定按钮上传信息
                        order_button_Revise.onclick = () => {
                            $.ajax({
                                type: "POST",
                                url: "http://118.195.129.130:3000/order/update_order",
                                data: {
                                    us: order_us.value,
                                    amount: order_amount.value,
                                    phone: order_phone.value,
                                    pay: order_pay.value,
                                    _id: order_id.value
                                },
                                success: function (result) {
                                    order_search_function();
                                    add_order.style.display = "none";
                                },
                                error: function (err) {
                                    console.log(err);
                                }
                            });
                        }
                    }
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
    // 点击订单取消按钮不显示订单修改的添加的盒子
    order_button_Cancel.onclick = () => {
        add_order.style.display = "none";
    };
    // 点击订单的添加按钮将对应的盒子显现
    order_add_button.onclick = () => {
        add_order.style.display = "block";
        order_id.style.display = "none";
        // 隐藏订单修改的确定按钮,显现添加确定的按钮
        order_button_Determine.style.display = "block";
        order_button_Revise.style.display = "none";
        search_orthers_order_Determine.style.display = "none";
        // 将文本框里边的值修改成默认值
        order_us.value = "";
        order_amount.value = "";
        order_phone.value = "";
        order_pay.value = "";
        // 点击添加的确定按钮提交数据
        order_button_Determine.onclick = () => {
            if ((order_us.value != "" && order_amount.value != "") && (order_amount.value != "" && order_pay.value != "")) {
                // 输入值不是空
                $.ajax({
                    type: "POST",
                    url: "http://118.195.129.130:3000/order/add_order",
                    data: {
                        us: order_us.value,
                        amount: order_amount.value,
                        phone: order_phone.value,
                        pay: order_pay.value
                    },
                    success: function (result) {
                        order_search_function();
                        add_order.style.display = "none";
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            } else if (order_us.value == "") {
                add_style_function(order_us, "Check_if_the_value_is_empty");
            } else if (order_amount.value == "") {
                add_style_function(order_amount, "Check_if_the_value_is_empty");
            }
        };
    };


// 用户中心-------------------------------------------------------------------------------------------------------------------------------------
    user_save_information.onclick = () => {
        // 点击保存按钮上传数据(判断数据是否为空及手机号是否正确)
        if (Input_User_name.value != "" && Input_id.value != "" && Input_User_phone.value != "" && (/^1[3|4|5|7|8]\d{9}$/.test(Input_User_phone.value))) {
            $.ajax({
                type: "POST",
                url: "http://118.195.129.130:3000/user/mod",
                data: {
                    us: Input_User_name.value,
                    _id: Input_id.value,
                    phone: Input_User_phone.value,
                    age: Input_User_age.value,
                    sex: User_sex.value
                },
                success: function (result) {
                    // 如果修改id值修改储存在本地的id值
                    window.localStorage._id = Input_id.value;
                    get_user_message();
                },
                error: function (err) {
                    console.log(err);
                }
            });
        } else if (Input_User_name.value == "") {
            add_style_function(Input_User_name, "Check_if_the_value_is_empty");
        } else if (Input_id.value == "") {
            add_style_function(Input_id, "Check_if_the_value_is_empty");
        } else if (Input_User_phone == "") {
            add_style_function(Input_User_phone, "Check_if_the_value_is_empty");
        } else if (!(/^1[3|4|5|7|8]\d{9}$/.test(Input_User_phone.value))) {
            alert("请输入正确的手机号");
        }
    };


// 搜索其他用户订单-----------------------------------------------------------------------------------------------------------------------------
    order_search_button.onclick = () => {
        order_search_others_function();
    }
    // 点击重置按钮
    order_reset_button.onclick = () => {
        search_order_name.value = "";
        Paging_quare_function_order(index_order);
        number_of_pages[1].style.display = "grid";
    }
    function order_search_others_function() {
        // 点击搜索订单按钮判断是否为空
        if (search_order_name.value != "") {
            Search_for_other_user_orders = "";
            // 不是空发送请求(把显示页数的盒子隐藏)
            number_of_pages[1].style.display = "none";
            $.ajax({
                type: "POST",
                url: "http://118.195.129.130:3000/order/getInfoByKw_order",
                data: {
                    kw: search_order_name.value
                },
                success: function (result) {
                    search_order_results.innerHTML = order_default_content;
                    for (let i = 0; i < result.data.length; i++) {
                        let { us, amount, phone, pay, _id } = result.data[i];
                        Search_for_other_user_orders += `<ul>
                            <li>${us}</li>
                            <li>${amount}</li>
                            <li>${phone}</li>
                            <li>${pay}</li>
                            <li>
                                <button class="Search_Order_Revise"  onclick="text_click(this)"><i class="iconfont">&#xe606;</i>修改</button>
                                <button class="Search_Order_Delete"><i class="iconfont">&#xe8b6;</i>删除</button>
                            </li>
                            <li style="display:none";>${_id}</li>
                         </ul>`;
                    };
                    search_order_results.innerHTML = order_default_content + Search_for_other_user_orders;
                    let Search_Order_Delete = document.getElementsByClassName("Search_Order_Delete");
                    delete_function(Search_Order_Delete, "http://118.195.129.130:3000/order/del_order");
                    revise_order_function();

                },
                error: function (err) {
                    console.log(err);
                }
            });
        } else {
            // 输入栏是空
        }
    }


// 菜品中心的分页查询功能---------------------------------------------------------------------------------------------------------------------
    let Paging_query_function_food = function (index) {
        Paging_query("http://118.195.129.130:3000/food/getInfoByPage", index, food_numbers, result_storage);
        let Food_Delete = document.getElementsByClassName("Food_Delete");
        setTimeout(function () {
            delete_function(Food_Delete, "http://118.195.129.130:3000/food/del");
            revise_food_function();
        }, 1000);
        // clearTimeout(time);
    }
    Paging_query_function_food(index_food);
    // 点击上一页和下一页
    Food_previous_page.onclick = () => {
        // 点击上一页,判断是否为第一页
        if (index_food == 1) {
            alert("当前是第一页");
        } else {
            // 不是第一页
            index_food--;
            Paging_query_function_food(index_food);
            Food_number_of_pages.innerHTML = index_food;
        };
    };
    Food_next_page.onclick = () => {
        // 下一页
        index_food++;
        // 发送请求
        $.ajax({
            type: "POST",
            url: "http://118.195.129.130:3000/food/getInfoByPage",
            data: {
                page: index_food,
                per_page: food_numbers
            },
            success: function (result) {
                // console.log(result);
                if (result.data.length != 0) {
                    // 长度不是0可以显现
                    Paging_query_function_food(index_food);
                    Food_number_of_pages.innerHTML = index_food;
                } else {
                    index_food--;
                    alert("这是最后一页");
                    Food_number_of_pages.innerHTML = index_food;
                };
            },
            error: function (err) {
                console.log(err);
            }
        });
    };
    // 为菜品中心绑定显示不同信息数量的函数
    Food_pages_select.onclick = () => {
        // 重新发送请求
        food_numbers = Food_pages_select.value;
        Paging_query_function_food(index_food);
    }


// 搜索其他用户的分页查询功能---------------------------------------------------------------------------------------------------------------------
    // 为搜索其他用户中心绑定显示不同信息数量的函数
    Order_pages_select.onclick = () => {
        Order_numbers = Order_pages_select.value;
        Paging_quare_function_order(index_order);
    };
    // 搜索其他用户订单的的分页查询
    let Paging_quare_function_order = function (index) {
        Paging_query("http://118.195.129.130:3000/order/getInfoByPage_order", index, Order_numbers, result_storage_order);
        let Search_Order_Delete = document.getElementsByClassName("Search_Order_Delete");
        setTimeout(function () {
            delete_function(Search_Order_Delete, "http://118.195.129.130:3000/order/del_order");
            revise_order_function();
        }, 1000);
    };
    Paging_quare_function_order(index_order);
    Order_previous_page.onclick = () => {
        if (index_order == 1) {
            alert("这是第一页");
        } else {
            index_order--;
            Paging_quare_function_order(index_order);
            Order_number_of_pages.innerHTML = index_order;
        };
    };
    Order_next_page.onclick = () => {
        index_order++;
        $.ajax({
            type: "POST",
            url: "http://118.195.129.130:3000/order/getInfoByPage_order",
            data: {
                page: index_order,
                per_page: Order_numbers
            },
            success: function (result) {
                if (result.data.length != 0) {
                    Paging_quare_function_order(index_order);
                    Order_number_of_pages.innerHTML = index_order;
                } else {
                    index_order--;
                    alert("这是最后一页");
                    Order_number_of_pages.innerHTML = index_order;
                };
            },
            error: function (err) {
                console.log(err);
            }
        });
    };


// 超级管理员---------------------------------------------------------------------------------------------------------------------------------
    // 修改函数
    let revise_Us_function = function () {
        let Us_Revise = document.getElementsByClassName("Us_Revise");
        for (let i = 0; i < Us_Revise.length; i++) {
            Us_Revise[i].onclick = () => {
                revise_us_All.style.display = "block";
                let revise_us_All_partents = Us_Revise[i].parentNode.parentNode.firstElementChild;
                r_us.value = revise_us_All_partents.innerHTML;
                r_age.value = revise_us_All_partents.nextElementSibling.innerHTML;
                r_sex.value = revise_us_All_partents.nextElementSibling.nextElementSibling.innerHTML;
                r_id.value = Us_Revise[i].parentNode.parentNode.lastElementChild.innerHTML;
            }
        }
    }
    // 绑定删除和修改的函数
    let super_administrator_function = function (index) {
        Paging_query("http://118.195.129.130:3000/users/getInfoByPage_users", index, Us_numbers, result_storage_Us);
        let Us_Delete = document.getElementsByClassName("Us_Delete");
        setTimeout(function () {
            delete_function(Us_Delete, "http://118.195.129.130:3000/users/del_users");
            revise_Us_function();
        }, 10000);
    };
    super_administrator_function(index_Us);
    // 点击确定按钮提交数据
    r_Determine.onclick = () => {
        $.ajax({
            type: "POST",
            url: "http://118.195.129.130:3000/users/update_users",
            data: {
                _id: r_id.value,
                us: r_us.value,
                age: r_age.value,
                sex: r_sex.value
            },
            success: function (result) {
                // console.log(result);
                super_administrator_function(index_Us);
                revise_us_All.style.display = "none";
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
    // 点击取消按钮将对应盒子隐藏
    r_Cancel.onclick = () => {
        revise_us_All.style.display = "none";
    };
    // 分页查询
    Super_previous_page.onclick = () => {
        if (index_Us == 1) {
            alert("这是第一页");
        } else {
            index_Us--;
            super_administrator_function(index_Us);
            Super_number_of_pages.innerHTML = index_Us;
        }
    }
    Super_next_page.onclick = () => {
        index_Us++;
        $.ajax({
            type: "POST",
            url: "http://118.195.129.130:3000/users/getInfoByPage_users",
            data: {
                page: index_Us,
                per_page: Us_numbers
            },
            success: function (result) {
                if (result.data.length != 0) {
                    super_administrator_function(index_Us);
                    Super_number_of_pages.innerHTML = index_Us;
                } else {
                    index_Us--;
                    alert("这是最后一页");
                    Super_number_of_pages.innerHTML = index_Us;
                };
            },
        });
    };
    // 为超级管理员绑定显示不同信息数量的函数
    Super_pages_select.onclick = () => {
        Us_numbers = Super_pages_select.value;
        super_administrator_function(index_Us);
    }

//分页查询------------------------------------------------------------------------------------------------------------

};