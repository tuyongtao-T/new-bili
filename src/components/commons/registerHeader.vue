<template>
    <div class="header">
        <slot></slot>
        <div class="title">
            {{ config.title }}
        </div>
        <div class="btn">
            <van-button plain size="small" type="primary" @click="goTo">{{ config.btnText }}</van-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "register-header",
    props: {
        cfg: {}
    },
    data() {
        return {
            config: {}
        }
    },
    methods: {
        goTo() {
            this.$router.push(this.config.path);
        }
    },
    created() {
        this.config = this.cfg;
    }

}
</script>

<style scoped lang="less">
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 12.5vw;
    background-color: white;
    position: relative;

    .title {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4.44vw;
    }

    .btn {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
    }

}

</style>