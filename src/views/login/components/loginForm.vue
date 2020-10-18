<template>
    <div class="login-form">
        <van-form validate-first @failed="onFailed" @submit="registerSubmit">
            <van-field
                    v-model="formData.username"
                    label="账号："
                    name="validator"
                    placeholder="请输入您的QQ"
                    :rules="[{ validator, message: '请输入6到16位' }]"
            />
            <van-field
                    type="password"
                    v-model="formData.password"
                    label="密码："
                    name="asyncValidator"
                    placeholder="请输入您的密码"
                    :rules="[{ validator, message: '请输入6到16位' }]"
            />
            <div style="margin: 4.44vw;">
                <van-button round block type="info" native-type="submit">
                    登录
                </van-button>
            </div>
        </van-form>
    </div>

</template>

<script>
import {login} from '@/api/login'
//import {sleep} from "@/utils/sleep";
import {setToken, setUserInfo} from "@/utils/auth";

export default {
    name: "login-form",
    data() {
        return {
            formData: {
                username: '',
                password: '',
            },
            ifShow: false,
        };
    },
    methods: {
        // 校验函数返回 true 表示校验通过，false 表示不通过
        validator(val) {
            return /^.{6,16}$/.test(val);
        },
        onFailed(errorInfo) {
            console.log('failed', errorInfo);
        },
        async registerSubmit() {
            let _self = this;
            let res = await login(this.formData);
            /*_self.$toast.loading({
                message: '登录中...',
                forbidClick: true,
            });*/
            if (res.data.code === 200) {
                setToken(res.data.token);
                setUserInfo(res.data.id);
                await _self.$router.push('home');
            }else {
                 await this.$dialog.alert({
                    message: res.data.msg,
                })
            }
            console.log(res);
        },
    },
}
</script>

<style scoped lang="less">
.login-form {

}

</style>