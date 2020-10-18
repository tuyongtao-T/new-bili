<template>
    <div class="register-form">
        <van-form validate-first @failed="onFailed" @submit="registerSubmit">
            <van-field
                    v-model="formData.name"
                    label="姓名："
                    placeholder="请输入您的姓名"
            />
            <!-- 通过 validator 进行函数校验 -->
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
                    注册
                </van-button>
            </div>
        </van-form>
        <div class="loading" v-show="ifShow">
            <van-loading type="spinner" color="#1989fa"/>
        </div>
    </div>
</template>

<script>
import {register} from '@/api/register'
import {sleep} from '@/utils/sleep'
export default {
    name: "register-form",
    data() {
        return {
            formData: {
                name: '',
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
            this.ifShow = true;
            let res = await register(this.formData);
            sleep(1500);
            this.ifShow = false;
            if (res.data.code === 200) {
                this.$dialog.confirm({
                    message: '恭喜您，注册成功！是否进入登录界面？',
                }).then(() => {
                    _self.$router.push('login')
                }).catch(() => {
                    return;
                });
            }else{
                await this.$dialog.alert({
                    message: '账号已存在，请重新输入账号！',
                })
            }
            //console.log(res);
        },
    },
};
</script>

<style scoped lang="less">
.register-form {
    position: relative;
    .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

</style>