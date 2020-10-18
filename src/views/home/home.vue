<template>
    <div class="home">
        <home-header></home-header>
        <van-tabs swipeable sticky>
            <van-tab v-for="index in 8" :key="index" :title="'标签 ' + index">
                内容 {{ index }}
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import homeHeader from "@/views/home/components/homeHeader";
import {getVideoList} from "@/api/home"
export default {
    name: "home",
    components: {
        homeHeader,
    },
    created() {
        getVideoList();
    }
}
</script>

<style scoped lang="less">

</style>