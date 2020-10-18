<template>
    <div class="login">
        <register-header :cfg="cfg"></register-header>
        <div class="content">
            <login-form></login-form>
        </div>
    </div>
</template>

<script>
import registerHeader from "@/components/commons/registerHeader";
import loginForm from "@/views/login/components/loginForm";
export default {
    name: "login",
    components: {
        registerHeader,
        loginForm
    },
    data() {
        return {
            cfg: {
                title: '登录',
                btnText: '切换到注册页',
                path: 'register',
            },
        }
    }

}
</script>

<style scoped lang="less">
.login {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    .content {
        width: 100%;
        margin-top: 8vw;
    }
}

</style>