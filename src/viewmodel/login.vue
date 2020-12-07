<template>
    <div id="back-ground">
    <div id="login-frame">
    <h3 id="login-title">用户登录</h3>
    <div class="demo-input">
        <el-row>
            <el-col :span="6">
                <i>用户名：</i>
            </el-col>
            <el-col :span="16">
            <el-input
                placeholder="请输入用户名"
                v-model="usr"></el-input>
            </el-col>
        </el-row>
    </div>
    <div class="demo-input">
        <el-row>
            <el-col :span="6">
                <i>密码：</i>
            </el-col>
            <el-col :span="16">
            <el-input
                placeholder="请输入密码"
                v-model="psw" show-password></el-input>
            </el-col>
        </el-row>
    </div>
    <el-button id="lgoin-btn" type="primary" @click=login_>登录</el-button>
    </div>
    </div>
    
</template>

<script>
    import $ from "jquery"
    export default{
        name:"vm_login",
        data:function(){
            return {
                usr:"",
                psw:""
            }
        },
        methods:{
            login_:function(){
                var _ = this
                var settings = {
                  "url": "http://www.iutyservice.xyz/api/usr/login",
                  "method": "POST",
                  
                  "data": {
                    "cmd": "login",
                    "usr": _.usr,
                    "psw": _.psw
                  }
                };
                
                $.ajax(settings).done(function (response) {
                  if(response.success){
                      _.$router.push("home")
                  }
                  else{
                      
                      _.$message.error(response.error);
                  }
                });
            }
        }
    }
</script>

<style>
    #lgoin-btn{
        
        margin-top: 30px;
    }
    .demo-input{
        margin-top:10px;
    }
    #back-ground{
        height: 100%;
        background: #eee;
        background-image: url("../assets/background.jpg");
    }
    #login-frame{
        padding-top: 150px;
    }
    #login-title{
        color:#bbb;
    }
    i{
        color: #fff;
        
    }
</style>
