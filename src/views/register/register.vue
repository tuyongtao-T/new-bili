<template>
    <div class="register">
        <register-header :cfg="cfg"></register-header>
        <div class="content">
            <register-form></register-form>
        </div>
    </div>
</template>

<script>
import registerHeader from '@/components/commons/registerHeader'
import RegisterForm from "@/views/register/components/registerForm";

export default {
    name: "register",
    components: {
        registerHeader,
        RegisterForm,
    },
    data() {
        return {
            cfg: {
                title: '注册账号',
                btnText: '返回到登录',
                path: 'login',
            },
        }
    },
    methods: {

    }

}
</script>

<style scoped lang="less">
.register {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    .content {
        width: 100%;
        margin-top: 2.78vw;
    }
}

</style>